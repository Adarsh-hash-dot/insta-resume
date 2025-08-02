<template>
  <div id="resume-preview" class="max-w-4xl mx-auto bg-white shadow-lg">
    
    <!-- Header Section -->
    <header class="bg-gray-50 px-8 py-6 border-b border-gray-200">
      <!-- Name and Title -->
      <div class="text-center mb-4">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ resumeData.personalInfo.name }}</h1>
        <p class="text-lg text-gray-600 font-medium">
          {{ resumeData.personalInfo.title }} | {{ resumeData.personalInfo.location }}
        </p>
      </div>
      
      <!-- Contact Information -->
      <div class="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
        <!-- Phone -->
        <div class="flex items-center gap-2">
          <Phone class="w-4 h-4" />
          <span>{{ resumeData.personalInfo.phone }}</span>
        </div>
        
        <!-- Portfolio -->
        <div class="flex items-center gap-2">
          <Globe class="w-4 h-4" />
          <a :href="resumeData.personalInfo.portfolio" class="text-blue-600 hover:underline">
            Portfolio Link
          </a>
        </div>
        
        <!-- Email -->
        <div class="flex items-center gap-2">
          <Mail class="w-4 h-4" />
          <a :href="`mailto:${resumeData.personalInfo.email}`" class="text-blue-600 hover:underline">
            {{ resumeData.personalInfo.email }}
          </a>
        </div>
        
        <!-- LinkedIn -->
        <div class="flex items-center gap-2">
          <Linkedin class="w-4 h-4" />
          <a :href="resumeData.personalInfo.linkedin" class="text-blue-600 hover:underline">
            {{ resumeData.personalInfo.linkedinDisplay }}
          </a>
        </div>
        
        <!-- GitHub -->
        <div class="flex items-center gap-2">
          <Github class="w-4 h-4" />
          <a :href="resumeData.personalInfo.github" class="text-blue-600 hover:underline">
            {{ resumeData.personalInfo.githubDisplay }}
          </a>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="px-8 py-6">
      
      <!-- Professional Summary Section -->
      <section class="mb-8">
        <h2 class="text-xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">
          Professional Summary
        </h2>
        <div class="custom-bullet text-gray-700 leading-relaxed">
          {{ resumeData.summary }}
        </div>
      </section>

      <!-- Experience Section -->
      <section class="mb-8">
        <h2 class="text-xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">
          Experience
        </h2>
        
        <!-- Job Experience Loop -->
        <div v-for="(job, index) in resumeData.experience" :key="index" class="mb-6">
          <div class="flex justify-between items-start mb-2">
            <div>
              <h3 class="text-lg font-semibold text-gray-900">{{ job.company }}</h3>
              <p class="text-base font-medium text-gray-700">{{ job.position }}</p>
            </div>
            <div class="text-right text-sm text-gray-600">
              <p class="font-medium">{{ job.duration }}</p>
              <p>{{ job.location }}</p>
            </div>
          </div>
          
          <!-- Job responsibilities -->
          <ul class="space-y-2 text-gray-700">
            <li v-for="(responsibility, idx) in job.responsibilities" :key="idx" class="custom-bullet">
              {{ responsibility }}
            </li>
          </ul>
          
          <!-- Tech Stack -->
          <div v-if="job.techStack" class="mt-3">
            <p class="text-sm text-gray-600">
              <span class="font-semibold">{{ job.techStackLabel }}:</span> {{ job.techStack }}
            </p>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section class="mb-8">
        <h2 class="text-xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">
          Projects
        </h2>
        
        <!-- Project Loop -->
        <div v-for="(project, index) in resumeData.projects" :key="index" class="mb-4">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-lg font-semibold text-gray-900">
              {{ project.name }} | {{ project.technologies }}
            </h3>
            <span class="text-sm text-gray-600 font-medium">{{ project.date }}</span>
          </div>
          
          <ul class="space-y-1 text-gray-700">
            <li v-for="(description, idx) in project.descriptions" :key="idx" class="custom-bullet">
              {{ description }}
            </li>
          </ul>
          
          <!-- Project Links -->
          <div v-if="project.links && project.links.length > 0" class="mt-2 flex gap-4">
            <a 
              v-for="(link, idx) in project.links" 
              :key="idx"
              :href="link.url" 
              class="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
            >
              <Github v-if="link.type === 'github'" class="w-4 h-4" />
              <ExternalLink v-else-if="link.type === 'live'" class="w-4 h-4" />
              {{ link.label }}
            </a>
          </div>
        </div>
      </section>

      <!-- Technical Skills Section -->
      <section class="mb-8">
        <h2 class="text-xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">
          Technical Skills
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="(skillCategory, index) in resumeData.skills" :key="index">
            <p class="text-gray-700">
              <span class="font-semibold">{{ skillCategory.category }}:</span> {{ skillCategory.items }}
            </p>
          </div>
        </div>
      </section>

      <!-- Certifications Section -->
      <section class="mb-8">
        <h2 class="text-xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">
          Certifications
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div v-for="(cert, index) in resumeData.certifications" :key="index" class="flex items-center gap-2">
            <Award v-if="cert.type === 'certification'" class="w-4 h-4 text-yellow-500" />
            <Star v-else-if="cert.type === 'achievement'" class="w-4 h-4 text-yellow-500" />
            <span class="text-gray-700">{{ cert.name }}</span>
          </div>
        </div>
      </section>

      <!-- Recommendations Section -->
      <section class="mb-8">
        <h2 class="text-xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">
          Recommendations
        </h2>
        
        <!-- Recommendation Loop -->
        <div v-for="(recommendation, index) in resumeData.recommendations" :key="index" class="mb-6 bg-gray-50 p-4 rounded-lg">
          <div class="mb-2">
            <h3 class="font-semibold text-gray-900">{{ recommendation.name }} | {{ recommendation.title }}</h3>
            <p class="text-sm text-gray-600">{{ recommendation.relationship }} • {{ recommendation.date }}</p>
          </div>
          <div class="custom-bullet text-gray-700">
            {{ recommendation.text }}
          </div>
        </div>

        <div class="mt-4">
          <p class="text-sm text-gray-600">
            • Please refer recommendation section on 
            <a :href="resumeData.personalInfo.linkedin" class="inline-flex items-center gap-1 text-blue-600 hover:underline">
              <Linkedin class="w-4 h-4" />
              Linkedin
            </a>
          </p>
        </div>
      </section>

      <!-- Education Section -->
      <section class="mb-8">
        <h2 class="text-xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">
          Education
        </h2>
        
        <!-- Education Loop -->
        <div v-for="(education, index) in resumeData.education" :key="index" class="mb-4">
          <div class="flex justify-between items-start mb-1">
            <h3 class="text-lg font-semibold text-gray-900">{{ education.institution }}</h3>
            <span class="text-sm text-gray-600 font-medium">{{ education.duration }}</span>
          </div>
          <p class="text-gray-700">{{ education.degree }}</p>
          <p class="text-sm text-gray-600">{{ education.location }}</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { 
  Phone, 
  Globe, 
  Mail, 
  Linkedin, 
  Github, 
  ExternalLink, 
  Award, 
  Star 
} from 'lucide-vue-next'
import { computed } from 'vue';

