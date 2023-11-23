<template>
  <div class="main-layout">
    <HeaderDefaultHeader />
    <div>
      <NuxtParticles
          id="tsparticles"
          :options="options"
      />
    </div>
    <div class="flex">
      <DocSidebar />
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, useRuntimeConfig } from '#imports'
import { loadFull } from 'tsparticles'
import { tsParticles } from 'tsparticles-engine'

const { mode } = useRuntimeConfig().public.particles;

const show = ref(true);

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