"use client";

import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Vikram Singh",
    role: "Harmony community member",
    text: "I am sixty-two and I move like I am forty. The brain fog lifted. The pain vanished. This is not a supplement plan, it is a second life.",
    image: "/images/testi-1.png"
  },
  {
    name: "Ananya Sharma",
    role: "Living young participant",
    text: "My bloodwork stunned my doctor. For the first time in a decade, my inflammation markers are normal. I finally understand what true energy feels like.",
    image: "/images/testi-2.png"
  },
  {
    name: "Rajesh Patel",
    role: "Foundation kit user",
    text: "I stopped chasing symptoms and started charging my cells. The weight dropped, my skin cleared, and I found a calm I never knew existed.",
    image: "/images/testi-3.png"
  },
  {
    name: "Priya Desai",
    role: "Retreat attendee",
    text: "The holistic approach to cellular voltage completely transformed my approach to health. I sleep better, think clearer, and feel a deep sense of vitality.",
    image: "/images/testi-4.png"
  },
  {
    name: "Amit Verma",
    role: "Harmony community member",
    text: "After struggling with chronic fatigue for years, this protocol restored my life force. The science behind it is profoundly effective.",
    image: "/images/testi-1.png"
  },
  {
    name: "Sunita Rao",
    role: "Living young participant",
    text: "I've tried every diet and detox, but nothing addressed the root electrical cause like Harmony of Life. My body finally feels like it's healing itself.",
    image: "/images/testi-2.png"
  },
  {
    name: "Karan Mehta",
    role: "Foundation kit user",
    text: "Dr. Rastogi's vision is revolutionary. Treating the electrical cause instead of chemical symptoms has eliminated my joint pain entirely.",
    image: "/images/testi-3.png"
  },
  {
    name: "Meera Reddy",
    role: "Harmony community member",
    text: "Reconnecting with my cellular charge through the 12 pillars was the best decision of my life. The community support is incredible.",
    image: "/images/testi-4.png"
  },
  {
    name: "Arjun Kapoor",
    role: "Retreat attendee",
    text: "I came for the physical benefits but stayed for the mental clarity. It's truly a holistic reset that honors both ancient wisdom and modern science.",
    image: "/images/testi-1.png"
  },
  {
    name: "Neha Gupta",
    role: "Foundation kit user",
    text: "The science of optimal health isn't just theory here; it's a daily practice. I've never felt so vibrant, grounded, and connected to my own lifeforce.",
    image: "/images/testi-2.png"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative w-full bg-background py-24 sm:py-32 overflow-hidden text-primary">
      <div className="relative z-10 max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            Real transformations
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-primary/80 font-medium text-lg sm:text-xl"
          >
            Hear from those who reclaimed their voltage and their lives
          </motion.p>
        </div>

        {/* Swiper Slider */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full group"
        >
          {/* Custom Navigation Buttons */}
          <button className="testimonial-prev absolute left-2 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(20,43,35,0.15)] text-primary hover:scale-105 transition-all focus:outline-none disabled:opacity-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
            <ChevronLeft className="w-6 h-6 stroke-3" />
          </button>
          <button className="testimonial-next absolute right-2 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(20,43,35,0.15)] text-primary hover:scale-105 transition-all focus:outline-none disabled:opacity-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
            <ChevronRight className="w-6 h-6 stroke-3" />
          </button>

          <style dangerouslySetInnerHTML={{__html: `
            .swiper-pagination-bullet {
              background-color: #142b23;
              opacity: 0.2;
            }
            .swiper-pagination-bullet-active {
              background-color: #142b23;
              opacity: 1;
            }
          `}} />
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: '.testimonial-prev',
              nextEl: '.testimonial-next',
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full px-4 pt-8! pb-12!"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="flex flex-col h-full bg-white rounded-[16px] border border-primary/20 p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-1 mb-6 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-primary/80 font-medium text-base leading-relaxed mb-8 grow">
                    &quot;{item.text}&quot;
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-secondary/20">
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-sm">{item.name}</h4>
                      <p className="text-primary/60 font-medium text-xs">{item.role}</p>
                    </div>
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