// Define props for customization
const props = defineProps({
  customData: {
    type: Object,
    default: () => ({})
  }
})

// Default resume data - can be overridden by props
const defaultResumeData = {
  personalInfo: {
    name: "Adarsh Sahu",
    title: "Senior Full stack developer",
    location: "Bangalore, Karnataka 560062",
    phone: "9518-588-253",
    email: "adarshsahu1996@gmail.com",
    portfolio: "#",
    linkedin: "https://linkedin.com/in/adarsh-sahu-dev/",
    linkedinDisplay: "linkedin.com/in/adarsh-sahu-dev/",
    github: "https://github.com/Adarsh-hash-dot",
    githubDisplay: "github.com/Adarsh-hash-dot"
  },
  summary: "Adarsh is a Senior Full stack developer with over 4+ years of experience in software development, with focus on Vue.js, Nuxt.js, React.js, Next.js, Node.js and TypeScript. Adarsh has ability to tackle complex problems, write elegant code and provide innovative solutions.",
  experience: [
    {
      company: "SYMB Technologies (Consulting and Services)",
      position: "Senior Full Stack Developer",
      duration: "2024 – Present",
      location: "Noida(Remote), UP",
      responsibilities: [
        "Built a high-impact web application for Arizona State University, enabling students to explore 3K+ courses and manage 50K+ records across 50+ institutions.",
        "Led the frontend architecture using Vue.js, emphasizing component reusability, WCAG-compliant accessibility, and responsive UI design.",
        "Automated end-to-end CI/CD workflows using Bitbucket Pipelines, significantly reducing manual deployment time.",
        "Mentored junior developers, conducted in-depth code reviews, and advocated best practices in performance and documentation.",
        "Collaborated with designers and stakeholders to deliver seamless user flows and pixel-perfect UIs using Bootstrap and internal libraries.",
        "Implemented centralized state management with Pinia, reducing redundant API calls and improving performance.",
        "Developed and integrated dynamic components for real-time CSV generation, multi-step forms, and robust validation.",
        "Designed and optimized RESTful APIs using Node.js and PostgreSQL, improving performance of data-heavy endpoints by up to 4x."
      ],
      techStackLabel: "Tech Stack",
      techStack: "Vue.js, Nuxt.js, Tailwind CSS, Node.js, Express, PostgreSQL, AWS (S3, ECS, SES, CloudFront)"
    },
    {
      company: "Blackstraw AI (AI Services)",
      position: "Software Engineer (Full-Stack)",
      duration: "2022 – 2023",
      location: "Chennai(Remote), Tamil Nadu",
      responsibilities: [
        "Developed a Microservices Backend solution to scrape user order data from ecommerce platforms such as Amazon, Walmart, and Gmail for 200K+ users.",
        "Optimized the Scraping process, resulting in a 40% reduction in data retrieval time and a 25% increase in overall system efficiency.",
        "Developed APIs for user data storage, store scraped data, maintain scraping session data, trigger scraping jobs, data formatting.",
        "Created a centralized configuration system accessible via API resulting in a 50% reduction in application releases and server deployments.",
        "Implemented Scheduling, Logging, Scraping, Backend API, and Scraping Connection Microservices establishing communication between these services and users using messaging brokers and Socket.io."
      ],
      techStackLabel: "Technologies used",
      techStack: "Nest.js, Microservices, ActiveMQ, Postgres SQL, Puppeteer, Swagger, Socket.io, Winston logger, Web Scraping, Captcha bypass, Automatic captcha Solving, PM2, Azure VM deployment."
    },
    {
      company: "Tutorbin (Edtech Startup)",
      position: "Software Development Engineer (SDE)",
      duration: "2021 – 2022",
      location: "Gurugram, Haryana",
      responsibilities: [
        "Collaborated with cross-functional teams, including designers and backend developers, to seamlessly integrate front-end components with backend API services.",
        "Developed Pixel perfect and responsive user interfaces using React.js, Pure CSS, Tailwind CSS, ensuring smooth user experiences across diverse devices and browsers.",
        "Fixed production issues in fast-paced Startup environment while ensuring delivery of new features asked by Product Managers.",
        "Utilized Vue.js, Nuxt.js, React.js, Next.js, Python, Django templates, HTML/CSS, Javascript, Strapi CMS, Mixpanel, Bootstrap, Tailwind, Data Structures, Algorithms for efficient functionality sharing across application segments."
      ]
    }
  ],
  projects: [
    {
      name: "Insta-Resume",
      technologies: "Nuxt.js, Puppeteer",
      date: "July 2025",
      descriptions: [
        "Developed Insta-Resume, a free resume builder similar to FlowCV, using Nuxt.js for both frontend and backend with real-time template editing.",
        "Implemented Puppeteer-based PDF generation, enabling users to instantly download high-quality resumes without storing any data."
      ],
      links: [
        { type: "github", label: "Source Code Link", url: "#" }
      ]
    },
    {
      name: "Frybix Saas landing page",
      technologies: "React.js, Tailwind",
      date: "December 2022",
      descriptions: [
        "Built an modern, Pixel perfect Saas landing page using react.js, Tailwind CSS."
      ],
      links: [
        { type: "github", label: "Source Code Link", url: "#" },
        { type: "live", label: "Live Link", url: "#" }
      ]
    },
    {
      name: "3d-portfolio",
      technologies: "React.js, Tailwind, React-three-fiber",
      date: "February 2024",
      descriptions: [
        "Developed an modern 3d personal website to show case skill and make it easier for recruiter to look at the profile and contact.",
        "Added animations to characters using react-three-fiber. Used Tailwind CSS to write clean code"
      ],
      links: [
        { type: "github", label: "Source Code Link", url: "#" },
        { type: "live", label: "Live Link", url: "#" }
      ]
    }
  ],
  skills: [
    { category: "Languages", items: "JavaScript, Typescript, Python, SQL, HTML, CSS" },
    { category: "Developer Tools", items: "VS Code, DBeaver, Postman" },
    { category: "Technologies/Frameworks", items: "Vue.js, Nuxt.js, React.js, Node.js, Express.js, Nest.js, Puppeteer, Messaging brokers, GitHub" },
    { category: "Databases", items: "Postgres, MongoDB" }
  ],
  certifications: [
    { name: "AWS Cloud Practitioner", type: "certification" },
    { name: "Employee of Month", type: "certification" },
    { name: "Python certification", type: "certification" },
    { name: "DSA certification", type: "certification" },
    { name: "Frontend Development", type: "certification" },
    { name: "React certification", type: "certification" },
    { name: "Node.js certification", type: "certification" },
    { name: "Solved 470+ DSA Problems", type: "achievement" }
  ],
  recommendations: [
    {
      name: "Sudhir Kumar",
      title: "Solutions Lead — Blackstraw.AI",
      relationship: "Sudhir managed Adarsh directly",
      date: "October 11, 2023",
      text: "Adarsh is a very quick learner and innovative in the ways to design and implement solutions. He is very reliable person in general and professionally sharp and quickly adaptable. I highly recommend him to any tech team as his contributions are very valuable."
    },
    {
      name: "Rahul Dev",
      title: "SDE-III — Codezyng",
      relationship: "Rahul worked with Adarsh on the same team",
      date: "September 25, 2023",
      text: "Adarsh has an ability to tackle complex problems, write elegant code, and come up with innovative solutions. But it's not just about the technical skills. Adarsh is also an incredible team player. He is always ready to lend a helping hand, and share knowledge. He was the go-to person for technical help. He is surely a valuable asset to any team!"
    }
  ],
  education: [
    {
      institution: "Coding Ninjas",
      degree: "FullStack Development MERN with DSA",
      duration: "Jan 2023 – Jan 2024",
      location: "Online"
    },
    {
      institution: "Pune University",
      degree: "Bachelor of Engineering in Mechanical Engineering",
      duration: "Jun 2015 – Oct 2020",
      location: "Pune, Maharashtra"
    }
  ]
}

// Merge custom data with default data
const resumeData = computed(() => {
  return { ...defaultResumeData, ...props.customData }
})
</script>

<style scoped>
/* Custom print styles for better PDF generation */
@media print {
  body { 
    print-color-adjust: exact; 
  }
  .no-print { 
    display: none; 
  }
}

/* Custom bullet styles */
.custom-bullet {
  position: relative;
  padding-left: 1rem;
}

.custom-bullet::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #374151;
  font-weight: bold;
}
</style>
