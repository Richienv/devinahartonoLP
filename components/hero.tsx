"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SilverGradientDivider } from "@/components/ui/silver-gradient-divider";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useScroll, useTransform, useSpring } from "framer-motion";

const requirements = [
  "Tanpa Pengalaman Sebelumnya",
  "Tanpa Modal Besar",
  "Tanpa Batasan Usia",
  "Tanpa Target Penjualan",
  "Tanpa Syarat Rumit",
  "Tanpa Biaya Pendaftaran"
];

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop",
    title: "EXCLUSIVE GATHERING",
    date: "02.03.2024",
    description: "Bergabung dengan komunitas eksklusif kami dan bangun koneksi seumur hidup dengan para high achievers"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop",
    title: "TRANSFORMASI BISNIS",
    date: "18.09.2024", 
    description: "Pelajari rahasia scaling bisnis dari para expert yang telah membuktikan kesuksesannya"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1507878866276-a947ef722fee?q=80&w=1600&auto=format&fit=crop",
    title: "MASTERMIND SESSION",
    date: "18.09.2024",
    description: "Diskusi eksklusif dan sharing pengalaman dengan para entrepreneur sukses di komunitas kami"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1559223607-a43f990c095d?q=80&w=1600&auto=format&fit=crop",
    title: "CELEBRATION OF SUCCESS",
    date: "18.09.2024",
    description: "Rayakan pencapaian luar biasa bersama member komunitas yang telah mencapai kebebasan finansial"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });



  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-gradient-to-b from-neutral-100 to-white">


      {/* Main hero content - adjusted spacing for tighter title */}
      <div className="relative z-10 container mx-auto min-h-[calc(100vh-64px)] pt-16 sm:pt-20 px-4 sm:px-6">
        {/* Magazine-style title with reduced spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-20 text-center mb-2 sm:mb-4"  
        >
          <AnimatedShinyText
            className="text-xs sm:text-sm tracking-[0.3em] text-neutral-500 uppercase metallic-effect inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
            shimmerWidth={200}
          >
            Kesempatan Terbatas
          </AnimatedShinyText>
          
          <div className="relative mt-3 sm:mt-4">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[1.6rem] sm:text-6xl md:text-7xl lg:text-8xl font-instrument-serif italic 
              leading-[1] sm:leading-[0.85] text-neutral-900 max-w-[95%] mx-auto block"
            >
              <span className="whitespace-nowrap">Sukses Bersama</span>
              <br className="hidden sm:block" />
              <span className="text-[1.4rem] sm:text-5xl md:text-6xl lg:text-7xl font-instrument-serif 
              leading-[1.1] sm:leading-[0.85] text-neutral-800 normal-case block sm:inline whitespace-nowrap">
                High-Value Community
              </span>
            </motion.h1>
          </div>
        </motion.div>

        {/* Feature image section - adjusted margins and responsive grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative mt-6 sm:mt-8 md:mt-12"
        >
          <div className="relative w-full aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/30 mix-blend-overlay z-10" />
            <Image
              src={slides[currentSlide].image}
              alt="Exclusive gathering"
              fill
              className="object-cover transition-opacity duration-500"
              priority
            />
          </div>

          {/* Image caption - responsive grid */}
          <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 px-2 sm:px-4">
            <div className="sm:col-span-3">
              <h3 className="text-xs sm:text-sm font-medium tracking-[0.2em] text-neutral-900 uppercase">
                {slides[currentSlide].title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                {slides[currentSlide].date}
              </p>
            </div>
            <div className="col-span-1 sm:col-span-6">
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {slides[currentSlide].description}
              </p>
            </div>
            {/* Hide counter and next button on mobile */}
            <div className="hidden sm:flex sm:col-span-3 justify-end items-center">
              <span className="text-sm text-neutral-400">{currentSlide + 1}/{slides.length}</span>
              <button 
                className="ml-4 p-2 hover:bg-neutral-100 rounded-full transition-colors"
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              >
                <svg className="w-6 h-6 text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        {/* CTA section - adjusted spacing and responsive sizing */}
        <div className="relative z-20 mt-8 sm:mt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button 
              className="px-6 sm:px-8 py-6 sm:py-9 text-base sm:text-lg tracking-[0.2em] bg-neutral-900 
              text-white hover:bg-neutral-800 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl"
            >
              JOIN SEKARANG
            </Button>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-neutral-600 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base mb-6 sm:mb-8 pt-6 sm:pt-8 px-4"
          >
            Setiap detik yang kamu habiskan untuk ragu, orang lain sudah mengambil langkah untuk mengubah hidup mereka.
            Jangan biarkan kesempatan ini berlalu begitu saja.
          </motion.p>
        </div>

        {/* Requirements ticker - adjusted padding */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 sm:mt-16 border-t border-neutral-200"
        >
          <div className="relative overflow-hidden py-4 sm:py-6">
            <div className="flex animate-marquee-infinite whitespace-nowrap">
              {[...requirements, ...requirements].map((req, index) => (
                <span
                  key={index}
                  className="mx-6 sm:mx-8 text-xs sm:text-sm tracking-[0.2em] text-neutral-600"
                >
                  {req}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Magazine-style About Us Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-24 mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 text-left">
              <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase">
                Kisah Perjalananku
              </span>
              
              <h2 className="mt-6 font-instrument-serif">
                <span className="block text-[2.5rem] sm:text-6xl leading-[1.1] text-neutral-900">
                  Dari Introvert
                </span>
                <span className="block text-[2rem] sm:text-5xl uppercase mt-2">
                  MENJADI PEMIMPIN
                </span>
                <span className="block text-[1.8rem] sm:text-4xl italic font-light mt-1">
                  perjalanan
                </span>
                <span className="block text-[2.2rem] sm:text-5xl uppercase mt-1">
                  TRANSFORMASIKU
                </span>
              </h2>
            </div>

            <div className="lg:col-span-7 lg:pl-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-instrument-serif leading-snug text-neutral-800 mb-8">
                Sudah siap keluar dari zona nyamanmu? Mari kuceritakan bagaimana aku berubah dari seorang introvert pemalu menjadi business leader yang percaya diri.
              </h3>
              
              <p className="text-neutral-600 leading-relaxed mb-6">
                4 tahun yang lalu, aku hanyalah seorang introvert yang takut berbicara di depan umum. Sekarang, aku telah membangun bisnis yang menghasilkan pendapatan 8-digit setiap bulannya. Perjalananku membuktikan bahwa kepribadianmu tidak menentukan kesuksesanmu - tekadmu yang menentukan.
              </p>

              <p className="text-neutral-600 leading-relaxed">
                Jangan biarkan sifat introvertmu menghalangi kesuksesanmu. Aku telah membangun jaringan dengan ratusan individu high-value dan menemukan kebahagiaan sejati dalam prosesnya. Siap untuk menulis kisah suksesmu sendiri? Join sekarang dan temukan potensi tersembunyimu.
              </p>

              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <p className="text-3xl sm:text-4xl font-instrument-serif text-neutral-900">4 Tahun</p>
                  <p className="text-sm text-neutral-600 mt-2">Waktu Transformasi Total</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-instrument-serif text-neutral-900">8 Digit</p>
                  <p className="text-sm text-neutral-600 mt-2">Pendapatan Bulanan</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-8">
                <div>
                  <p className="text-3xl sm:text-4xl font-instrument-serif text-neutral-900">500+</p>
                  <p className="text-sm text-neutral-600 mt-2">Koneksi Bisnis</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-instrument-serif text-neutral-900">100%</p>
                  <p className="text-sm text-neutral-600 mt-2">Kepuasan Hidup</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Video Section */}
        <motion.div 
          ref={videoRef}
          className="relative -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-16 xl:-mx-24 mt-32 mb-24"
        >
          {/* Video Title Section */}
          <div className="text-center mb-16 max-w-4xl mx-auto px-4">
            <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase">
              JIKA KAMU INGIN BERUBAH
            </span>
            <h2 className="mt-6 font-instrument-serif">
              <span className="block text-[1.8rem] sm:text-5xl italic font-light mt-2 text-neutral-800">
                Luangkan Waktumu untuk Mendengarkan
              </span>
              <span className="block text-[2.2rem] sm:text-6xl uppercase mt-1">
                Apa yang Ingin Aku Sampaikan..
              </span>
            </h2>
          </div>

          {/* Full Width Video Container */}
          <div className="group relative">
            <div className="relative w-full aspect-video bg-white">
              {/* Video */}
              <iframe
                src="https://www.youtube.com/embed/RcGyVTAoXEU"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              {/* Simple Corner Accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-l border-t border-neutral-200" />
              <div className="absolute top-0 right-0 w-16 h-16 border-r border-t border-neutral-200" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-l border-b border-neutral-200" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-neutral-200" />
            </div>

            {/* Caption */}
            <div className="absolute -bottom-8 left-4 right-4">
              <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
                <span className="text-xs tracking-[0.2em] text-neutral-500">MARIA</span>
                <span className="text-xs tracking-[0.2em] text-neutral-500">2024</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}