import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { CartProvider } from "./components/cartcontext";
import Image from "next/image";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

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
          <Navbar />
          <main className="p-4">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
