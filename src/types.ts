import { IconType } from 'react-icons';

export interface Skill {
  name: string;
  proficiency: number;
  yearsOfExperience: number;
}

export interface SkillCategory {
  icon: IconType;
  items: Skill[];
}

export interface SkillsData {
  [key: string]: SkillCategory;
} 