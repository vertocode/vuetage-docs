<template>
  <NuxtLink :to="route">
    <div class="w-full p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
      <div class="text-gray-800">
        <slot>Default slot content</slot>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
  route: string;
}

defineProps<Props>();
</script>
