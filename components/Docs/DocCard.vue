<template>
  <NuxtLink :to="route">
    <div class="w-full px-4 py-5 bg-white rounded-lg shadow hover:bg-green-100">
      <slot>Default slot</slot>
    </div>
  </NuxtLink>

</template>
<script setup lang="ts">
interface Props {
  route: string
}

defineProps<Props>()
</script>