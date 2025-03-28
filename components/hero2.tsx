"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Image from "next/image";
import { SilverGradientDivider } from "@/components/ui/silver-gradient-divider";
import { motion } from "framer-motion";

const requirements = [
  "Without Previous Experience",
  "Without Spending Millions",
  "Without Age Limit",
  "Without Capital Required",
  "Without Sales Target",
  "Without Complex Requirements"
];

export default function Hero2() {
  return (
    <div className="relative min-h-[100vh] overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
      {/* Background Effects Container */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-red-900/40 via-red-800/20 to-transparent blur-[100px] opacity-60 animate-blob" />
          <div className="absolute -top-20 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-red-950/40 via-red-900/20 to-transparent blur-[80px] opacity-50 animate-blob animation-delay-2000" />
          <div className="absolute top-1/3 left-1/3 w-[800px] h-[400px] bg-gradient-radial from-red-800/30 via-red-900/15 to-transparent blur-[120px] opacity-40 animate-blob animation-delay-4000" />
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(185,28,28,0.15),transparent_60%)] mix-blend-soft-light" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(220,38,38,0.12),transparent_50%)] mix-blend-soft-light" />
          
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-red-700/20 to-transparent rounded-full filter blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-red-800/20 to-transparent rounded-full filter blur-2xl animate-pulse animation-delay-2000" />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="relative z-50">
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-7xl">
          <div className="relative">
            <div className="relative bg-black/10 backdrop-blur-sm rounded-full border border-white/5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="px-4 md:px-6 py-2">
                <Navbar />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 md:pt-48 pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto text-center space-y-8 md:space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mx-auto"
          >
            <p className="text-[10px] md:text-sm text-gray-400 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              Mau Tau Rahasia Sukses di Insurance Industry?
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4 md:space-y-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-normal tracking-tight text-white leading-tight px-2">
              Ready to Scale<br/>
              <span className="relative inline-block text-white">
                <div className="relative font-instrument-serif italic">
                  Your Income With Us?
                </div>
              </span>
            </h1>
            <p className="text-sm md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light tracking-normal">
              Udah saatnya kamu stop berada di zona nyaman. Join our elite team dan akses proven system yang udah tested. Your time is now!
            </p>
          </motion.div>

          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative aspect-video w-full max-w-5xl mx-auto mt-12 md:mt-16"
          >
            <div className="absolute -inset-4 bg-gradient-radial from-red-500/20 via-red-800/10 to-transparent blur-[40px]" />
            <div className="absolute -inset-8 bg-gradient-conic from-orange-500/10 via-red-500/10 to-orange-500/10 blur-[50px] animate-spin-slow" />
            <div className="absolute -inset-2 bg-gradient-to-b from-red-500/20 via-orange-400/10 to-white/5 blur-[30px] animate-pulse" />
            
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl bg-black/90">
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 via-orange-900/10 to-transparent opacity-50" />
              
              <iframe
                className="w-full h-full relative z-10"
                src="https://youtu.be/RcGyVTAoXEU?si=jVnbt6P7F9YXy1gI"
                title="Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '0.75rem',
                }}
              />
              
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-radial from-red-500/30 to-transparent blur-2xl animate-pulse" />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-radial from-orange-500/20 to-transparent blur-2xl animate-pulse delay-75" />
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="pt-12 md:pt-16"
          >
            <Button 
              className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 text-base md:text-lg bg-white/10 text-white hover:bg-white/20 rounded-full shadow-xl transition-all duration-300"
            >
              Start Your Journey Now
            </Button>
          </motion.div>

          {/* Requirements Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-12 md:pt-16 relative"
          >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

            <div className="relative w-full overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

              <div className="flex whitespace-nowrap animate-marquee-infinite">
                {/* ... requirements mapping remains same ... */}
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mt-6" />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <SilverGradientDivider />
      </div>
    </div>
  );
}
