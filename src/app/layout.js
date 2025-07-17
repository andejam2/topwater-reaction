import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import { CartProvider } from "./components/cartcontext";

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
          <nav className="bg-black border-b-2 border-odgreen p-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-odgreen">Topwater Reaction Baits</div>
            <div className="space-x-4 text-sm md:text-base">
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
