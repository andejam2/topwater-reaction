"use client";
import { useCart } from "../components/cartcontext";
import { useState } from "react";
import LureCard from "../components/lurecard";
import { priceIds } from "../lib/priceIds";

export default function FeatherPopPage() {
    const [quantity, setQuantity] = useState(1);
    const {addToCart} = useCart();
    const lures = [
        {
            id: "bluegill",
            name: "Blue with Bluegill Skirt",
            price: 15.78,
            image: "/featherpopblue1.jpg",
            priceId: priceIds["bluegill"]
        },
        {
            id: "greenchartreuse",
            name: "Green with Chartreuse Shad Skirt",
            price: 15.78,
            image: "/featherpopgrn1.jpg",
            priceId: priceIds["greenchartreuse"]
        },
        {
            id: "pumpkinseed",
            name: "Purple with Pumpkin Seed Skirt",
            price: 15.78,
            image: "/featherpoppurple1.jpg",
            priceId: priceIds["pumpkinseed"]
        },
        {
            id: "gizzardshad",
            name: "Red with Gizzard Shad Skirt",
            price: 15.78,
            image: "/featherpopred1.jpg",
            priceId: priceIds["gizzardshad"]
        },
        {
            id: "sexyshad",
            name: "Yellow with Sexy Shad Skirt",
            price: 15.78,
            image: "/featherpopyellow1.jpg",
            priceId: priceIds["sexyshad"]
        },
    ]

    return (
        <main className="font-sans bg-black text-white min-h-screen p-8">
            <h1 className="text-4xl font-bold mb-2 text-center">Feather Pop</h1>
            <h2 className="text-center mb-6">This lure is 2 1/2&quot; and weighs approx. 1/3 oz with a smooth body.</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {lures.map((lure) => (
                    <LureCard key={lure.id} {...lure} />
                ))}
            </div>
        </main>
    );
}