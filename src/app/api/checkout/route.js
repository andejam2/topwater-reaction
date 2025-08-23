import Stripe from "stripe";
import { headers } from "next/headers";

export async function POST(req) {
  const key = process.env.STRIPE_SECRET_KEY;

  // --- TEMP: log what the server actually sees ---
  console.log("checkout env:", {
    hasKey: !!key,
    prefix: key ? key.slice(0, 8) : "missing",
    origin: headers().get("origin"),
  });

  if (!key) {
    return new Response(
      JSON.stringify({ error: "Server misconfigured: missing STRIPE_SECRET_KEY" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const stripe = new Stripe(key);

  try {
    const { items } = await req.json();

    // TEMP: log the payload shape too
    console.log("checkout payload:", Array.isArray(items) ? items.length : items);

    const line_items = items.map((it) => {
      // Accept both shapes:
      // - string: "price_..."
      // - object: { test: "price_...", live: "" }
      const pid =
        typeof it.priceId === "string"
          ? it.priceId
          : it.priceId?.test ?? it.priceId?.live;

      if (!pid) {
        throw new Error(`Missing priceId for ${it.name || it.id}`);
      }

      return {
        price: pid,
        quantity: Number(it.quantity) || 1,
      };
    });


    const origin =
      headers().get("origin") || process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart`,
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Checkout error:", err);
    return new Response(JSON.stringify({ error: String(err?.message || err) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

