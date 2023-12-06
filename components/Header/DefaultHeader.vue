<template>
  <header class="inset-x-0 top-0">
    <nav class="flex items-center justify-between p-6 ml-12 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="/" class="-m-1.5 p-1.5 z-50">
          <img class="h-8 w-auto" src="https://i.imgur.com/E8WdocW.png" alt="logo" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="z-50 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <span class="sr-only">Open menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a v-for="item in navigation" :key="item.name" :href="item.route" class="z-50 text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</a>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <NuxtLink to="https://github.com/vertocode/vuetage" target="_blank" class="z-50 text-sm font-semibold leading-6 text-gray-900 cursor-pointer">Github <span aria-hidden="true">&rarr;</span></NuxtLink>
      </div>
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fill-transparent fixed inset-0 z-50" />
      <DialogPanel class="bg-white fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Logo</span>
            <img class="h-8 w-auto" src="https://i.imgur.com/E8WdocW.png" alt="logo" />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a v-for="item in navigation" :key="item.name" :href="item.route" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import {Dialog, DialogPanel} from "@headlessui/vue";
import {Bars3Icon, XMarkIcon} from "@heroicons/vue/24/outline";
import { ref } from 'vue'

const navigation = [
  { name: 'Get Started', route: '/docs/get-started' },
  { name: 'Components', route: '/docs/components' },
  { name: 'Contribute', route: '/docs/contribute' },
  { name: 'Contact', route: '/contact' },
]

const mobileMenuOpen = ref(false)
</script>