<template>
          <div class="w-1/2 bg-white border-r border-gray-200 p-6 overflow-y-auto">
        <div class="max-w-lg">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-semibold text-gray-800">Edit Professional Experience</h2>
            <button class="flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
              </svg>
              <span>Need help?</span>
            </button>
          </div>

          <form class="space-y-6">
            <!-- Job Title -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
              <input 
                v-model="experience.jobTitle"
                type="text" 
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Software Developer"
              />
            </div>

            <!-- Employer -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Employer</label>
              <div class="flex space-x-2">
                <input 
                  v-model="experience.employer"
                  type="text" 
                  class="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tutorbin"
                />
                <button type="button" class="px-4 py-2 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 flex items-center space-x-1">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"/>
                  </svg>
                  <span class="text-sm">Link</span>
                </button>
              </div>
            </div>

            <!-- Date Range -->
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                <div class="relative">
                  <input 
                    v-model="experience.startDate"
                    type="text" 
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
                    placeholder="10/2021"
                  />
                  <button type="button" class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                <div class="relative">
                  <input 
                    v-model="experience.endDate"
                    type="text" 
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
                    placeholder="10/2022"
                  />
                  <button type="button" class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- Location -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input 
                v-model="experience.location"
                type="text" 
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Gurugram, India"
              />
            </div>

            <!-- Description -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <!-- Rich Text Editor Toolbar -->
              <div class="border border-gray-300 rounded-t-md bg-gray-50 px-3 py-2 flex items-center space-x-2">
                <button type="button" class="p-1 hover:bg-gray-200 rounded">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM4 8a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM4 12a1 1 0 011-1h4a1 1 0 110 2H5a1 1 0 01-1-1z"/>
                  </svg>
                </button>
                <button type="button" class="p-1 hover:bg-gray-200 rounded font-bold text-sm">B</button>
                <button type="button" class="p-1 hover:bg-gray-200 rounded italic text-sm">I</button>
                <button type="button" class="p-1 hover:bg-gray-200 rounded underline text-sm">U</button>
                <div class="w-6 h-6 bg-purple-500 rounded"></div>
                <button type="button" class="p-1 hover:bg-gray-200 rounded">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
                  </svg>
                </button>
                <button type="button" class="p-1 hover:bg-gray-200 rounded">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
                  </svg>
                </button>
                <button type="button" class="p-1 hover:bg-gray-200 rounded">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"/>
                  </svg>
                </button>
              </div>
              <textarea 
                v-model="experience.description"
                rows="8"
                class="w-full px-3 py-2 border border-gray-300 border-t-0 rounded-b-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="• Developed and maintained python Django based application.
• Automated manual Tutor Assignment processes for faster student response times by 40%.
• Revamped Front-end applications to Next.js and enhance performance by 1.3 times.
• Improved code abstraction, technology utilization in frontend project to reduce development time by 50%.
• Developed user-friendly landing pages using Next.js and CMS Strapi for easy content editing, reducing content editing time by developers by 90%."
              ></textarea>
            </div>

            <!-- Action Buttons -->
            <div class="flex items-center justify-between pt-6">
              <button type="button" class="flex items-center space-x-2 text-red-600 hover:text-red-700">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"/>
                </svg>
                <span>Delete</span>
              </button>
              <div class="flex space-x-3">
                <button type="button" class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  Cancel
                </button>
                <button type="button" class="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600">
                  Save
                </button>
              </div>
            </div>
          </form>
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