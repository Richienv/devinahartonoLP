'use client'

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="relative">
      {/* Simple Glass Background */}
      <div className="relative bg-white/80 backdrop-blur-sm border-b border-neutral-200/50">
        {/* Navbar Content */}
        <nav className="container mx-auto px-4 py-3 flex items-center justify-center">
          <Link href="/" className="relative flex items-center gap-2">
            {/* Logo Container */}
            <div className="relative w-12 h-12 md:w-16 md:h-16">
              <Image
                src="https://images.unsplash.com/photo-1613294326794-e47d58553bd1?q=80&w=200&auto=format&fit=crop"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </nav>
      </div>
    </div>
  );
}