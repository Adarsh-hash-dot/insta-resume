<template>
  <div class="min-h-screen bg-base-200">

    <div class="flex h-[calc(100vh-64px)]">
      <!-- Left Sidebar -->
      <div class="w-96 bg-base-100 border-r overflow-y-auto">
        <div class="p-6">
          <!-- Personal Info -->
          <div class="mb-6">
            <div class="flex items-center justify-between mb-4">
              <div class="avatar placeholder">
                <div class="bg-pink-500 text-white rounded-full w-12 h-12">
                  <span class="text-lg">AS</span>
                </div>
              </div>
              <div class="badge badge-pink-500 badge-sm">
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
            <h2 class="text-xl font-bold mb-1">{{ personalInfo.name }}</h2>
            <p class="text-base-content/70 mb-4">{{ personalInfo.title }}</p>
            
            <div class="space-y-2 text-sm">
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-base-content/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input v-model="personalInfo.email" class="input input-ghost input-xs flex-1" />
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-base-content/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <input v-model="personalInfo.phone" class="input input-ghost input-xs flex-1" />
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-base-content/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <input v-model="personalInfo.location" class="input input-ghost input-xs flex-1" />
              </div>
            </div>
          </div>

          <!-- Professional Experience Section -->
          <div class="collapse collapse-open border border-base-300 mb-4">
            <div class="collapse-title flex items-center justify-between">
              <div class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
                <span class="font-semibold">Professional Experience</span>
              </div>
              <div class="badge badge-pink-500 badge-sm">
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
            <div class="collapse-content">
              <div class="space-y-3">
                <div v-for="(job, index) in experience" :key="index" class="flex items-center justify-between p-3 bg-base-200 rounded-lg">
                  <div class="flex items-center">
                    <svg class="w-4 h-4 mr-3 text-base-content/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                    <div>
                      <div class="font-medium text-sm">{{ job.title }}</div>
                      <div class="text-xs text-base-content/60">{{ job.company }}</div>
                    </div>
                  </div>
                  <button class="btn btn-ghost btn-xs">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                </div>
              </div>
              <button class="btn btn-ghost btn-sm w-full mt-3">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Professional Experience
              </button>
            </div>
          </div>

          <!-- Skills Section -->
          <div class="collapse border border-base-300 mb-4">
            <input type="checkbox" />
            <div class="collapse-title flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span class="font-semibold">Skills</span>
            </div>
          </div>

          <!-- Achievements Section -->
          <div class="collapse border border-base-300">
            <input type="checkbox" />
            <div class="collapse-title flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span class="font-semibold">Achievements</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Resume Preview -->
      <div class="flex-1 bg-white overflow-y-auto">
        <div class="max-w-4xl mx-auto p-8">
          <!-- Header -->
          <div class="border-b pb-6 mb-6">
            <div class="flex justify-between items-start">
              <div>
                <h1 class="text-3xl font-bold text-gray-900 mb-1">{{ personalInfo.name }}</h1>
                <p class="text-lg text-gray-600 italic mb-4">{{ personalInfo.title }}</p>
              </div>
            </div>
            
            <div class="flex flex-wrap gap-6 text-sm text-gray-600">
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {{ personalInfo.email }}
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {{ personalInfo.phone }}
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ personalInfo.location }}
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Personal website
              </div>
            </div>
            
            <div class="flex gap-4 mt-3 text-sm text-gray-600">
              <span class="flex items-center">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </span>
              <span class="flex items-center">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Github
              </span>
              <span class="flex items-center">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                leetcode
              </span>
            </div>
          </div>

          <!-- Professional Experience -->
          <div class="mb-8">
            <div class="flex items-center mb-4">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
              </svg>
              <h2 class="text-xl font-bold text-gray-900">PROFESSIONAL EXPERIENCE</h2>
            </div>
            
            <div v-for="(job, index) in experience" :key="index" class="mb-6">
              <div class="flex justify-between items-start mb-2">
                <div>
                  <h3 class="font-bold text-gray-900">{{ job.title }}</h3>
                  <p class="text-gray-600 italic">{{ job.company }} <span class="text-pink-500">🔗</span></p>
                </div>
                <div class="text-right text-sm text-gray-600">
                  <div>{{ job.period }}</div>
                  <div>{{ job.location }}</div>
                </div>
              </div>
              <ul class="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li v-for="(point, pointIndex) in job.points" :key="pointIndex">{{ point }}</li>
              </ul>
            </div>
          </div>

          <!-- Skills -->
          <div class="mb-8">
            <div class="flex items-center mb-4">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h2 class="text-xl font-bold text-gray-900">SKILLS</h2>
            </div>
            <p class="text-sm text-gray-700 leading-relaxed">
              Python | Node.js | React.js | Express.js | Next.js | Next.js | PostgreSQL | Microservices | Git | 
              Azure VM | HTML | CSS | Javascript | Puppeteer | Web Scraping | Vue.js | Typescript | Java | 
              Tailwind CSS | Material UI | Bootstrap
            </p>
          </div>

          <!-- Achievements -->
          <div class="mb-8">
            <div class="flex items-center mb-4">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <h2 class="text-xl font-bold text-gray-900">ACHIEVEMENTS</h2>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div v-for="(achievement, index) in achievements" :key="index">
                <h4 class="font-bold text-gray-900 mb-1">{{ achievement.title }} <span class="text-pink-500">🔗</span></h4>
                <p class="text-gray-700">{{ achievement.description }}</p>
              </div>
            </div>
          </div>

          <!-- Projects -->
          <div>
            <div class="flex items-center mb-4">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <h2 class="text-xl font-bold text-gray-900">PROJECTS</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const activeTab = ref('content')

