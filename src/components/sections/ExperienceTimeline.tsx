'use client';

import { motion } from 'motion/react';

const experiences = [
  {
    id: 1,
    title: '코드잇 프론트엔드 단기심화',
    company: '코드잇',
    period: '2024.11 ~ 2025.1',
    description:
      '일정을 생성하고, 인증하고, 상대와 공유할 수 있는 일정 관리 서비스 개발',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Tanstack Query'],
  },
  {
    id: 2,
    title: '프론트엔드 개발자(인턴)',
    company: '코드잇',
    period: '2024.10 ~ 2024.11',
    description: 'React와 Next.js를 회사 리소스 예약, 대여, 반납 플랫폼 개발',
    skills: ['React', 'Next.js', 'TypeScript', 'Zustand', 'React Hook Form'],
  },
  {
    id: 3,
    title: '코드잇 프론트엔드 스프린트',
    company: '코드잇',
    period: '2024.03 - 2024.09',
    description: 'JavaScript, TypeScript, React 등의 교육',
    skills: ['JavaScript', 'TypeScript', 'Git', 'Figma', 'HTML', 'CSS'],
  },
  {
    id: 4,
    title: '컴퓨터 소프트웨어 전문학사',
    company: '부천대학교',
    period: '2019.2 - 2024.02',
    description: '소프트웨어 전공',
    skills: ['컴퓨터 구조', '데이터 구조', '데이터베이스'],
  },
];

const ExperienceTimeline = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-gray-900 dark:text-white text-center"
      >
        경력 및 교육
        <span className="block w-16 h-1 bg-blue-500 mt-3 mx-auto rounded-full"></span>
      </motion.h2>

      <div className="relative">
        {/* 타임라인 중앙 선 */}

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.15 }}
            className={`mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-start`}
          >
            {/* 타임라인 점 */}
            <div className="flex-shrink-0 relative z-10">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
            </div>

            {/* 경험 카드 */}
            <div
              className={`flex-grow ${index % 2 === 0 ? 'ml-8' : 'mr-8'} p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {exp.title}
                </h3>
                <span className="text-sm text-blue-500 dark:text-blue-400 font-medium bg-blue-50 dark:bg-gray-700 px-3 py-1 rounded-full mt-1 md:mt-0">
                  {exp.period}
                </span>
              </div>

              <div className="flex items-center mt-2">
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  {exp.company}
                </span>
              </div>

              <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                {exp.description}
              </p>

              {/* 기술 스킬 태그 */}
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
