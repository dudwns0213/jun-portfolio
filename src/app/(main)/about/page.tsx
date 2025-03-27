'use client';

import { motion } from 'framer-motion';
import AboutDetail from '@/components/sections/AboutDetail';
import ExperienceTimeline from '@/components/sections/ExperienceTimeline';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          About Me
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          저는 문제 해결을 즐기는 프론트엔드 개발자입니다.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <AboutDetail />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16"
      >
        <ExperienceTimeline />
      </motion.div>
    </div>
  );
}
