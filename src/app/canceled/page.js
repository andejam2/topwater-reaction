export default function CanceledPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-xl mx-auto bg-gray-900/60 border border-gray-700 rounded-xl p-6 text-center">
        <h1 className="text-3xl font-bold mb-2">Checkout canceled</h1>
        <p className="opacity-80">No worries—your cart is still saved if you want to try again.</p>
        <a href="/cart" className="inline-block mt-6 bg-white/10 hover:bg-white/20 px-4 py-2 rounded">
          Return to cart
        </a>
      </div>
    </main>
  );
}
