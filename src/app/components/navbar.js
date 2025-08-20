"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="bg-black border-b-2 border-odgreen sticky top-0 z-50">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logoODgreenclear.jpg"
                            alt="Topwater Reaction Baits"
                            width={160}
                            height={160}
                            priority
                            className="h-12 w-auto md:h-14"
                        />
                    </Link>
                    <div className="flex items-center gap-4 md:gap-6 text-sm md:text-base">
                        <Link href="/" className="hover:text-odgreen">Home</Link>
                        <Link href="/feather-pop" className="hover:text-odgreen">Feather Pop</Link>
                        <Link href="/gilled-popper" className="hover:text-odgreen">Gilled Popper</Link>
                        <Link href="/topwalker" className="hover:text-odgreen">TopWalker</Link>
                        <Link href="/cart" className="hover:text-odgreen">Cart</Link>
                        <Link href="/about" className="hover:text-odgreen">About Us</Link>
                        <Link href="/contact" className="hover:text-odgreen">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}