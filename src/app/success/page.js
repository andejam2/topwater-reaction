"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useCart } from "../components/cartcontext";
import Link from "next/link";

export default function SuccessPage() {
  const params = useSearchParams();
  const sessionId = params.get("session_id");
  const [session, setSession] = useState(null);
  const { clearCart } = useCart();

  useEffect(() => {
    if (!sessionId) return;
    (async () => {
      const res = await fetch(`/api/checkout/session?session_id=${sessionId}`);
      if (res.ok) {
        const data = await res.json();
        setSession(data);
        // Clear cart once after successful paid session
        if (data.payment_status === "paid") clearCart();
      }
    })();
  }, [sessionId, clearCart]);

  const email = session?.customer_details?.email;
  const total = session ? (session.amount_total / 100).toFixed(2) : null;
  const items = session?.line_items?.data || [];

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-2xl mx-auto bg-gray-900/60 border border-gray-700 rounded-xl p-6">
        <h1 className="text-3xl font-bold mb-2">Thank you for your order!</h1>
        <p className="opacity-80 mb-4">
          {email ? `A receipt has been sent to ${email}.` : "Your payment was successful."}
        </p>

        {total && (
          <div className="mb-4">
            <div className="text-xl font-semibold">Total Paid: ${total}</div>
          </div>
        )}

        {items.length > 0 && (
          <ul className="divide-y divide-gray-700">
            {items.map((li) => (
              <li key={li.id} className="py-3 flex items-center justify-between">
                <div>
                  <div className="font-medium">{li.description}</div>
                  {li.price?.unit_amount != null && (
                    <div className="text-sm opacity-70">
                      ${(li.price.unit_amount / 100).toFixed(2)} each × {li.quantity}
                    </div>
                  )}
                </div>
                <div className="font-semibold">
                  ${((li.price?.unit_amount || 0) * (li.quantity || 1) / 100).toFixed(2)}
                </div>
              </li>
            ))}
          </ul>
        )}

        <Link href="/" className="inline-block mt-6 bg-odgreen hover:bg-green-700 text-white px-4 py-2 rounded">
          Continue shopping
        </Link>
      </div>
    </main>
  );
}
