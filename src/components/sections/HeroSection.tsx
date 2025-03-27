'use client';

import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { SiVelog } from 'react-icons/si';
import GradientWaveBackground from '@/components/animation/GradientWaveBackground';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GradientWaveBackground>
        <div className="mx-auto pt-[50vh] px-4 text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.p
              className="text-lg text-blue-600 dark:text-blue-400 mb-4"
              variants={itemVariants}
            >
              안녕하세요,
            </motion.p>

            <motion.h1
              className="text-5xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              프론트엔드 개발자 배영준입니다.
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
              variants={itemVariants}
            >
              사용자 경험을 중시하는 개발자입니다. <br />
              최신 기술을 학습하고 적용하는것을 즐깁니다.
            </motion.p>

            <motion.div
              className="flex justify-center space-x-4 mt-8"
              variants={fadeInVariants}
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link
                  href="https://github.com/dudwns0213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-transform"
                >
                  <FaGithub size={24} />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link
                  href="https://velog.io/@jun_o_o/posts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-transform"
                >
                  <SiVelog size={24} />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </GradientWaveBackground>
    </section>
  );
};

export default HeroSection;
