<template>
  <div class="main-layout">
    <Navbar />
    <div>
      <NuxtParticles
          id="tsparticles"
          :options="options"
      />
    </div>
    <div class="flex transition-all" :class="{
        'mt-[3em]': generalStore.showHeader,
        'lg:ml-1 mt-[1em]': !generalStore.showHeader
    }">
      <DocSidebar class="hidden lg:flex"/>
      <slot></slot>
    </div>
    <Footer class="sticky bottom-0"></Footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted, useRuntimeConfig } from '#imports'
import { loadFull } from 'tsparticles'
import { tsParticles } from 'tsparticles-engine'

const { mode } = useRuntimeConfig().public.particles

useSeoMeta({
  title: 'Vuetage',
  description: 'Vuetage is a library of custom Vue components designed to simplify and enhance your web development experience with Vue.js.',
})

const generalStore = useGeneralStore()

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