<template>
  <div>
    <h1>Button Components</h1>
    <NuxtPage hello="hello world"></NuxtPage>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: (to) => {
    if (!to.params.component) {
      return navigateTo('/docs/components/buttons/base-button')
    }
  }
})
</script>