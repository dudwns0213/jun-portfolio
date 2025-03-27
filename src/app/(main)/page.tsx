'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';

export default function Home() {
  return (
    <div className="space-y-20">
      <HeroSection />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <AboutSection />
      </motion.div>
    </div>
  );
}
