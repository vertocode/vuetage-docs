<template>
  <div class="relative isolate px-10 pt-24 lg:px-3">
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-2xl sm:-top-80" aria-hidden="true">
      <div class="animate-pulse relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[white] to-[#22C55E] opacity-50 sm:left-[calc(50%-30rem)] sm:w-[92.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
      <div class="max-w-4xl mx-auto py-10 sm:py-14 lg:py-15">
        <div class="text-center">
          <h1 class="text-4xl text-gray-900 sm:text-6xl font-thin">
            Vue components to improvement your development
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">Vuetage is a library of custom Vue components designed to simplify and enhance your web development experience with Vue.js.</p>

          <div class="my-4">
            <img
                class="mx-auto h-[200px]  transition-all duration-300 ease-in-out transform hover:scale-105"
                :class="{ 'animate-spin': isImgHovered }"
                src="../assets/images/vuetage-homepage.png"
                @mouseenter="isImgHovered = true"
                @mouseleave="isImgHovered = false"
                alt="vuetage-homepage-image"
            >
            <span class="opacity-40 text-1.1em font-thin">Vuetage's heart (hover to feel the beats)</span>
          </div>


          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="/docs/get-started" class="whitespace-nowrap inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-green-500 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Get started
              <font-awesome-icon class="mt-1 ml-2" icon="fa-solid fa-rocket" />
            </a>
            <a href="/docs" class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 ">
              Documentation
              <font-awesome-icon class="mt-1 ml-2" icon="fa-solid fa-book" />
            </a>
          </div>
        </div>
      </div>
  </div>
</template>
<script setup lang="ts">
const isImgHovered = ref(false)
</script>

<style lang="scss">
body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
}
</style>