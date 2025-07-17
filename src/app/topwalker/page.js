"use client";

import { useCart } from "../components/cartcontext";
import { useState } from "react";
import LureCard from "../components/lurecard";

export default function TopWalkerPage() {
    const [quantity, setQuantity] = useState(1);
    const {addToCart} = useCart();
    const lures = [
        {
            id: "topwalker-blackcrappie",
            name: "Black with Crappie Skirt",
            price: 12.99,
            image: "/topwalkerblack.jpg"
        },
        {
            id: "topwalker-bluechartreuse",
            name: "Blue with Chartreuse Shad Skirt",
            price: 12.99,
            image: "/topwalkerblue.jpg"
        },
        {
            id: "topwalker-graytennessee",
            name: "Gray with Tennessee Shad Skirt",
            price: 12.99,
            image: "/topwalkergray.jpg"
        },
        {
            id: "topwalker-ivorywalleye",
            name: "Ivory with Walleye Skirt",
            price: 12.99,
            image: "/topwalkerivoryblack.jpg"
        },
        {
            id: "topwalker-orangebluegill",
            name: "Orange with Bluegill Skirt",
            price: 12.99,
            image: "/topwalkerorange.jpg"
        },
        {
            id: "topwalker-orangecitrus",
            name: "Orange with Citrus Shad Skirt",
            price: 12.99,
            image: "/topwalkerorangeblack.jpg"
        },
        {
            id: "topwalker-purplepumpkin",
            name: "Purple with Pumpkin Seed Skirt",
            price: 12.99,
            image: "/topwalkerpurple.jpg"
        },
        {
            id: "topwalker-redgizzard",
            name: "Red with Gizzard Shad Skirt",
            price: 12.99,
            image: "/topwalkerred.jpg"
        },
        {
            id: "topwalker-redbabybass",
            name: "Red with Baby Bass Skirt",
            price: 12.99,
            image: "/topwalkerredblack.jpg"
        },
        {
            id: "topwalker-whitegoldshiner",
            name: "White with Golden Shiner Skirt",
            price: 12.99,
            image: "/topwalkerwhite.jpg"
        },
        {
            id: "topwalker-yellowsexyshad",
            name: "Tellow with Sexy Shad Skirt",
            price: 12.99,
            image: "/topwalkeryellow.jpg"
        },
        {
            id: "topwalker-yellowperch",
            name: "Yellow with Yellow Perch Skirt",
            price: 12.99,
            image: "/topwalkeryellowblack.jpg"
        },
        {
            id: "topwalker-browntrout",
            name: "Yellow/Brown with Rainbow Trout Skirt",
            price: 12.99,
            image: "/topwalkeryellowbrown.jpg"
        },
        {
            id: "topwalker-candyshad",
            name: "Yellow/Green with Candy Shad Skirt",
            price: 12.99,
            image: "/topwalkeryellowgreen.jpg"
        },
        
    ]
    return(
        <main className="font-sans bg-black text-white min-h-scree p-8">
            <h1 className="text-4xl font-bold mb-2 text-center">TopWalker</h1>
            <h2 className="mb-6 text-center">This lure is 3 1/2&quot; and weighs approx. 5/8 oz. It is a streamlined body with gills and scales.</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {lures.map((lure) => (
                    <LureCard key={lure.id} {...lure} />
                ))}
            </div>
        </main>
    );
}