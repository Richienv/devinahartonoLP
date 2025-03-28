"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="pt-24 md:pt-32 pb-16 md:pb-20 relative bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.05),rgba(255,255,255,0))]" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center space-y-8"
          >
            {/* Logo */}
            <Link 
              href="/" 
              className="group relative flex items-center space-x-3 overflow-hidden"
            >
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-neutral-500/5 via-transparent to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Logo Image */}
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <Image
                  src="https://images.unsplash.com/photo-1613294326794-e47d58553bd1?q=80&w=200&auto=format&fit=crop"
                  alt="Logo"
                  fill
                  className="object-contain transition-transform group-hover:scale-105 duration-500"
                  priority
                />
              </div>
              
              <span className="text-xl font-instrument-serif tracking-wide text-neutral-900">
                fintrust
              </span>
            </Link>

            {/* Optional: Additional footer content */}
            <div className="text-center space-y-4">
              <p className="text-sm text-neutral-600">
                © {new Date().getFullYear()} All rights reserved.
              </p>
              
              {/* Optional: Social links */}
              <div className="flex items-center justify-center space-x-6">
                {['Instagram', 'LinkedIn', 'Twitter'].map((social) => (
                  <Link
                    key={social}
                    href="#"
                    className="text-xs tracking-wide text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
                  >
                    {social}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Subtle gradient effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-radial from-neutral-500/5 via-transparent to-transparent blur-[100px] opacity-60" />
          </div>
        </div>
      </div>

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
      </div>
    </footer>
  );
}