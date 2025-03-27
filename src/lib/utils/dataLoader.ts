import { Project } from '@/lib/types/project';
import { BlogPost } from '@/lib/types/blog';
import { Skill } from '@/lib/types/skill';

// 프로젝트 데이터 불러오기
export async function getProjects(): Promise<Project[]> {
  const response = await fetch('/data/projects.json');
  if (!response.ok) {
    throw new Error('Failed to fetch projects data');
  }
  return response.json();
}

// 블로그 포스트 불러오기
export async function getBlogPosts(): Promise<BlogPost[]> {
  const response = await fetch('/data/blogPosts.json');
  if (!response.ok) {
    throw new Error('Failed to fetch blog posts data');
  }
  return response.json();
}

// 특정 프로젝트 불러오기
export async function getProjectById(id: string): Promise<Project | undefined> {
  const projects = await getProjects();
  return projects.find((project) => project.id === id);
}

// 특정 블로그 포스트 불러오기
export async function getBlogPostById(
  id: string,
): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts();
  return posts.find((post) => post.id === id);
}
export async function getSkills(): Promise<Skill[]> {
  const response = await fetch('/data/skills.json');
  if (!response.ok) {
    throw new Error('Failed to fetch skills data');
  }
  return response.json();
}
