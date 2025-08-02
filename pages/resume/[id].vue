<script setup>
import { LucideAArrowUp } from '#components';
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

const generatePdf = async () => {
  const resumeHtml = document.getElementById('resume-preview')?.outerHTML

  const res = await fetch('/api/resume/pdf', {
    method: 'POST',
    body: JSON.stringify({ html: resumeHtml }),
    headers: { 'Content-Type': 'application/json' },
  })

  const blob = await res.blob()
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.download = 'resume.pdf'
  link.click()
}

// Fetch resume data
// You can use `useAsyncData` if SSR or API fetching is needed
</script>

<template>
  <client-only>
    <div class="min-h-screen">
      <!-- Main Content -->
      <div class="flex h-100vh bg-base-300">
        <!-- Left Panel - Editor -->
        <div class="w-1/2 min-h-screen overflow-y-auto py-2  pl-6 pr-3">
          <div class="flex flex-row">
            <div class="w-1/6 card bg-base-100 p-3 mr-6 mt-4">
              <FormsNavigation />
            </div>
            <div class="w-5/6">
              <FormsProfile />
              <FormsExperience />
            </div>
          </div>
          
        </div>
        <div class="w-1/2 overflow-y-auto min-h-screen py-6 pl-3 pr-6">
          <Template3 />
        </div>



        <!-- Right Panel - Resume Preview -->

      </div>
    </div>
  </client-only>

</template>


