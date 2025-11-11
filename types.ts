
import { ReactNode } from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface Goal {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}
