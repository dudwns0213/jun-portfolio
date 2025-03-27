'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '@/lib/types/project';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative h-64 md:h-96 rounded-xl overflow-hidden"
      >
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {project.title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {(project.githubUrl || project.demoUrl) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex space-x-4"
        >
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
            >
              <FaGithub className="mr-2" />
              View on GitHub
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              <FaExternalLinkAlt className="mr-2" />
              Live Demo
            </a>
          )}
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          프로젝트 상세
        </h2>

        <div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
            주요 기능
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
            배운 점
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            이 프로젝트를 통해 새로운 기술 스택을 학습하고 실제 적용해보는
            경험을 했습니다. 특히 사용자 경험 개선을 위한 다양한 기법들을
            적용해볼 수 있었습니다.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
