"use client";
import { useCart } from "../components/cartcontext";
import { useState } from "react";
import LureCard from "../components/lurecard";
import { priceIds } from "../lib/priceIds";

export default function TopWalkerPage() {
    const [quantity, setQuantity] = useState(1);
    const {addToCart} = useCart();
    const lures = [
        {
            id: "topwalker-blackcrappie",
            name: "Black with Crappie Skirt",
            price: 12.99,
            image: "/topwalkerblack1.jpg",
            priceId: priceIds["topwalker-blackcrappie"]
        },
        {
            id: "topwalker-bluechartreuse",
            name: "Blue with Chartreuse Shad Skirt",
            price: 12.99,
            image: "/topwalkerblue1.jpg",
            priceId: priceIds["topwalker-bluechartreuse"]
        },
        {
            id: "topwalker-graytennessee",
            name: "Gray with Tennessee Shad Skirt",
            price: 12.99,
            image: "/topwalkergray1.jpg",
            priceId: priceIds["topwalker-graytennessee"]
        },
        {
            id: "topwalker-ivorywalleye",
            name: "Ivory with Walleye Skirt",
            price: 12.99,
            image: "/topwalkerivoryblack1.jpg",
            priceId: priceIds["topwalker-ivorywalleye"]
        },
        {
            id: "topwalker-orangebluegill",
            name: "Orange with Bluegill Skirt",
            price: 12.99,
            image: "/topwalkerorange1.jpg",
            priceId: priceIds["topwalker-orangebluegill"]
        },
        {
            id: "topwalker-orangecitrus",
            name: "Orange with Citrus Shad Skirt",
            price: 12.99,
            image: "/topwalkerorangeblack1.jpg",
            priceId: priceIds["topwalker-orangecitrus"]
        },
        {
            id: "topwalker-purplepumpkin",
            name: "Purple with Pumpkin Seed Skirt",
            price: 12.99,
            image: "/topwalkerpurple1.jpg",
            priceId: priceIds["topwalker-purplepumpkin"]
        },
        {
            id: "topwalker-redgizzard",
            name: "Red with Gizzard Shad Skirt",
            price: 12.99,
            image: "/topwalkerred1.jpg",
            priceId: priceIds["topwalker-redgizzard"]
        },
        {
            id: "topwalker-redblackgizzard",
            name: "Red/Black with Gizzard Shad Skirt",
            price: 12.99,
            image: "/topwalkerredblack1.jpg",
            priceId: priceIds["topwalker-redblackgizzard"]
        },
        {
            id: "topwalker-whitegoldshiner",
            name: "White with Golden Shiner Skirt",
            price: 12.99,
            image: "/topwalkerwhite1.jpg",
            priceId: priceIds["topwalker-whitegoldshiner"]
        },
        {
            id: "topwalker-yellowsexyshad",
            name: "Yellow with Sexy Shad Skirt",
            price: 12.99,
            image: "/topwalkeryellow1.jpg",
            priceId: priceIds["topwalker-yellowsexyshad"]
        },
        {
            id: "topwalker-yellowperch",
            name: "Yellow with Yellow Perch Skirt",
            price: 12.99,
            image: "/topwalkeryellowblack1.jpg",
            priceId: priceIds["topwalker-yellowperch"]
        },
        {
            id: "topwalker-browntrout",
            name: "Yellow/Brown with Rainbow Trout Skirt",
            price: 12.99,
            image: "/topwalkeryellowbrown1.jpg",
            priceId: priceIds["topwalker-browntrout"]
        },
        {
            id: "topwalker-candyshad",
            name: "Yellow/Green with Candy Shad Skirt",
            price: 12.99,
            image: "/topwalkeryellowgreen1.jpg",
            priceId: priceIds["topwalker-candyshad"]
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