"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { SilverGradientDivider } from "./ui/silver-gradient-divider";

const benefits = [
  {
    title: "Exclusive Community",
    subtitle: "Private Networking Events",
    description: "Gak ada batas untuk penghasilan kamu! Makin giat hustling, makin gede income yang masuk. Our top performers udah buktiin dengan penghasilan 100jt+ per bulan!",
    value: "Rp. 50.000.000 / Tahun",
    image: "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?q=80&w=1600&auto=format&fit=crop",
    tag: "HIGHEST EARNING",   
    video: "/Included 1.mp4",
    type: "video/mp4"
  },
  {
    title: "Recognition & Growth",
    subtitle: "Excellence Rewards Program",
    description: "Bye bye 9-to-5! Design your own schedule, work from anywhere, kapanpun. Quality time sama keluarga? Traveling sambil kerja? You name it, you can do it!",
    value: "Rp. 10.000.000 / Tahun",
    image: "https://images.unsplash.com/photo-1630165036446-39a30baba604?q=80&w=1600&auto=format&fit=crop",
    time: "Community Project",
    tag: "WORK FREEDOM",
    video: "/benefits.mp4",
    type: "video/mp4"
  },
  {
    title: "Exclusive Events",
    subtitle: "High-Value Networking",
    description: "Level up your career at lightning speed! Dengan sistem mentoring yang proven + regular training, kamu bisa jadi expert dalam waktu singkat.",
    value: "Rp. 28.000.000 / Tahun",
    image: "https://images.unsplash.com/photo-1559330142-5de62bb0259c?q=80&w=1600&auto=format&fit=crop",
    time: "Community Event",
    tag: "CAREER PATH",
    video: "/benefit 2.mp4",
    type: "video/mp4"
  },
  {
    title: "Personal Development",
    subtitle: "Expert Mentorship Program",
    description: "Join circle of high achievers! Network sama orang-orang successful yang siap support your journey. Your network determines your net worth!",
    value: "Rp. 35.000.000 / Tahun",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop",
    time: "Community Achievement",
    tag: "STRONG TEAM",
    video: "/benefit 3.mp4",
    type: "video/mp4"
  }
];

export default function Benefits() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[400vh] bg-black"
    >
      <div className="absolute top-[3vh] left-0 right-0 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 text-center"
        >
          <span className="text-xs tracking-[0.3em] text-white/70 uppercase">
            Now Is the Time
          </span>
          
          <h2 className="mt-6 font-instrument-serif">
            <span className="block text-[2rem] sm:text-6xl leading-[1.1] text-white">
              Can you start to Imagine?
            </span>

            <span className="block text-[1.8rem] sm:text-5xl italic font-light mt-2 text-white">
              What can you achieve if you just start?
            </span>
          </h2>
        </motion.div>


        {/* Benefits Container - Now 2x2 Grid */}
        <div className="relative max-w-[95vw] mx-auto">
          {/* Cards Container - Now 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-x-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative w-full pt-32"
              >
               
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="sticky top-0 h-screen flex items-end overflow-hidden">
        {/* Background Images */}
        {benefits.map((benefit, index) => {
          const opacity = useTransform(
            scrollYProgress,
            [
              Math.max(0, index * 0.25 - 0.15),
              index * 0.25,
              (index + 1) * 0.25 - 0.15,
              (index + 1) * 0.25
            ],
            [0, 1, 1, 0]
          );
          const scale = useTransform(
            scrollYProgress,
            [index * 0.25, (index + 1) * 0.25],
            [1.05, 1]
          );

          return (
            <motion.div
              key={index}
              style={{ opacity }}
              className="absolute inset-0 w-full h-full"
            >
              <motion.div 
                style={{ scale }} 
                className="relative w-full h-full transition-transform duration-700"
              >
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </motion.div>
            </motion.div>
          );
        })}

        {/* Updated Content Container - Adjusted position */}
        <div className="relative w-full pb-80">
          {benefits.map((benefit, index) => {
            const opacity = useTransform(
              scrollYProgress,
              [
                Math.max(0, index * 0.3 - 0.15),
                index * 0.3,
                (index + 1) * 0.3 - 0.15,
                (index + 1) * 0.3
              ],
              [0, 1, 1, 0]
            );
            const x = useTransform(
              scrollYProgress,
              [
                index * 0.3,
                index * 0.3 + 0.05,
                (index + 1) * 0.3 - 0.2,
                (index + 1) * 0.3
              ],
              [100, 0, 0, -100]
            );

            return (
              <motion.div
                key={index}
                style={{ opacity, x }}
                className="absolute left-0 right-0 w-full"
              >
                {/* Time Indicator - Centered */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                  className="flex justify-center mb-12"
                >
                </motion.div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-[1920px] mx-auto">
                  {/* Left Column - Title and Value */}
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                    className="text-center"
                  >
                    <span className="block text-[2.5rem] sm:text-6xl md:text-7xl text-white mb-6">
                      {benefit.title}
                    </span>
                    <span className="block text-xl sm:text-2xl md:text-3xl text-white/80 italic mb-4">
                      {benefit.subtitle}
                    </span>
                    <div className="inline-block px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mt-4">
                      <p className="text-white font-medium text-lg">{benefit.value}</p>
                    </div>
                  </motion.div>

                  {/* Right Column - Description */}
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                    className="flex items-center"
                  >
                    <p className="text-white/70 leading-relaxed text-lg max-w-[800px]">
                      {benefit.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}

          {/* Progress Bar - Moved up slightly */}
          <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10">
            <motion.div 
              className="h-[2px] w-[200px] bg-white/20 overflow-hidden rounded-full"
            >
              <motion.div 
                style={{ 
                  scaleX: useTransform(
                    scrollYProgress,
                    [0, 0.95],  // Stop before the end
                    [0, 1]
                  )
                }}
                className="origin-left h-full bg-white"
              />
            </motion.div>
            <div className="flex gap-2">
              {benefits.map((_, index) => (
                <motion.div
                  key={index}
                  className="w-2 h-2 rounded-full bg-white/20"
                  style={{
                    backgroundColor: useTransform(
                      scrollYProgress,
                      [(index * 0.25), ((index + 1) * 0.25)],
                      ["rgba(255,255,255,0.2)", "rgba(255,255,255,1)"]
                    )
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Seamless transition overlay */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-screen bg-white"
          style={{
            opacity: useTransform(
              scrollYProgress,
              [0.7, 0.85],  // Adjusted timing to start and complete fade earlier
              [0, 1]
            )
          }}
        />
      </div>
    </section>
  );
}