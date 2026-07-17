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
      question: "What is Harmony of Life?",
      answer: "Harmony of Life is a personalized wellness program focused on deep cellular detox and restoring natural LifeForce to increase energy, longevity, and overall vitality."
    },
    {
      question: "What does Harmony of Life do?",
      answer: "We help you remove toxic blockages at the cellular level and provide customized nutrition protocols to optimize your biological system, reducing brain fog, bloating, and fatigue."
    },
    {
      question: "Who is Harmony of Life for?",
      answer: "It is for anyone looking to optimize their health, whether you are taking your first steps toward a healthier lifestyle or seeking to improve an already strict regimen to address low energy, mood swings, or signs of cellular toxicity."
    },
    {
      question: "What is the vision of Harmony of Life?",
      answer: "Our vision is to empower individuals to achieve optimal health and longevity by understanding that true healing begins at the cellular level and that the presence of LifeForce is life."
    },
    {
      question: "Why was Harmony of Life created?",
      answer: "It was created to address the root causes of disease and fatigue—blockages in LifeForce. It was developed to bridge gaps in modern diets and guide people toward a harmonious, toxin-free state."
    },
    {
      question: "What is personalized wellness?",
      answer: "Personalized wellness means recognizing that every individual's cellular chemistry and biology are unique. Our protocols and kits are tailored specifically to meet your unique biological needs."
    },
    {
      question: "What is Lifeforce?",
      answer: "LifeForce is the pure cellular energy and vitality within you. As our philosophy states: 'Presence of Lifeforce is Life. Absence of Lifeforce is Death. Blockages in Lifeforce cause Disease.'"
    },
    {
      question: "What is Healthspan?",
      answer: "Healthspan is the period of your life spent in good health, free from chronic diseases and the disabilities of aging. We focus on extending not just your lifespan, but your active, energetic healthspan through cellular vitality."
    },
    {
      question: "What are the 12 Foundational Pillars of Harmony of Life?",
      answer: "Our approach integrates 12 holistic pillars: Gut Reset, Deep Sleep, Immunity, Artery Cleanse, Regular Exercise and Yoga, Nature Connect, Social Connect, Balanced Nutrition, Deep Detox, Alkaline Chemistry, Cellular Vitality, and Direct Charge."
    },
    {
      question: "How is Harmony of Life different from other wellness programs?",
      answer: "Unlike programs that focus merely on weight loss or symptom management, Harmony of Life targets root-cause cellular detox. We address your entire biological system holistically, combining ancient wisdom with clinical science to restore harmony across all bodily functions."
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
