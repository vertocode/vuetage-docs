<template>
  <div class="sticky top-[3em] min-h-[91vh] max-h-80 scroll-auto">
    <div
        v-if="generalStore.showSidebar"
        class="duration-75 overflow-hidden op-0.1 flex flex-col justify-between h-auto p-3 bg-slate-50 shadow whitespace-nowrap rounded-lg relative"
    >
      <div class="space-y-1">
        <NuxtLink to="/docs/get-started">
          <div class="flex items-center overflow-hidden">
            <h2 class="text-xl font-bold flex gap-3">
              <svg class="mt-1 flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z"/>
              </svg>
              Get Started
            </h2>
          </div>
        </NuxtLink>
        <NuxtLink to="/docs/components">
          <div class="flex items-center overflow-hidden">
            <h2 class="text-xl font-bold flex gap-3">
              <svg class="mt-1 flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H6a2 2 0 0 0-2 2h14v12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z"/>
                <path d="M14 4H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM2 16v-6h12v6H2Z"/>
              </svg>
              Components
            </h2>
          </div>
        </NuxtLink>

        <div class="flex-1">
          <ul class="pb-4 text-sm">
            <li v-show="!item?.disabled" class="rounded-sm pt-1" v-for="item in componentDataStore.items" :key="item.label">
              <NuxtLink
                  :to="item.route"
                  class="flex items-center pl-2 space-x-3 rounded-md overflow-hidden"
              >
                <span class="font-bold">
                  <font-awesome-icon icon="fa-solid fa-fire" class="mr-2"/>
                  {{ item.label }}
                </span>
              </NuxtLink>
                <ul v-if="$route.path.includes(item.route)">
                  <li class="pl-4 pt-1 font-medium opacity-50 items-center break-all" v-for="props in item.props" :key="props.hash">
                    <a :href="`${item.route}#${props.hash}`">
                      <font-awesome-icon icon="fa-solid fa-sitemap" class="mr-2"/>
                      {{ props.label }}
                    </a>
                  </li>
                </ul>
            </li>
          </ul>
        </div>

        <NuxtLink to="/docs/contribute">
          <div class="flex items-center overflow-hidden">
            <h2 class="text-xl font-bold flex gap-3">
              <svg class="mt-1 flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
              </svg>
              Contribute
            </h2>
          </div>
        </NuxtLink>

        <NuxtLink to="/docs/release-notes">
          <div class="flex items-center overflow-hidden mt-2">
            <h2 class="text-xl font-bold flex gap-3">
              <font-awesome-icon class="mt-1 flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" icon="fa-solid fa-code-merge"/>
              Release Notes
            </h2>
          </div>
        </NuxtLink>
      </div>

      <div class="bg-slate-50 inset-y-1/2 inset-x-1/2 cursor-pointer hover:bg-slate-200 p-2 mb-10 flex justify-between" @click="generalStore.showSidebar = false">
        <font-awesome-icon class="mt-1 ml-2" icon="fa-solid fa-arrow-left"/>
        <span>Hide Sidebar</span>
      </div>
    </div>
    <div v-else class="w-2xl bg-slate-50 hover:bg-slate-200 flex justify-center items-center cursor-pointer" @click="generalStore.showSidebar = true">
      <div class="pr-2">
        <font-awesome-icon class="mt-1 ml-2" icon="fa-solid fa-arrow-right" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const componentDataStore = useComponentDataStore()
const generalStore = useGeneralStore()
</script>