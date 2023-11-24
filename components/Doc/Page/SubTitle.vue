<template>
  <h2 class="font-bold cursor-pointer" :id="hash" @click="$router.push(`#${hash}`)">{{ title }}</h2>
</template>

<script setup lang="ts">
interface Props {
  title: string
  hash: string
}

defineProps<Props>()
</script>