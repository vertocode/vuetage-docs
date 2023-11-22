<template>
  <div class="mx-3 rounded-lg w-full bg-slate-50">
    <h1 class="capitalize text-center mt-2 italic font-semibold">{{ title }}</h1>
    <div class="m-5">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
}

defineProps<Props>()
</script>