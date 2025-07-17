"use client";
import { useCart } from "../components/cartcontext";


export default function CartPage() {
    const {cartItems, removeFromCart, clearCart} = useCart();
    const cartTotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div className="p-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is currently empty.</p>
            ) : (
                <>
                    <ul className="space-y-4">
                        {cartItems.map((item) => {
                            console.log("cart item:", item);
                            return (
                                <li key={item.id} className="border p-4 rounded text-left flex gap-4 items-center bg-black text-white">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-66 h-24 object-cover rounded"
                                    />
                                    <div>
                                        <div className="font-semibold">{item.name}</div>
                                        <div>Quantity: {item.quantity}</div>
                                        <div>Price: ${(item.price * item.quantity).toFixed(2)}</div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-sm text-red-500 hover:underline mt-2"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="mt-6 text-lg font-semibold text-whiet">
                        Totol: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                    </div>
                    <button
                        onClick={clearCart}
                        className="mt-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                    >
                        Clear Cart
                    </button>
                </>
            )}
        </div>
    )
}
