"use client";

import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const }
  },
};

const inhibitors = [
  {
    category: "Toxins",
    title: "Environmental poisons short-circuit your cellular wiring daily",
    description: "Heavy metals and chemicals in your air and water block electron flow",
    image: "/images/inhibitor-toxins.png",
    linkText: "Detox",
    linkHref: "#detox"
  },
  {
    category: "Stress",
    title: "Chronic stress is a constant and corrosive energy leak",
    description: "Cortisol floods your system and drains your life-giving voltage reserves",
    image: "/images/inhibitor-stress.png",
    linkText: "Calm",
    linkHref: "#calm"
  },
  {
    category: "Sleep",
    title: "Poor sleep fails to recharge your biological battery",
    description: "Without deep rest your cells cannot repair or reach full potential",
    image: "/images/inhibitor-sleep.png",
    linkText: "Restore",
    linkHref: "#restore"
  },
  {
    category: "Nutrition",
    title: "Dead food cannot fuel a high-voltage body",
    description: "Processed ingredients and empty calories offer zero electrons for life",
    image: "/images/inhibitor-nutrition.png",
    linkText: "Nourish",
    linkHref: "#nourish"
  },
  {
    category: "Movement",
    title: "Sitting halts cellular energy production",
    description: "A sedentary lifestyle causes energy pathways to stagnate and lose their glow",
    image: "/images/inhibitor-sedentary.png",
    linkText: "Activate",
    linkHref: "#activate"
  },
  {
    category: "Deficiency",
    title: "Lacking the raw materials for ATP",
    description: "Nutrient deficiencies leave your cells hollow and unable to hold a charge",
    image: "/images/inhibitor-deficiency.png",
    linkText: "Replenish",
    linkHref: "#replenish"
  }
];

export function InhibitorsSection() {
  return (
    <section className="relative w-full bg-background pt-24 sm:pt-32 pb-24 sm:pb-16 overflow-hidden text-primary">
      <div className="relative z-10 max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto flex flex-col items-center mb-12 sm:mb-20"
        >
          <motion.p variants={itemVariants} className="font-semibold text-primary tracking-widest uppercase text-sm mb-4">
            Inhibitors
          </motion.p>
          <motion.h2 variants={itemVariants} className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.15] mb-6">
            What drains your lifeforce
          </motion.h2>
          <motion.p variants={itemVariants} className="text-primary/70 font-medium text-lg leading-relaxed">
            The modern world is designed to steal your voltage silently
          </motion.p>
        </motion.div>

        {/* Swiper Slider */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] as const }}
          className="relative w-full group"
        >
          {/* Custom Navigation Buttons */}
          <button className="inhibitor-prev absolute left-2 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(20,43,35,0.15)] text-primary hover:scale-105 transition-all focus:outline-none disabled:opacity-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
            <ChevronLeft className="w-6 h-6 stroke-3" />
          </button>
          <button className="inhibitor-next absolute right-2 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(20,43,35,0.15)] text-primary hover:scale-105 transition-all focus:outline-none disabled:opacity-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
            <ChevronRight className="w-6 h-6 stroke-3" />
          </button>

          <style dangerouslySetInnerHTML={{__html: `
            .swiper-pagination-bullet {
              background-color: #142b23;
              opacity: 0.2;
            }
            .swiper-pagination-bullet-active {
              background-color: #b69c5f;
              opacity: 1;
            }
          `}} />
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={1.2}
            centeredSlides={true}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: '.inhibitor-prev',
              nextEl: '.inhibitor-next',
            }}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
              1440: { slidesPerView: 4 },
            }}
            className="w-full px-4 pt-8! pb-12!"
          >
            {inhibitors.map((item) => (
              <SwiperSlide key={item.category} className="h-auto">
                <div className="group flex flex-col h-full bg-white/50 backdrop-blur-md rounded-2xl border border-secondary/20 overflow-hidden hover:border-secondary/50 transition-all duration-500 hover:-translate-y-2 shadow-xl shadow-primary/5 hover:shadow-primary/10">
                  {/* Image Container */}
                  <div className="relative w-full aspect-4/3 overflow-hidden bg-primary/5">
                    <Image 
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="p-8 flex flex-col grow">
                    <p className="font-semibold text-primary tracking-widest uppercase text-sm mb-4">
                      {item.category}
                    </p>
                    <h3 className="font-heading text-2xl font-semibold mb-4 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-primary/70 font-medium text-sm leading-relaxed mb-8 grow">
                      {item.description}
                    </p>
                    
                    <Link 
                      href={item.linkHref}
                      className="inline-flex items-center gap-2 text-primary font-semibold group/link hover:text-secondary transition-colors text-sm mt-auto"
                    >
                      {item.linkText}
                      <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
    </section>
  );
}
