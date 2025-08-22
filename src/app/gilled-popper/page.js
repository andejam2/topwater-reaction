"use client"
import { useCart } from "../components/cartcontext";
import { useState } from "react";
import LureCard from "../components/lurecard";

export default function GilledPopperPage() {
    const [quantity, setQuantity] = useState(1);
    const {addToCart} = useCart();
    const lures = [
        {
            id: "gilled-blackwalleye",
            name: "Black with Walleye Skirt",
            price: 12.99,
            image: "/gilledpopperblack.jpg"
        },
        {
            id: "gilled-bluecitrus",
            name: "Blue with Citrus Shad Skirt",
            price: 12.99,
            image: "/gilledpopperblueblack.jpg",
            priceId: "price_1RyvX2GuGV8LB8ft4w1qP1E3"
        },
        {
            id: "gilled-greenbabybass",
            name: "Green with Baby Bass Skirt",
            price: 12.99,
            image: "/gilledpoppergreenblack.jpg"
        },
        {
            id: "gilled-ivorygoldshiner",
            name: "Ivory with Golden Shiner Skirt",
            price: 12.99,
            image: "/gilledpopperivoryblack.jpg"
        },
        {
            id: "gilled-orangebluegill",
            name: "Orange with Bluegill Skirt",
            price: 12.99,
            image: "/gilledpopperorangeblack.jpg"
        },
        {
            id: "gilled-purplepumpkin",
            name: "Purple with Pumpkin Seed Skirt",
            price: 12.99,
            image: "/gilledpopperpurpleblack.jpg"
        },
        {
            id: "gilled-redgizzard",
            name: "Red with Gizzard Shad Skirt",
            price: 12.99,
            image: "/gilledpopperredblack.jpg"
        },
        {
            id: "gilled-yellowsexyshad",
            name: "Yellow with Sexy Shad Skirt",
            price: 12.99,
            image: "/gilledpopperyellowblack.jpg"
        },
    ]
    return (
        <main className="font-sans bg-black text-white min-h-screen p-8">
            <h1 className="text-4xl font-bold mb-2 text-center">Gilled Popper</h1>
            <h2 className="mb-6 text-center">This lure is 2 1/2&quot; and weighs approx. 1/2 oz.  It is a more traditional stubby body with gills and scales and a large mouth.</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {lures.map((lure) => (
                    <LureCard key={lure.id} {...lure} />
                ))}
            </div>
        </main>
    );
}