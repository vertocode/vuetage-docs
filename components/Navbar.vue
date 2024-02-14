<template>
  <header class="fixed border inset-x-0 top-0 bg-slate-50 z-10">
    <div v-show="generalStore.showHeader">
      <nav class="flex items-center justify-between p-2 ml-8 lg:px-6" aria-label="Global">
        <div class="flex gap-2 lg:flex-1 justify-between">
          <NuxtLink to="/" class="-my-1.5 py-1.5 z-50">
            <img class="h-8 w-auto" src="https://i.imgur.com/E8WdocW.png" alt="logo" />
          </NuxtLink>
          <div class="lg:mr-20">
            <QuickSearch />
          </div>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="z-50 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <NuxtLink v-for="item in navigation" :key="item.name" :to="item.route" class="z-50 text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</NuxtLink>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <NuxtLink to="https://vuetage-components.vertocode.com" target="_blank" class="z-50 text-sm font-semibold leading-6 text-gray-900 cursor-pointer">Storybook Components <span aria-hidden="true">&rarr;</span></NuxtLink>
        </div>
      </nav>
      <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fill-transparent fixed inset-0 z-50" />
        <DialogPanel class="bg-white fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <NuxtLink to="/" class="-m-1.5 p-1.5">
              <span class="sr-only">Logo</span>
              <img class="h-8 w-auto" src="https://i.imgur.com/E8WdocW.png" alt="logo" />
            </NuxtLink>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root h-full">
            <div class="-my-6 divide-y divide-gray-500/10 h-full">
              <div class="py-10 flex flex-col justify-between h-full">
                <div>
                  <div class="flex flex-col py-2" v-for="item in navigation" :key="item.name">
                    <NuxtLink :to="item.route" class="block rounded-lg text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</NuxtLink>
                    <ul v-if="item?.subItems?.length">
                      <li class="ml-3 text-base op-50" v-for="subItem in item.subItems">
                        <NuxtLink :to="subItem.route" class="cursor-pointer block hover:bg-gray-50">
                          <font-awesome-icon icon="fa-solid fa-fire" class="mr-2"/>
                          <span>{{ subItem.name }}</span>
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="flex flex-col gap-3">
                  <NuxtLink to="https://github.com/vertocode/vuetage" target="_blank" class="z-50 text-sm font-semibold leading-6 text-gray-900 cursor-pointer">Github <span aria-hidden="true">&rarr;</span></NuxtLink>
                  <NuxtLink to="https://vuetage-components.vertocode.com" target="_blank" class="z-50 text-sm font-semibold leading-6 text-gray-900 cursor-pointer">Storybook Components <span aria-hidden="true">&rarr;</span></NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
    <div v-if="generalStore.showControlNavbar">
      <div
          class="flex justify-center gap-3 hover:bg-slate-100 cursor-pointer"
          v-if="$route.path.includes('/docs') && generalStore.showHeader"
          @click="generalStore.showHeader = false"
      >
        <font-awesome-icon class="mt-1 ml-2" icon="fa-solid fa-arrow-up" />
        <span>Hide Navbar</span>
      </div>
      <div
          class="flex justify-center gap-3 hover:bg-slate-100 cursor-pointer"
          @click="generalStore.showHeader = true"
          v-else-if="$route.path.includes('/docs')"
      >
        <font-awesome-icon class="mt-1 ml-2" icon="fa-solid fa-arrow-down" />
        <span>Show Navbar</span>
      </div>
    </div>
  </header>
</template>

<script setup>
import {Dialog, DialogPanel} from "@headlessui/vue";
import {Bars3Icon, XMarkIcon} from "@heroicons/vue/24/outline";
import { ref } from 'vue'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";


const generalStore = useGeneralStore()
const componentStore = useComponentDataStore()

const components = computed(() => componentStore.value.items?.filter(item => !item.disabled).map(item => ({ name: item.label, route: item.route })))

const navigation = computed(() => [
  { name: 'Get Started', route: '/docs/get-started' },
  {
    name: 'Components',
    route: '/docs/components',
    subItems: components.value
  },
  { name: 'Contribute', route: '/docs/contribute' },
  { name: 'Contact', route: '/contact' },
])
const mobileMenuOpen = ref(false)
</script>