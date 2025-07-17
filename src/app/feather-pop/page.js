"use client";
import { useCart } from "../components/cartcontext";
import { useState } from "react";
import LureCard from "../components/lurecard";

export default function FeatherPopPage() {
    const [quantity, setQuantity] = useState(1);
    const {addToCart} = useCart();
    const lures = [
        {
            id: "bluegill",
            name: "Blue with Bluegill Skirt",
            price: 13.59,
            image: "/featherpopblue.jpg",
        },
        {
            id: "greenchartreuse",
            name: "Green with Chartreuse Shad Skirt",
            price: 13.59,
            image: "/featherpopgrn.jpg",
        },
        {
            id: "pumpkinseed",
            name: "Purple with Pumpkin Seed Skirt",
            price: 13.59,
            image: "/featherpoppurple.jpg",
        },
        {
            id: "gizzardshad",
            name: "Red with Gizzard Shad Skirt",
            price: 13.59,
            image: "/featherpopred.jpg",
        },
        {
            id: "sexyshad",
            name: "Yellow with Sexy Shad Skirt",
            price: 13.59,
            image: "/featherpopyellow.jpg",
        },
    ]

    return (
        <main className="font-sans bg-black text-white min-h-screen p-8">
            <h1 className="text-4xl font-bold mb-2 text-center">Feather Pop</h1>
            <h2 className="text-center mb-6">This lure is 2 1/2" and weighs approx. 1/3 oz with a smooth body.</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {lures.map((lure) => (
                    <LureCard key={lure.id} {...lure} />
                ))}
            </div>
        </main>
    );
}