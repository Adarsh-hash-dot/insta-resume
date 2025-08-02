<template>
    <ul>
        <li v-for="(obj, index) in section" class="flex flex-col items-center mb-4 cursor-pointer" :key="index">
            <!-- {{ icon }} -->
            <component class="w-10 h-10 text-primary" :is="obj.icon" />
            <div class="text-center text-primary">{{ obj.name }}</div>
        </li>
    </ul>
</template>
<script setup>
import {
    LucideUser,
    LucideBriefcase,
    LucideGraduationCap,
    LucideSparkles,
    LucideFolderKanban,
    LucideTrophy,
    LucideLanguages,
    LucideHeart,
    LucideUsers
} from '#components' // Nuxt auto-imports from nuxt-lucide-icons

const section = [
    {
        name: 'Profile',
        component: 'FormsProfile',
        icon: LucideUser
    },
    {
        name: 'Experience',
        component: 'FormsExperience',
        icon: LucideBriefcase
    },
    {
        name: 'Education',
        component: 'FormsEducation',
        icon: LucideGraduationCap
    },
    {
        name: 'Skills',
        component: 'FormsSkills',
        icon: LucideSparkles
    },
    {
        name: 'Projects',
        component: 'FormsProjects',
        icon: LucideFolderKanban
    },
    {
        name: 'Achievements',
        component: 'FormsAchievements',
        icon: LucideTrophy
    },
    {
        name: 'Languages',
        component: 'FormsLanguages',
        icon: LucideLanguages // or LucideGlobe
    },
    {
        name: 'Interests',
        component: 'FormsInterests',
        icon: LucideHeart
    },
    {
        name: 'References',
        component: 'FormsReferences',
        icon: LucideUsers
    }
]

</script>
