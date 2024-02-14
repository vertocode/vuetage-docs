<template>
  <div class="main-layout">
    <Navbar />
    <div>
      <NuxtParticles
          id="tsparticles"
          :options="options"
      />
    </div>
    <div class="min-h-[93.3vh]">
      <slot ></slot>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted, useRuntimeConfig } from '#imports'
import { loadFull } from 'tsparticles'
import { tsParticles } from 'tsparticles-engine'

useSeoMeta({
  title: 'Vuetage',
  description: 'Vuetage is a library of custom Vue components designed to simplify and enhance your web development experience with Vue.js.',
  ogImage: 'https://i.imgur.com/TJQ7yVv.png'
})

const { mode } = useRuntimeConfig().public.particles;

const options = {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  particles: {
    color: {
      value: "#A7F3D0",
    },
    links: {
      color: "#A7F3D0",
      enable: true,
    },
    move: {
      enable: true,
    },
    number: {
      value: 100,
    },
  },
};

onMounted(async () => {
  if (process.client && mode === 'custom') {
    await loadFull(tsParticles);
  }
})
</script>

<style lang="scss">
.main-layout {
  min-height: 100vh;
}
</style>