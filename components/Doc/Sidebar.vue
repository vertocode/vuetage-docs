<template>
  <div class="flex">
    <div
        class="flex flex-col h-screen p-3 bg-slate-50 shadow whitespace-nowrap rounded-lg"
    >
      <div class="space-y-3">
        <NuxtLink to="/docs/get-started">
          <div class="flex items-center overflow-hidden">
            <h2 class="text-xl font-bold flex gap-3">
              <svg class="mt-1  flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
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
          <ul class="pt-2 pb-4 space-y-1 text-sm">
            <li class="rounded-sm" v-for="item in componentDataStore.items" :key="item.category">
              <NuxtLink
                  :to="item.route"
                  class="flex items-center p-2 space-x-3 rounded-md overflow-hidden"
              >
                <span>
                  {{ item.label }}
                  <font-awesome-icon :icon="['fas', 'caret-down']" v-if="!item.showComponents"/>
                </span>
                <ul v-if="item.showComponents">
                  <li class="opacity-50 items-center break-all" v-for="component in item.allComponents" :key="component.label">
                    <NuxtLink :to="component.route">
                      {{ component.label }}
                    </NuxtLink>
                  </li>
                </ul>
              </NuxtLink>
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
      </div>
    </div>
  </div>
</template>

<script setup>
const componentDataStore = useComponentDataStore()
</script>