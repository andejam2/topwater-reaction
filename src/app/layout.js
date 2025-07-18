import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import { CartProvider } from "./components/cartcontext";
import Image from 'next/image';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Topwater Reaction Baits",
  description: "Custom fishing lures built to crush.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        <CartProvider>
          <nav className="bg-black border-b-2 border-odgreen py-0 px-4 flex justify-between items-end">
            <div className="flex items-start py-2 px-3">
              <Image
                src="/logoODgreenclear.jpg"
                alt="Topwater Reaction Baits Logo"
                width={250}
                height={250}
                className="object-contain"
              />
            </div>
            <div className="space-x-4 text-sm md:text-base pb-4">
              <Link href="/" className="hover:text-odgreen">Home</Link>
              <Link href="/feather-pop" className="hover:text-odgreen">Feather Pop</Link>
              <Link href="/gilled-popper" className="hover:text-odgreen">Gilled Popper</Link>
              <Link href="/topwalker" className="hover:text-odgreen">TopWalker</Link>
              <Link href="/cart" className="hover:text-odgreen">Cart</Link>
              <Link href="/about" className="hover:text-odgreen">About Us</Link>
              <Link href="/contact" className="hover:text-odgreen">Contact</Link>
            </div>
          </nav>
          <main className="p-4">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
