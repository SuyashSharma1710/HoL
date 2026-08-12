"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function LifeforceSequenceSection() {
  return (
    <section id="lifeforce-sequence" className="w-full bg-background text-primary pt-12 sm:pt-16 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-5xl font-semibold leading-[1.1] text-primary ">
            Lifeforce and <span className="italic text-accent">cellular charge</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          
          {/* Card 1: Dr Rastogi Quote (Wide Card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 lg:col-span-2 border border-primary/10 p-8 sm:p-12 rounded-[16px] shadow-2xl shadow-primary/10 flex flex-col justify-center relative overflow-hidden group min-h-[400px] bg-background"
          >
            {/* Abstract Rotating Logo Background */}
            <div className="absolute -right-[35%] -bottom-56 w-[600px] h-[600px] opacity-80 pointer-events-none z-0">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
                className="w-full h-full relative"
              >
                <Image src="/logo.svg" alt="Abstract Background" fill className="object-contain" />
              </motion.div>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.6 }
                }
              }}
              className="relative z-20 font-heading text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.3] max-w-3xl"
            >
              <motion.p 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
                className="mb-4 text-primary"
              >
                Increase in lifeforce leads to{" "}
                <motion.span 
                  animate={{ opacity: [1, 0.5, 1], scale: [1, 1.05, 1] }} 
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} 
                  className="italic text-accent inline-block"
                >
                  wellness
                </motion.span>
              </motion.p>
              <motion.p 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
                className="mb-4 text-primary"
              >
                Decrease in lifeforce leads to{" "}
                <motion.span 
                  animate={{ opacity: [1, 0.5, 1], scale: [1, 1.05, 1] }} 
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }} 
                  className="italic inline-block"
                >
                  illness
                </motion.span>
              </motion.p>
              <motion.p 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
                className="text-primary"
              >
                Absence of lifeforce is{" "}
                <motion.span 
                  animate={{ opacity: [1, 0.5, 1], scale: [1, 1.05, 1] }} 
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 2 }} 
                  className="italic inline-block"
                >
                  Death
                </motion.span>
              </motion.p>
              <motion.p 
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} 
                className="mt-8 text-xl font-sans tracking-widest uppercase text-primary/50"
              >
                — Dr Rastogi
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Card 2: The Connection (Square Card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-1 lg:col-span-1 border border-primary/10 p-8 sm:p-12 rounded-[16px] shadow-2xl shadow-primary/10 flex flex-col relative overflow-hidden group min-h-[400px]"
          >
            <div className="absolute inset-0 z-0">
              <Image src="/images/heartbeat-breath.png" alt="Cellular Particles" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-90" />
            
            <div className="relative z-20 flex flex-col h-full justify-end">
              <p className="text-2xl sm:text-3xl font-heading font-medium leading-relaxed text-white drop-shadow-sm mb-4">
                Every single heartbeat and breath you take literally begins at the cellular level.
              </p>
              <p className="text-lg text-white/80 font-medium">
                Your body is made up of trillions of cells.
              </p>
            </div>
          </motion.div>

          {/* Card 3: The Conclusion (Full Width Bottom Card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-2 lg:col-span-3 border border-primary/10 p-8 sm:p-12 rounded-[16px] shadow-2xl shadow-primary/10 flex flex-col relative overflow-hidden group min-h-[400px]"
          >
            <div className="absolute inset-0 z-0">
              <Image src="/images/young-man-raising-hands-sunset-sky-after-training.jpg" alt="Lifeforce Burst" fill className="object-cover saturate-[1.5] transition-transform duration-1000 group-hover:scale-105" sizes="100vw" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-90" />
            
            <div className="relative z-20 max-w-4xl mx-auto flex flex-col h-full justify-end text-center pb-4">
              <h3 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.2] text-white drop-shadow-lg">
                The healthier your cells, the greater your cellular charge, the greater your lifeforce.
              </h3>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
