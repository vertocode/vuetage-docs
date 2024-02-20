<template>
  <div class="main-layout">
    <Navbar />
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
import { useRuntimeConfig } from '#imports'

const { mode } = useRuntimeConfig().public.particles

useSeoMeta({
  title: 'Vuetage',
  description: 'Vuetage is a library of custom Vue components designed to simplify and enhance your web development experience with Vue.js.',
})

const generalStore = useGeneralStore()
</script>


<style lang="scss">
.main-layout {
  min-height: 100vh;
}
</style>