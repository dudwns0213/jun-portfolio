'use client';

import { motion } from 'motion/react';

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
};

const ProjectCard = ({
  project,
  delay,
}: {
  project: Project;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors"
            >
              View Project
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsPage() {
  // 프로젝트 데이터를 컴포넌트 내부에서 직접 정의
  const projects: Project[] = [
    {
      id: '1',
      title: '포트폴리오 웹사이트',
      description:
        'Next.js와 Tailwind CSS를 사용하여 제작한 개인 포트폴리오 웹사이트',
      tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
      imageUrl: '/image/portfolio.png',
      githubUrl: 'https://github.com/dudwns0213/jun-portfolio',
    },
    {
      id: '2',
      title: '찍찍이',
      description: '일정을 찍어서 인증하고, 사람들과 소통하는 일정 관리 서비스',
      tags: [
        'Typescript',
        'React',
        'Next.js',
        'Tailwind CSS',
        'TanStack Query',
        'Zustand',
      ],
      imageUrl: '/image/zzikzzik.png',
      projectUrl: 'https://www.zzikzzik.shop/signin',
      githubUrl: 'https://github.com/slid-todo/front',
    },
    {
      id: '3',
      title: 'Codeit Resources',
      description:
        '회사의 리소스를 효율적으로 예약, 대여, 반납할 수 있는 통합 플랫폼 서비스',
      tags: [
        'Typescript',
        'React',
        'Next.js',
        'Tailwind CSS',
        'TanStack Query',
        'Zustand',
        'React Hook Form',
      ],
      imageUrl: '/image/resources.png',
      projectUrl: 'https://codeit.click/',
      githubUrl:
        'https://github.com/codeit-internship-group-b/codeit-resources',
    },
    {
      id: '4',
      title: 'Trip.zip',
      description: '체험 상품을 보고 간단하게 예약할 수 있는 서비스',
      tags: [
        'Typescript',
        'React',
        'Next.js',
        'Tailwind CSS',
        'TanStack Query',
      ],
      imageUrl: '/image/trip.png',
      projectUrl: 'https://trip-zip.vercel.app/activities?sort=&size=8',
      githubUrl: 'https://github.com/joraeng-e/trip.zip',
    },
    {
      id: '5',
      title: 'Wiki-Viki',
      description:
        '여러 사람과 함께 커뮤니티를 통해 소통하며, 상대방의 위키를 작성할 수 있는 커뮤니케이션 플랫폼',
      tags: [
        'Typescript',
        'React',
        'Next.js',
        'Tailwind CSS',
        'TanStack Query',
        'Zustand',
      ],
      imageUrl: '/image/wiki_viki_logo.png',
      projectUrl: 'https://wiki-viki.vercel.app/',
      githubUrl: 'https://github.com/wiki-viki/wiki-viki',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          My Projects
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          제가 작업한 프로젝트들을 소개합니다.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} delay={index * 0.1} />
        ))}
      </motion.div>
    </div>
  );
}
