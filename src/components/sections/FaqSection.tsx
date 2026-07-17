"use client";

import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

interface FaqItemProps {
  question: string;
  answer: string;
  index: number;
}

const AnimatedFaqItem: React.FC<FaqItemProps> = ({ question, answer, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3, once: false });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
      className="mb-4 cursor-pointer bg-white/50 backdrop-blur-md border border-foreground/10 rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/80 hover:border-primary/30 hover:shadow-sm"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-6 md:p-8 flex justify-between items-center">
        <h3 className="text-foreground font-heading text-xl md:text-2xl m-0 font-semibold pr-8 leading-tight">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-primary text-3xl font-light flex-shrink-0"
        >
          +
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 text-foreground/80 font-sans text-base md:text-lg leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: "What is the core philosophy behind Celestial Wellness?",
      answer: "We believe that true healing begins at the cellular level. By removing toxic blockages and providing the right nutrients, we help you restore your natural LifeForce, leading to increased energy, longevity, and overall vitality."
    },
    {
      question: "What makes the Healthy Mix different from a regular breakfast?",
      answer: "The typical Indian breakfast can be high in calories but low in essential nutrients. Our Healthy Mix is designed to bridge this 'Breakfast Gap' by delivering a complete profile of protein, omega-3s, and essential minerals like magnesium to fuel your cells, not just your cravings."
    },
    {
      question: "How quickly can I expect to feel a difference in my energy?",
      answer: "While every individual's cellular chemistry is unique, many of our clients experience reduced brain fog, less bloating, and a noticeable uplift in daily energy within the first few weeks of adopting our deep detox and nutrition protocols."
    },
    {
      question: "Are your wellness programs suitable for beginners?",
      answer: "Absolutely. Whether you are taking your first steps toward a healthier lifestyle or looking to optimize an already strict regimen, our customized kits are tailored to meet your unique biological needs and guide you through the foundational pillars of health."
    },
    {
      question: "Is this program primarily for weight loss?",
      answer: "Not exactly. While healthy weight management is a common side-effect of cellular optimization, our primary focus is on deep cellular detox. Detox isn't just about weight—it's about removing toxins so your mitochondria can produce optimal LifeForce."
    },
    {
      question: "What are the 12 Pillars of Optimal Health?",
      answer: "Our approach integrates 12 holistic pillars—including Gut Reset, Deep Sleep, Artery Cleanse, and Balanced Nutrition. We address your entire biological system because true longevity requires harmony across all bodily functions, not just isolated fixes."
    },
    {
      question: "Who developed the Celestial Wellness protocols?",
      answer: "Our foundational protocols were developed by Dr. Ashutosh Rastogi, guided by the central philosophy that the 'Presence of Lifeforce is Life, and its absence is Death.' Every regimen is rooted in clinical science and holistic wellness."
    },
    {
      question: "Can I customize the wellness kits?",
      answer: "Yes, because your biology is unique. We offer a range of products like the Breakfast Mix, Premium Mix, and the Living Young tier. You can customize your kit directly, or speak with our advisors to match the perfect protocol to your specific needs."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle Background Grid matching Design.md */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(107, 125, 106, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(107, 125, 106, 0.15) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}
      />
      
      <div className="max-w-4xl mx-auto px-5 relative z-10">
        <div className="mb-16 text-center">
          <span className="text-secondary font-sans font-semibold text-sm tracking-[0.2em] uppercase mb-4 block">
            Client Advisory
          </span>
          <h2 className="text-foreground font-heading text-4xl md:text-6xl font-bold tracking-[-0.02em] leading-tight">
            Frequently Asked<br/><em className="text-secondary font-semibold italic">Questions</em>
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, idx) => (
            <AnimatedFaqItem 
              key={idx} 
              index={idx} 
              question={faq.question} 
              answer={faq.answer} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
