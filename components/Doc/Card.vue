<template>
  <NuxtLink :to="route">
    <div :class="cardClasses" class="w-full p-6 bg-white rounded-lg shadow-lg transition-transform transform">
      <div>
        <slot>Default slot content</slot>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  route?: string;
  disabled?: boolean;
}

const props = defineProps<Props>()

const cardClasses = ref({
  'a': true,
  'opacity-50 cursor-not-allowed text-gray-400': props.disabled,
  'text-gray-800 hover:scale-105 cursor-pointer': !props.disabled
})
</script>

<style lang="scss" scoped>
a {
  height: max-content;
}
</style>