const personalInfo = reactive({
  name: 'Adarsh Sahu',
  title: 'Software Development Engineer',
  email: 'adarshsahu1996@gmail.com',
  phone: '+919518588253',
  location: 'Bengaluru, Karnataka'
})

const experience = ref([
  {
    title: 'Software Developer',
    company: 'Tutorbin',
    period: '10/2021 – 10/2022',
    location: 'Gurugram, India',
    points: [
      'Developed and maintained python Django based application.',
      'Automated manual Tutor Assignment processes for faster student response times by 40%.',
      'Revamped Front-end applications to Next.js and enhance performance by 1.3 times.',
      'Improved code abstraction, technology utilization in frontend project to reduce development time by 50%.',
      'Developed user-friendly landing pages using Next.js and CMS Strapi for easy content editing, reducing content editing time by developers by 90%.'
    ]
  },
  {
    title: 'Software Developer',
    company: 'Blackstraw.ai',
    period: '12/2022 – 12/2023',
    location: 'Remote(Chennai), India',
    points: [
      'Designed and built a high-impact web scraping project for 200k users across multiple platforms (Amazon, Gmail, Walmart, Instacart).',
      'Developed and managed APIs for user data storage, web scraping, and streamlined data management.',
      'Optimized accessibility and business processes, resulting in a 40% reduction in data retrieval time and a 25% increase in overall system efficiency.',
      'Created a centralized configuration system accessible via API resulting in a 50% reduction in application releases and server deployments.'
    ]
  }
])

const achievements = ref([
  {
    title: 'Employee Of the Month',
    description: 'For the outstanding performance for the period of June-Aug\'23.'
  },
  {
    title: 'Data Structure Skill Test',
    description: 'Passed Data structure and algorithm Skill Test Hackerrank.'
  },
  {
    title: 'Data Structures',
    description: 'Completed Data Structure course with 81% score.'
  },
  {
    title: 'Python Programming',
    description: 'Completed Python Programming course with 100% score.'
  },
  {
    title: 'Front-End Development',
    description: 'Completed Frontend Development course.'
  },
  {
    title: 'Responsive Web Design',
    description: 'Completed Website development course by building 5 projects.'
  }
])
</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/daisyui@4.12.10/dist/full.min.css';
@import 'https://cdn.jsdelivr.net/npm/tailwindcss@3.4.0/dist/tailwind.min.css';

.badge-pink-500 {
  background-color: #ec4899; /* Tailwind's pink-500 */
  color: #fff;
}

.tab-active {
  background-color: #d1d5db; /* Tailwind's bg-base-300 default */
}

.text-pink-500 {
  color: #ec4899;
}
</style>