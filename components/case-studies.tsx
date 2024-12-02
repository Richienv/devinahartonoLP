"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SilverGradientDivider } from "./ui/silver-gradient-divider";
import Marquee from "./ui/marquee";

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
    name: "Michael Wijaya",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    income: "Rp 150.000.000+",
    yearsJoined: 2,
    position: "Senior Insurance Advisor",
    story: "Dulu aku cuma karyawan biasa dengan gaji UMR. Sekarang? Income aku naik 10x lipat dalam 2 tahun aja! Semua berkat sistem dan support yang keren dari tim.",
    englishStory: "From a minimum wage employee to a successful advisor. The amazing system and team support made it possible.",
    date: "Jul 24, 2024",
    category: "Success Story"
  },
  {
    name: "Jessica Tanadi",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    income: "Rp 200.000.000+",
    yearsJoined: 3,
    position: "Regional Manager",
    story: "Sistem mentoring yang ada tuh bener-bener ngebantu banget! Dari yang gak tau apa-apa, sekarang bisa bantu banyak orang sambil dapet income gede.",
    englishStory: "The mentoring system truly helped me grow from zero knowledge to helping others while earning big.",
    date: "Jul 25, 2024",
    category: "Success Story"
  },
  {
    name: "David Susanto",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    income: "Rp 180.000.000+",
    yearsJoined: 2.5,
    position: "Elite Insurance Consultant",
    story: "Yang bikin betah? Tim yang supportive dan sharing knowledge tanpa ditutup-tutupi. Di sini kita sukses bareng-bareng!",
    englishStory: "What keeps me here? The supportive team and open knowledge sharing. Here, we succeed together!",
    date: "Jul 26, 2024",
    category: "Success Story"
  }
];

export default function CaseStudies() {
  return (
    <section className="py-24 md:py-32 relative bg-neutral-100">
      <div className="px-4 md:px-0">
        <div className="max-w-screen-2xl mx-auto">
          <div className="max-w-[1400px] mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-20"
            >
              <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase">
                Success Stories
              </span>
              
              <h2 className="mt-6 font-instrument-serif">
                <span className="block text-[2rem] sm:text-6xl leading-[1.1] text-neutral-900">
                  SHARED BY
                </span>
                <span className="block text-[1.8rem] sm:text-5xl italic font-light mt-2">
                  perspective
                </span>
                <span className="block text-[2.2rem] sm:text-6xl uppercase mt-1">
                  OUR CLIENTS
                </span>
              </h2>
            </motion.div>
          </div>

          <div className="relative mt-20">
            <div className="absolute left-0 top-0 bottom-0 w-40 md:w-60 bg-gradient-to-r from-neutral-100 via-neutral-100/80 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-40 md:w-60 bg-gradient-to-l from-neutral-100 via-neutral-100/80 to-transparent z-10" />

            <Marquee className="py-4" pauseOnHover>
              {cases.map((item: Case, index: number) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-[400px] flex-shrink-0 px-3 md:px-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className="aspect-[4/5] relative overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      
                      <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                        <p className="text-xs tracking-[0.2em] text-neutral-600 uppercase">
                          {item.category}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-2xl sm:text-3xl font-instrument-serif group-hover:text-neutral-700 transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-xs tracking-[0.2em] text-neutral-500 uppercase">
                          {item.date}
                        </p>
                      </div>

                      <p className="text-xs tracking-[0.2em] text-neutral-500 uppercase">
                        {item.position}
                      </p>

                      <p className="text-neutral-600 leading-relaxed line-clamp-3">
                        {item.story}
                      </p>
                      
                      <p className="text-sm text-neutral-500 italic line-clamp-2">
                        {item.englishStory}
                      </p>

                      <div className="pt-4 flex justify-between items-center border-t border-neutral-200">
                        <p className="text-sm text-neutral-500">
                          Monthly Income: <span className="font-semibold text-neutral-900">{item.income}</span>
                        </p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          className="text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
                        >
                          Read More →
                        </motion.button>
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
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <SilverGradientDivider />
      </div>
    </section>
  );
}