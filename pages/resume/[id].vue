<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const resumeId = route.params.id

// Fetch resume data
// You can use `useAsyncData` if SSR or API fetching is needed
</script>

<template>
  <div>
    <h1>Resume ID: {{ resumeId }}</h1>
    <!-- Render resume here -->
  </div>
</template>
