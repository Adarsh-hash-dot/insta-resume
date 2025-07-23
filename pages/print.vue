<template>
  <ResumePrint />
</template>

<script setup>
import ResumePrint from '~/components/ResumePrint.vue'

// Optionally: auto-trigger print when loaded
onMounted(() => {
  window.print()
})
</script>