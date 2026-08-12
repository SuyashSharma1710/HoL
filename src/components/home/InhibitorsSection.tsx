"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, X } from "lucide-react";
import { useState, useEffect } from "react";
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
    image: "/images/toxin.png",
    linkText: "Detox",
    linkHref: "#detox",
    detailedContent: "Every day, our bodies are bombarded with synthetic chemicals, heavy metals, and environmental pollutants. These invisible toxins settle deep within our tissues, acting as literal roadblocks to the electrical currents that run our cellular machinery. By actively detoxifying, we remove these blockages and allow our bioelectric pathways to flow freely once again."
  },
  {
    category: "Stress",
    title: "Chronic stress is a constant and corrosive energy leak",
    description: "Cortisol floods your system and drains your life-giving voltage reserves",
    image: "/images/stress.png",
    linkText: "Calm",
    linkHref: "#calm",
    detailedContent: "When the body is trapped in a constant 'fight or flight' state, cortisol is continuously pumped into the bloodstream. This chronic stress response aggressively consumes your cellular energy, acting like a short circuit that drains your biological battery faster than you can recharge it. Mastering your nervous system is the key to sealing this leak."
  },
  {
    category: "Sleep",
    title: "Poor sleep fails to recharge your biological battery",
    description: "Without deep rest your cells cannot repair or reach full potential",
    image: "/images/sleep.png",
    linkText: "Restore",
    linkHref: "#restore",
    detailedContent: "Sleep is the only time your body enters a profound state of biological repair and cellular regeneration. When sleep is fragmented or shallow, the 'battery charging' cycle is interrupted. Your brain cannot clear metabolic waste, and your cells wake up already depleted. Deep, restorative sleep is non-negotiable for high cellular voltage."
  },
  {
    category: "Nutrition",
    title: "Processed food cannot fuel a high-voltage body",
    description: "Processed ingredients and empty calories offer zero electrons for life",
    image: "/images/nutrition.png",
    linkText: "Nourish",
    linkHref: "#nourish",
    detailedContent: "The human body is an electrical machine that requires living, electron-dense fuel to run efficiently. Highly processed, artificial foods are biologically 'dead' they lack the raw energy and structured water necessary to power your mitochondria. True vitality requires a shift back to natural, vibrant, and mineral-rich living foods."
  },
  {
    category: "Movement",
    title: "Sitting halts cellular energy production",
    description: "A sedentary lifestyle causes energy pathways to stagnate and lose their glow",
    image: "/images/movement.png",
    linkText: "Activate",
    linkHref: "#activate",
    detailedContent: "Movement is the catalyst for energy production. When we remain sedentary for long hours, our lymphatic system stagnates, circulation drops, and mitochondria go dormant. Regular, purposeful movement forces the body to adapt, creating new energy pathways and literally increasing the physical capacity of your cellular battery."
  },
  {
    category: "Deficiency",
    title: "Lacking the raw materials for ATP",
    description: "Nutrient deficiencies leave your cells hollow and unable to hold a charge",
    image: "/images/deficiency.png",
    linkText: "Replenish",
    linkHref: "#replenish",
    detailedContent: "Just as a car cannot run without oil, your cells cannot produce ATP (energy) without the correct micronutrients, minerals, and vitamins. In the modern era, depleted soils often mean our food lacks these crucial raw materials. Repleting your body with targeted, high-quality nutrients ensures your cells have the physical building blocks they need to hold a massive charge."
  }
];

export function InhibitorsSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % inhibitors.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + inhibitors.length) % inhibitors.length);
    }
  };

  const selectedInhibitor = selectedIndex !== null ? inhibitors[selectedIndex] : null;

  return (
    <section id="reversal" className="relative w-full bg-background pt-24 sm:pt-32 pb-24 sm:pb-16 overflow-hidden text-primary">
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
          <button aria-label="Previous slide" className="inhibitor-prev absolute left-2 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(20,43,35,0.15)] text-primary hover:scale-105 transition-all focus:outline-none disabled:opacity-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
            <ChevronLeft className="w-6 h-6 stroke-3" />
          </button>
          <button aria-label="Next slide" className="inhibitor-next absolute right-2 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(20,43,35,0.15)] text-primary hover:scale-105 transition-all focus:outline-none disabled:opacity-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
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
              640: { slidesPerView: 2.2, centeredSlides: false },
              1024: { slidesPerView: 3.2, centeredSlides: false },
              1440: { slidesPerView: 4, centeredSlides: false },
            }}
            className="w-full px-4 pt-8! pb-12!"
          >
            {inhibitors.map((item, index) => (
              <SwiperSlide key={item.category} className="h-auto">
                <div 
                  onClick={() => setSelectedIndex(index)}
                  className="group flex flex-col h-full bg-white/50 backdrop-blur-md rounded-2xl border border-secondary/20 overflow-hidden hover:border-secondary/50 transition-all duration-500 hover:-translate-y-2 shadow-xl shadow-primary/5 hover:shadow-primary/10 cursor-pointer"
                >
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
                    
                    <span 
                      className="inline-flex items-center gap-2 text-primary font-semibold group/link group-hover:text-secondary transition-colors text-sm mt-auto"
                    >
                      {item.linkText}
                      <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>

      {/* Inhibitor Details Split Modal */}
      <AnimatePresence>
        {selectedInhibitor && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-full overflow-y-auto overflow-x-hidden bg-background shadow-2xl rounded-3xl flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedIndex(null)}
                className="absolute z-20 top-4 right-4 p-2 bg-white/50 backdrop-blur-md text-primary/70 hover:text-primary transition-colors rounded-full hover:bg-secondary/20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side - Full Image */}
              <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto md:min-h-125 bg-primary/5">
                <Image 
                  src={selectedInhibitor.image} 
                  alt={selectedInhibitor.title}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              </div>

              {/* Right Side - Content & Navigation */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <p className="font-semibold text-accent tracking-widest uppercase text-sm mb-4">
                    {selectedInhibitor.category}
                  </p>
                  
                  <h3 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-6">
                    {selectedInhibitor.title}
                  </h3>
                  
                  <p className="text-primary/70 font-medium text-lg leading-relaxed mb-8">
                    {selectedInhibitor.detailedContent}
                  </p>
                </div>

                {/* Bottom Navigation */}
                <div className="flex items-center justify-between pt-8 border-t border-secondary/20 mt-auto">
                  <button 
                    onClick={handlePrev}
                    className="flex items-center gap-2 px-4 py-2 text-primary font-semibold hover:text-accent transition-colors group"
                  >
                    <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                    Previous
                  </button>
                  
                  <span className="text-primary/40 font-medium text-sm">
                    {selectedIndex !== null ? selectedIndex + 1 : 0} / {inhibitors.length}
                  </span>

                  <button 
                    onClick={handleNext}
                    className="flex items-center gap-2 px-4 py-2 text-primary font-semibold hover:text-accent transition-colors group"
                  >
                    Next
                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
