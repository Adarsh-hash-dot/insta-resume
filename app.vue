<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<script setup>
import { useCounterStore}  from '~/stores/data'

const resume = useCounterStore()

const { count, name } = resume

console.log('Count:', count)
console.log('Name:', name)

</script>