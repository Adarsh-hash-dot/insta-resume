<template>
  <div class="p-10 print:bg-white print:text-black">
    <h1 class="text-3xl font-bold">My Resume</h1>
    <p>This is a printable version of my resume.</p>
    <!-- Add your actual resume content here -->
     <Template1 />
  </div>
</template>

<script setup>
// This can receive props or fetch resume data
</script>

<style>
@media print {
  body {
    margin: 0;
  }
}
</style>
