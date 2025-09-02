"use client"
import { useCart } from "../components/cartcontext";
import { useState } from "react";
import LureCard from "../components/lurecard";
import { priceIds } from "../lib/priceIds";

export default function GilledPopperPage() {
    const [quantity, setQuantity] = useState(1);
    const {addToCart} = useCart();
    const lures = [
        {
            id: "gilled-blackwalleye",
            name: "Black with Walleye Skirt",
            price: 12.99,
            image: "/gilledpopperblack1.jpg",
            priceId: priceIds["gilled-blackwalleye"]
        },
        {
            id: "gilled-bluecitrus",
            name: "Blue with Citrus Shad Skirt",
            price: 12.99,
            image: "/gilledpopperblueblack1.jpg",
            priceId: priceIds["gilled-bluecitrus"]
        },
        {
            id: "gilled-greenbabybass",
            name: "Green with Baby Bass Skirt",
            price: 12.99,
            image: "/gilledpoppergreenblack1.jpg",
            priceId: priceIds["gilled-greenbabybass"]
        },
        {
            id: "gilled-ivorygoldshiner",
            name: "Ivory with Golden Shiner Skirt",
            price: 12.99,
            image: "/gilledpopperivoryblack1.jpg",
            priceId: priceIds["gilled-ivorygoldshiner"]
        },
        {
            id: "gilled-orangebluegill",
            name: "Orange with Bluegill Skirt",
            price: 12.99,
            image: "/gilledpopperorangeblack1.jpg",
            priceId: priceIds["gilled-orangebluegill"]
        },
        {
            id: "gilled-purplepumpkin",
            name: "Purple with Pumpkin Seed Skirt",
            price: 12.99,
            image: "/gilledpopperpurpleblack1.jpg",
            priceId: priceIds["gilled-purplepumpkin"]
        },
        {
            id: "gilled-redgizzard",
            name: "Red with Gizzard Shad Skirt",
            price: 12.99,
            image: "/gilledpopperredblack1.jpg",
            priceId: priceIds["gilled-redgizzard"]
        },
        {
            id: "gilled-yellowsexyshad",
            name: "Yellow with Sexy Shad Skirt",
            price: 12.99,
            image: "/gilledpopperyellowblack1.jpg",
            priceId: priceIds["gilled-yellowsexyshad"]
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

