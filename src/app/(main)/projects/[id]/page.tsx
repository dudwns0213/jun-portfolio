'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { getProjectById } from '@/lib/utils/dataLoader';
import { useEffect, useState } from 'react';
import ProjectDetail from '@/components/sections/ProjectDetail';
import { Project } from '@/lib/types/project';

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProject = async () => {
      try {
        const data = await getProjectById(params.id);
        if (!data) {
          return notFound();
        }
        setProject(data);
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [params.id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p>Loading project details...</p>
      </div>
    );
  }

  if (!project) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ProjectDetail project={project} />
      </motion.div>
    </div>
  );
}
