import Stripe from "stripe";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const session_id = searchParams.get("session_id");
  if (!session_id) return new Response("Missing session_id", { status: 400 });

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["payment_intent", "line_items.data.price.product"],
  });

  return new Response(JSON.stringify(session), { status: 200 });
}
