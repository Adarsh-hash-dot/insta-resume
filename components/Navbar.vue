<script setup lang="ts">
import { LucideDownload } from '#components';
import { usePdfGenerator } from '../composables/usePdfGenerator';

const { generatePdf } = usePdfGenerator()

const downloadResume = () => {
  generatePdf('resume-preview', 'resume.pdf')
}

</script>

<template>
  <div class="navbar sticky top-0 z-50 bg-base-100 shadow-sm ">
    <div class="flex-1">
      <a class="btn btn-gost text-xl">Insta Resume</a>
      <button class="btn btn-outline btn-secondary ml-4"> <LucideLayoutDashboard /> Dashboard</button>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal items-center">
        <li> <UtlityThemeController /> </li>
        <li class="ml-2"> <button class="btn btn-primary" @click="downloadResume">Download <LucideDownload /> </button></li>
      </ul>
    </div>
  </div>
</template>