// src/app/components/Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand blurb */}
        <div>
          <h2 className="text-lg font-semibold text-white">Topwater Reaction Baits</h2>
          <p className="mt-2 text-sm text-gray-400">
            Handmade bass lures crafted for serious topwater strikes.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              Email{" "}
              <a href="/contact" className="hover:text-white">
                topwaterreactionbaits.com
              </a>
            </li>
            <li>Proudly made in Lafayette, Tn</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/cart" className="hover:text-white">Cart</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Topwater Reaction Baits. All rights reserved.
      </div>
    </footer>
  );
}
