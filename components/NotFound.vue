<template>
  <div class="flex items-center justify-center p-10 h-3px bg-gray-100">
    <div class="text-center opacity-0 transform -translate-y-10 transition-transform duration-500">
      <h1 class="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p class="text-gray-600 mb-4">Page not found</p>
      <BaseButton variant="danger" @click="$router.push('/')">Go back home</BaseButton>
    </div>
  </div>
</template>

<script setup>
import { BaseButton } from 'vuetage'
import { onMounted } from 'vue'

onMounted(() => {
  const notFoundElement = document.querySelector('.text-center')
  notFoundElement.classList.remove('opacity-0', 'transform', '-translate-y-10')
})
</script>

<style scoped>
.transition-transform {
  transition-property: transform;
}
</style>
