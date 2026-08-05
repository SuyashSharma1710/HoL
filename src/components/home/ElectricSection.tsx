"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const bentoItems = [
  {
    id: "charge",
    caption: "Lifeforce",
    title: "3.5 Trillion Volts",
    description: "Your entire being is powered by an immense bioelectric network. 50 trillion cells each holding a precise charge create the measurable voltage of your lifeforce.",
    image: "/images/mitochondria_charge.png",
    className: "md:col-span-2 overflow-hidden relative rounded-3xl bg-primary text-background group min-h-[400px] border border-white/10 shadow-2xl", 
    imageContainer: "absolute inset-0 w-full h-full",
    imageClass: "object-cover object-right w-full h-full group-hover:scale-105 transition-transform duration-1000",
    contentClass: "relative z-10 w-[60%] p-8 sm:p-12 flex flex-col justify-center h-full",
    overlay: "absolute inset-0 bg-linear-to-r from-primary via-primary/90 to-transparent z-0"
  },
  {
    id: "discharge",
    caption: "The Drain",
    title: "Cellular Discharge",
    description: "When toxins and stress overwhelm the system, cells lose their electrical charge. Below 50mV, a cell cannot heal—triggering rapid aging, inflammation, and chronic fatigue.",
    image: "/images/cellular-voltage.png",
    className: "md:col-span-1 md:row-span-2 overflow-hidden relative rounded-3xl bg-[#0a1511] text-background group min-h-[450px] md:min-h-full border border-white/5 shadow-2xl",
    imageContainer: "absolute inset-0 w-full h-full",
    imageClass: "object-cover object-top w-full h-full group-hover:scale-105 transition-transform duration-1000",
    contentClass: "relative z-10 h-full w-full p-8 sm:p-10 flex flex-col justify-end pt-32",
    overlay: "absolute inset-0 bg-linear-to-t from-[#0a1511] via-[#0a1511]/90 to-transparent z-0"
  },
  {
    id: "voltage",
    caption: "Voltage",
    title: "The Spark of Life",
    description: "A healthy cell operates at 70 millivolts—a factory of pure energy, repair, and regeneration.",
    image: "/images/mitochondria_voltage.png",
    className: "md:col-span-1 overflow-hidden relative rounded-3xl bg-primary text-background group min-h-[350px] border border-white/10 shadow-2xl",
    imageContainer: "absolute inset-0 w-full h-full",
    imageClass: "object-cover object-center w-full h-full opacity-80 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000",
    contentClass: "relative z-10 p-8 sm:p-10 flex flex-col justify-end h-full",
    overlay: "absolute inset-0 bg-linear-to-t from-primary via-primary/80 to-transparent z-0"
  },
  {
    id: "healing",
    caption: "Healing",
    title: "Unblock Energy",
    description: "Disease is simply a signal of blocked energy. Restoring your cellular environment unblocks your Lifeforce.",
    image: "/images/mitochondria_healing.png",
    className: "md:col-span-1 overflow-hidden relative rounded-3xl bg-accent text-primary group min-h-[350px] shadow-2xl",
    imageContainer: "absolute inset-0 w-full h-full",
    imageClass: "object-cover object-center w-full h-full opacity-40 mix-blend-multiply group-hover:scale-105 transition-transform duration-1000",
    contentClass: "relative z-10 p-8 sm:p-10 flex flex-col justify-end h-full",
    overlay: "absolute inset-0 bg-linear-to-t from-accent via-accent/70 to-transparent z-0"
  }
];

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

export function ElectricSection() {
  return (
    <section id="lifeforce" className="relative w-full bg-linear-to-b from-primary to-[#0d1c17] py-24 sm:py-32 overflow-hidden text-background">
      {/* Background glow effects */}
      <div className="absolute top-[-20%] right-[-10%] w-150 h-150 bg-secondary/10 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-125 h-125 bg-accent/5 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Static Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-150 max-h-150 opacity-[0.08]">
          <Image src="/logo.svg" alt="Harmony of Life" fill className="object-contain" />
        </div>
        <div className="absolute top-[40%] right-[-15%] w-[80vw] h-[80vw] max-w-200 max-h-200 opacity-[0.08]">
          <Image src="/logo.svg" alt="Harmony of Life" fill className="object-contain" />
        </div>
      </div>

      <div className="relative z-10 max-w-360 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Top Header Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto flex flex-col items-center mb-16 sm:mb-24"
        >
          <motion.p variants={itemVariants} className="font-semibold text-accent tracking-widest uppercase text-sm mb-4">
            Cellular Charge
          </motion.p>
          <motion.h2 variants={itemVariants} className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.15] mb-6">
            You are electric
          </motion.h2>
          <motion.p variants={itemVariants} className="text-background/80 font-medium text-lg leading-relaxed mb-8">
            Your lifeforce is not a mystery. It is a measurable voltage that powers 50 trillion cells, each demanding a precise 70 millivolts to operate perfectly.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {bentoItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants} className={item.className}>
              <div className={item.imageContainer}>
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  className={item.imageClass}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {item.overlay && <div className={item.overlay} />}
              <div className={item.contentClass}>
                <p className="font-semibold tracking-widest uppercase text-xs mb-3 opacity-90">{item.caption}</p>
                <h3 className="font-heading text-2xl sm:text-3xl font-semibold mb-4 leading-tight">{item.title}</h3>
                <p className="opacity-80 leading-relaxed text-sm sm:text-base font-medium">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
