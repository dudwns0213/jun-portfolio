export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tool' | 'language';
  icon?: string;
}
