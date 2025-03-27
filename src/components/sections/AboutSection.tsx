'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center gap-16"
        >
          <div className="relative group flex-shrink-0 w-64 h-64 lg:w-80 lg:h-80">
            <div className="relative h-full rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <Image
                src="/image/profile.jpg"
                alt="Profile"
                width={320}
                height={320}
              />
            </div>
          </div>

          <div className="flex-grow">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white"
            >
              About <span className="text-blue-500 dark:text-blue-400">Me</span>
            </motion.h2>

            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                안녕하세요! 저는{' '}
                <span className="text-blue-500 dark:text-blue-400">
                  소통을 중요시하는{' '}
                </span>
                개발자입니다. 기술적인 성장을 중요하게 생각하고, 팀 프로젝트에서
                코드 리뷰를 주로 이끌어갔습니다.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <span className="text-blue-500 dark:text-blue-400">
                  코드의 확장성, 유지보수성
                </span>
                을 고려하여 개발을 진행합니다. 중복되는 로직의 경우 hook으로
                분리하고, 직관적인 네이밍과 일관적인 코드 구조를 지향합니다.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-blue-500 dark:text-blue-400">
                  프로젝트의 최적화, 코드 리팩토링
                </span>
                을 통해 질적 향상에 기여합니다. 사용자 경험을 증대시키며,
                가독성을 중점으로 둔 개발을 생각합니다.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {[
                'React',
                'Next.js',
                'TypeScript',
                'Tailwind CSS',
                'Framer Motion',
                'Git',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-blue-50 dark:bg-gray-800 text-blue-600 dark:text-blue-400 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
