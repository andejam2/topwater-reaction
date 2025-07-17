"use client";
import { useState } from "react";
import { useCart } from "./cartcontext";

export default function LureCard({id, name, price, image}) {
    const [quantity, setQuantity] = useState(1);
    const {addToCart} = useCart();

    const handleAdd = () => {
        addToCart({id, name, price, quantity, image});
    };

    return (
        <div className="flex flex-col items-center text-center text-white p-4 shadow rounded bg-black trasition-transform duration-200 hover:scale-105">
            <img src={image} alt={name} className="w-full rounded mb-2" />
            <h2 className="font-semibold text-lg text-gray-600">{name}</h2>
            <p className="text-gray-600">${price.toFixed(2)}</p>
            <div className="flex items-center gap-2 my-2">
                <div className="flex flex-xol items-center">
                    <label className="text-sm text-gray-600 mb-1">Quantity</label>
                    <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                        className="bg-gray-300 text-white w-16 text-center border border-gray-400 rounded px-2 py-1"
                    />
                </div>
                <button
                    className="bg-[#7A9C45] hover:bg-[#8FB952] active:bg-odgreen text-white px-4 py-1 rounded"
                    onClick={handleAdd}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}