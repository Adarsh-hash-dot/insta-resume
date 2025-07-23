<template>
    <div id="resume-preview" class=" bg-gray-50 p-6 overflow-y-auto">
      <div class="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <!-- Header -->
        <div class="border-b border-gray-200 pb-6 mb-6">
          <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ resumeData.name }}</h1>
          <p class="text-lg text-gray-600 italic mb-4">{{ resumeData.title }}</p>

          <div class="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div class="flex items-center space-x-2">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>{{ resumeData.email }}</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>{{ resumeData.phone }}</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd" />
              </svg>
              <span>{{ resumeData.location }}</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                  clip-rule="evenodd" />
              </svg>
              <span>Personal website</span>
            </div>
          </div>

          <div class="flex items-center space-x-4 mt-4 text-sm text-gray-600">
            <div class="flex items-center space-x-1">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                  clip-rule="evenodd" />
              </svg>
              <span>LinkedIn</span>
            </div>
            <div class="flex items-center space-x-1">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clip-rule="evenodd" />
              </svg>
              <span>Github</span>
            </div>
            <div class="flex items-center space-x-1">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>leetcode</span>
            </div>
          </div>
        </div>

        <!-- Professional Experience -->
        <div class="mb-8">
          <div class="flex items-center mb-4">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1zM4 9v7h12V9H4z"
                clip-rule="evenodd" />
            </svg>
            <h2 class="text-xl font-bold text-gray-900">PROFESSIONAL EXPERIENCE</h2>
          </div>

          <div class="space-y-6">
            <div>
              <div class="flex justify-between items-start mb-2">
                <div>
                  <h3 class="font-semibold text-gray-900">Software Developer</h3>
                  <p class="text-blue-600 text-sm">Tutorbin ↗</p>
                </div>
                <div class="text-right text-sm text-gray-600">
                  <p>10/2021 – 10/2022</p>
                  <p>Gurugram, India</p>
                </div>
              </div>
              <ul class="text-sm text-gray-700 space-y-1 ml-4">
                <li>• Developed and maintained python Django based application.</li>
                <li>• Automated manual Tutor Assignment processes for faster student response times by 40%.</li>
                <li>• Revamped Front-end applications to Next.js and enhance performance by 1.3 times.</li>
                <li>• Improved code abstraction, technology utilization in frontend project to reduce development time
                  by 50%.</li>
                <li>• Developed user-friendly landing pages using Next.js and CMS Strapi for easy content editing,
                  reducing content editing time by developers by 90%.</li>
              </ul>
            </div>

            <div>
              <div class="flex justify-between items-start mb-2">
                <div>
                  <h3 class="font-semibold text-gray-900">Software Developer</h3>
                  <p class="text-blue-600 text-sm">Blockstrawal ↗</p>
                </div>
                <div class="text-right text-sm text-gray-600">
                  <p>12/2022 – 12/2023</p>
                  <p>Remote(Chennai), India</p>
                </div>
              </div>
              <ul class="text-sm text-gray-700 space-y-1 ml-4">
                <li>• Designed and built a high-impact web scraping project for 200k users across multiple platforms
                  (Amazon, Gmail, Walmart, Instacart).</li>
                <li>• Developed and managed APIs for user data storage, web scraping, and streamlined data management.
                </li>
                <li>• Optimized accessibility and business processes, resulting in a 40% reduction in data retrieval
                  time and a 25% increase in overall system efficiency.</li>
                <li>• Created a centralized configuration system accessible via API resulting in a 50% reduction in
                  application releases and server deployments.</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Skills -->
        <div class="mb-8">
          <div class="flex items-center mb-4">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 class="text-xl font-bold text-gray-900">SKILLS</h2>
          </div>
          <div class="text-sm text-gray-700">
            <p>Python | Node.js | React.js | Express.js | Next.js | Next.js | PostgreSQL | Microservices | Git | Azure
              VM | HTML | CSS | Javascript | Puppeteer | Web Scraping | Vue.js | Typescript | Java | Tailwind CSS |
              Material UI | Bootstrap</p>
          </div>
        </div>

        <!-- Achievements -->
        <div class="mb-8">
          <div class="flex items-center mb-4">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <h2 class="text-xl font-bold text-gray-900">ACHIEVEMENTS</h2>
          </div>
          <div class="grid grid-cols-3 gap-4 text-sm">
            <div>
              <h4 class="font-semibold text-gray-900">Employee Of the Month ↗</h4>
              <p class="text-gray-600">For the outstanding performance for the period June-Aug'23.</p>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900">Data Structure Skill Test ↗</h4>
              <p class="text-gray-600">Passed Data structure and algorithm Skill Test Hackerrank.</p>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900">Data Structures ↗</h4>
              <p class="text-gray-600">Completed Data Structure course with 81% score.</p>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900">Python Programming ↗</h4>
              <p class="text-gray-600">Completed Python Programming course with 100% score.</p>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900">Front-End Development ↗</h4>
              <p class="text-gray-600">Completed Frontend Development course.</p>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900">Responsive Web Design ↗</h4>
              <p class="text-gray-600">Completed Website development course by building 5 projects.</p>
            </div>
          </div>
        </div>

        <!-- Projects -->
        <div>
          <div class="flex items-center mb-4">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15.586 13V12a1 1 0 011-1z"
                clip-rule="evenodd" />
            </svg>
            <h2 class="text-xl font-bold text-gray-900">PROJECTS</h2>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">Get Genuine Data ↗</h4>
            <p class="text-sm text-gray-600">Built a web scraping tool to extract product data from e-commerce platforms
              with 95% accuracy rate.</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const resumeId = route.params.id

import { ref, reactive } from 'vue'

const experience = reactive({
  jobTitle: 'Software Developer',
  employer: 'Tutorbin',
  startDate: '10/2021',
  endDate: '10/2022',
  location: 'Gurugram, India',
  description: `• Developed and maintained python Django based application.
• Automated manual Tutor Assignment processes for faster student response times by 40%.
• Revamped Front-end applications to Next.js and enhance performance by 1.3 times.
• Improved code abstraction, technology utilization in frontend project to reduce development time by 50%.
• Developed user-friendly landing pages using Next.js and CMS Strapi for easy content editing, reducing content editing time by developers by 90%.`
})

const resumeData = reactive({
  name: 'Adarsh Sahu',
  title: 'Software Development Engineer',
  email: 'adarshsahu1996@gmail.com',
  phone: '+919158588253',
  location: 'Bengaluru, Karnataka',
  website: 'Personal website'
})

// Fetch resume data
// You can use `useAsyncData` if SSR or API fetching is needed
</script>