'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ui/ProjectCard';
import { getProjects } from '@/lib/utils/dataLoader';
import { useEffect, useState } from 'react';
import { Project } from '@/lib/types/project';
import Link from 'next/link';

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getProjects();
        setProjects(data.slice(0, 3)); // 홈페이지에서는 3개만 표시
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to load projects',
        );
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-8">
        <p>Loading projects...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            최근 작업한 주요 프로젝트들입니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {projects.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/projects"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View All Projects
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
