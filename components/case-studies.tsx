"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SilverGradientDivider } from "./ui/silver-gradient-divider";
import Marquee from "./ui/marquee";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Case {
  name: string;
  image: string;
  income: string;
  yearsJoined: number;
  position: string;
  story: string;
  englishStory: string;
  date: string;
  category: string;
}

const cases: Case[] = [
  {
    name: "Mariska Karsana",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    income: "Monthly Income: 300jt+",
    yearsJoined: 5,
    position: "Senior Insurance Advisor",
    story: "Semenjak join fintrust menemukan IKIGAI — purpose dan goal dalam menjalankan bisnis",
    englishStory: "Since joining fintrust, I found IKIGAI — purpose and goal in running the business.",
    date: "Joined fintrust 2019",
    category: "Success Story",
  },
  {
    name: "Gwen Sembada",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    income: "MDiT 4 Stars • Joined fintrust 2019",
    yearsJoined: 5,
    position: "Senior Insurance Advisor",
    story: "fintrust has been a life-changing experience, offering not only financial growth but also incredible opportunities for personal development.",
    englishStory: "fintrust has been a life-changing experience, offering not only financial growth but also incredible opportunities for personal development.",
    date: "Joined fintrust 2019",
    category: "Success Story",
  },
  {
    name: "Jessica Suwarsono",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
    income: "Monthly Income: 100jt+ • Joined fintrust 2020",
    yearsJoined: 4,
    position: "Senior Insurance Advisor",
    story: "Sejak join fintrust aku merasakan perubahan hidup yg signifikan since now I can have flexible working hours.",
    englishStory: "Since joining fintrust, I felt a significant life change since now I can have flexible working hours.",
    date: "Joined fintrust 2020",
    category: "Success Story",
  },
  {
    name: "Martha Teja",
    image: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?q=80&w=600&auto=format&fit=crop",
    income: "3 Digit Monthly Income • Joined fintrust 2019",
    yearsJoined: 5,
    position: "Senior Insurance Advisor",
    story: "Satu satunya komunitas yang kasi full support dari segi edukasi maupun entertainnya. Gw photographer yang rela tutup bisnis dan sekarang fokus di fintrust. Krn disini gw bisa bertumbuh baik secara personal maupun income yang jauh lebih sustain. Jd kerja nga cuma untuk diri sendiri tapi bisa jadi berkat untuk orang lain juga.",
    englishStory: "The only community that provides full support for education and entertainment. A photographer who willingly closed their business to focus on fintrust. Working not just for ourselves but to be a blessing for others.",
    date: "Joined fintrust 2019",
    category: "Success Story",
  },
  {
    name: "Shannon Subeno",
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e5d2?q=80&w=600&auto=format&fit=crop",
    income: "Monthly Income: 120jt+",
    yearsJoined: 4,
    position: "Senior Insurance Advisor",
    story: "Maria is a straightforward and nurturing leader. When it comes to other aspects of growing the business.",
    englishStory: "Maria is a straightforward and nurturing leader. When it comes to other aspects of growing the business.",
    date: "Joined fintrust 2020",
    category: "Success Story",
  },
  {
    name: "Anastasia Inez",
    image: "https://images.unsplash.com/photo-1558898479-33c0057a5d12?q=80&w=600&auto=format&fit=crop",
    income: "Monthly Income: 110jt+",
    yearsJoined: 5,
    position: "Senior Insurance Advisor",
    story: "Environment yg positive, creative & smart! Income acceleration nya luar biasa dengan plenty of room for growth.",
    englishStory: "Environment yg positive, creative & smart! Income acceleration nya luar biasa dengan plenty of room for growth.",
    date: "Joined fintrust 2019",
    category: "Success Story",
  },
  // Add more cases as needed
];

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideVariants = {
    center: { scale: 1, x: 0, zIndex: 5, opacity: 1, rotateY: 0 },
    left: { scale: 0.8, x: -300, zIndex: 3, opacity: 0.7, rotateY: 15 },
    right: { scale: 0.8, x: 300, zIndex: 3, opacity: 0.7, rotateY: -15 },
    farLeft: { scale: 0.6, x: -450, zIndex: 1, opacity: 0.4, rotateY: 30 },
    farRight: { scale: 0.6, x: 450, zIndex: 1, opacity: 0.4, rotateY: -30 },
  };

  const getVariant = (index: number) => {
    const diff = (index - currentIndex + cases.length) % cases.length;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === cases.length - 1) return "left";
    if (diff === 2) return "farRight";
    return "farLeft";
  };

  const navigate = (direction: number) => {
    setCurrentIndex((prev) => (prev + direction + cases.length) % cases.length);
  };

  return (
    <section className="py-24 md:py-32 relative bg-neutral-100">
      <div className="max-w-[1400px] mx-auto px-4 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase">
            Don't Trust Our Words.
          </span>
          
          <h2 className="mt-6 font-instrument-serif">
            <span className="block text-[2rem] sm:text-6xl leading-[1.1] text-neutral-900">
            But see the Transformation.
            </span>
            <span className="block text-[1.8rem] sm:text-5xl italic font-light mt-2">
              Langsung dari mereka yang ada di dalamnya.
            </span>
          </h2>
        </motion.div>
      </div>

      <div className="w-full overflow-hidden">
        <Marquee 
          className="py-4" 
          pauseOnHover 
          speed={10}
        >
          {cases.map((item: Case, index: number) => (
            <motion.article
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-[300px] md:w-[450px] flex-shrink-0 px-2 md:px-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                    <p className="text-[10px] md:text-xs tracking-[0.2em] text-neutral-600 uppercase">
                      {item.category}
                    </p>
                  </div>
                </div>

                <div className="p-3 md:p-6 h-[180px] md:h-[220px] flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-[11px] md:text-lg font-medium text-neutral-900">
                        {item.name}
                      </h3>
                      <p className="text-[9px] md:text-xs text-neutral-500">
                        {item.date}
                      </p>
                    </div>

                    <p className="text-[9px] md:text-xs text-neutral-500">
                      {item.position}
                    </p>

                    <p className="text-[9px] md:text-sm text-neutral-600 leading-relaxed line-clamp-2">
                      {item.story}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-200">
                    <p className="text-[9px] md:text-xs text-neutral-500">
                      Monthly Income: 
                      <span className="font-medium text-neutral-900 ml-1">{item.income}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </Marquee>
      </div>

      <div className="max-w-[1400px] mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-24"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-instrument-serif leading-snug text-neutral-800 mb-6">
              Ready to write your success story?
            </h3>
            <p className="text-neutral-600 leading-relaxed italic">
              "Join our community of achievers and transform your life today."
            </p>
          </div>
        </motion.div>
      </div>

      <div className="relative w-full bg-white py-32">
        <div className="text-center mb-16 max-w-4xl mx-auto px-4">
          <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase">
            Featured Video
          </span>
          <h2 className="mt-6 font-instrument-serif">
            <span className="block text-[2.5rem] sm:text-7xl uppercase mt-1">
              The top success.
            </span>
            <span className="block text-[2rem] sm:text-6xl italic font-light mt-2 text-neutral-800">
              Testimonials.
            </span>
          </h2>
        </div>

        <div className="relative -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-16 xl:-mx-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <div className="relative max-w-[2000px] mx-auto">
            <div className="relative aspect-video bg-white">
              <iframe
                src="https://www.youtube.com/embed/O_MQr4lHm0c"
                className="absolute inset-0 w-full h-full z-20"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Transformation Journey"
              />

              <div className="absolute top-0 left-0 w-16 h-16 border-l border-t border-neutral-200 z-30" />
              <div className="absolute top-0 right-0 w-16 h-16 border-r border-t border-neutral-200 z-30" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-l border-b border-neutral-200 z-30" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-neutral-200 z-30" />
            </div>

            <div className="mt-12 flex items-center justify-between max-w-screen-xl mx-auto px-4">
              <div className="flex items-center space-x-6">
                <span className="text-xs tracking-[0.4em] text-neutral-500">WATCH THE</span>
                <div className="w-[1px] h-4 bg-neutral-300" />
                <span className="text-xs tracking-[0.4em] text-neutral-500">TRANSFORMATION</span>
                <div className="w-[1px] h-4 bg-neutral-300" />
                <span className="text-xs tracking-[0.4em] text-neutral-500">JOURNEY</span>
              </div>
              <span className="text-xs tracking-[0.2em] text-neutral-400">2024</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <SilverGradientDivider />
      </div>
    </section>
  );
}