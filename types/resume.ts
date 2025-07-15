// types/resume.ts

export interface PersonalInfo {
  fullName: string
  email: string
  phone: string
  address?: string
  website?: string
  linkedIn?: string
  github?: string
  summary?: string
}

export interface Experience {
  id: string
  jobTitle: string
  company: string
  location?: string
  startDate: string
  endDate?: string
  description: string
}

export interface Education {
  id: string
  degree: string
  institution: string
  location?: string
  startDate: string
  endDate?: string
  description?: string
}

export interface Skill {
  name: string
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
}

export interface Project {
  id: string
  title: string
  description: string
  technologies?: string[]
  link?: string
}

export interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  description?: string
}

export interface Language {
  name: string
  proficiency: 'Basic' | 'Conversational' | 'Fluent' | 'Native'
}

export interface ResumeData {
  personalInfo: PersonalInfo
  experiences: Experience[]
  education: Education[]
  skills: Skill[]
  projects: Project[]
  certificates: Certificate[]
  languages: Language[]
  theme?: string
}

export interface ResumeMeta {
  id: string
  title: string
  createdAt: string
  updatedAt: string
}

export interface Resume extends ResumeData {
  id: string
  title: string
  createdAt: string
  updatedAt: string
}
