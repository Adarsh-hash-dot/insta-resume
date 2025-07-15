import { defineStore } from 'pinia'
import { nanoid } from 'nanoid' 
import type { Resume, PersonalInfo, Experience, Education, Skill, Project, Certificate, Language } from '~/types/resume'


function createEmptyResume(): Resume {
  const timestamp = new Date().toISOString()
  return {
    id: nanoid(),
    title: 'Untitled Resume',
    createdAt: timestamp,
    updatedAt: timestamp,
    personalInfo: {
      fullName: '',
      email: '',
      phone: ''
    } as PersonalInfo,
    experiences: [] as Experience[],
    education: [] as Education[],
    skills: [] as Skill[],
    projects: [] as Project[],
    certificates: [] as Certificate[],
    languages: [] as Language[],
    theme: 'default'
  }
}

export const useCounterStore = defineStore('app-data', {
  state: () => ({
    resumes: [] as Resume[],
    activeResumeId: '' as string
  }),
  getters: {
    activeResume(state): Resume | null {
      return state.resumes.find((r) => r.id === state.activeResumeId) || null
    }
  },
  actions: {
    createResume() {
      const newResume = createEmptyResume()
      this.resumes.push(newResume)
      this.activeResumeId = newResume.id
    },

    setActiveResume(id: string) {
      this.activeResumeId = id
    },

    updateResumeField<K extends keyof Resume>(
      resumeId: string,
      key: K,
      value: Resume[K]
    ) {
      const resume = this.resumes.find((r) => r.id === resumeId)
      if (resume) {
        resume[key] = value
        resume.updatedAt = new Date().toISOString()
      }
    },

    deleteResume(id: string) {
      this.resumes = this.resumes.filter((r) => r.id !== id)
      if (this.activeResumeId === id) {
        this.activeResumeId = this.resumes.length ? this.resumes[0].id : ''
      }
    },

    resetAll() {
      this.resumes = []
      this.activeResumeId = ''
    }
  },
  persist: true
})