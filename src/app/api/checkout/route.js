import Stripe from "stripe";

export async function POST(request) {
  try {
    const { items } = await request.json(); // [{ id, name, price, quantity, image }]
    if (!items?.length) {
      return new Response(JSON.stringify({ error: "No items" }), { status: 400 });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const line_items = items.map((it) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: it.name,
          // include full URL for images
          images: it.image ? [new URL(it.image, process.env.NEXT_PUBLIC_BASE_URL).toString()] : [],
        },
        unit_amount: Math.round(Number(it.price) * 100),
      },
      quantity: Number(it.quantity) || 1,
    }));

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      // You can add automatic tax later: automatic_tax: { enabled: true },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/canceled`,
    });

    return new Response(JSON.stringify({ url: session.url }), { status: 200 });
  } catch (err) {
    console.error("Checkout error:", err);
    return new Response(JSON.stringify({ error: "Checkout error" }), { status: 500 });
  }
}
