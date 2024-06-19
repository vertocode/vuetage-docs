<template>
  <header class="fixed border inset-x-0 top-0 bg-slate-50 z-50">
    <div v-show="generalStore.showHeader">
      <nav class="flex items-center justify-between p-2 ml-8 lg:px-6" aria-label="Global">
        <div class="flex gap-4 lg:flex-1 justify-between w-full">
          <NuxtLink to="/">
            <img class="h-10 mt-1 w-auto" src="/logo.png" alt="logo" />
          </NuxtLink>
          <div class="mr-12">
            <QuickSearch  />
          </div>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="z-50 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <NuxtLink v-for="item in menuConfig" :key="item.name" :to="item.route" class="z-50 text-sm font-semibold leading-6 text-gray-900">{{ item.label }}</NuxtLink>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <NuxtLink to="https://vuetage-components.vertocode.com" target="_blank" class="z-50 text-sm font-semibold leading-6 text-gray-900 cursor-pointer">Storybook Components <span aria-hidden="true">&rarr;</span></NuxtLink>
        </div>
      </nav>
      <div class="lg:hidden" v-if="mobileMenuOpen">
        <div class="fill-transparent fixed inset-0 z-50" />
        <div class="bg-white fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <NuxtLink to="/" class="-m-1.5 p-1.5">
              <span class="sr-only">Logo</span>
              <img class="h-8 w-auto" src="/logo.png" alt="logo" />
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
                    <BaseGroup
                        :show-dropdown="menu.items.length"
                        :leftIcon="menu.leftIcon"
                        :title="menu.label"
                        v-for="(menu, index) in menuConfig"
                        :key="`item-sidebar-${index}`"
                        @click="() => {
                          if (!menu.items.length) {
                            redirect(menu.route)
                          }
                        }"
                        >
                      <NuxtLink
                          class="text-center m-0 p-0"
                          v-for="(item, subIndex) in menu.items"
                          :key="`sub-item-sidebar-${subIndex}`"
                          :to="menu.route + ((item?.pathname || '') + (item?.hash || ''))"
                          @click="() => mobileMenuOpen = false"
                        >
                        <BaseItem
                            :leftIcon="item?.leftIcon"
                            :active="$route.path.includes(item?.pathname)"
                            style="padding: 4px 12px"
                          >
                          {{ item.label }}
                        </BaseItem>
                      </NuxtLink>
                    </BaseGroup>
                </div>
                <div class="flex flex-col gap-3">
                  <NuxtLink to="https://github.com/vertocode/vuetage" target="_blank" class="z-50 text-sm font-semibold leading-6 text-gray-900 cursor-pointer">Github <span aria-hidden="true">&rarr;</span></NuxtLink>
                  <NuxtLink to="https://vuetage-components.vertocode.com" target="_blank" class="z-50 text-sm font-semibold leading-6 text-gray-900 cursor-pointer">Storybook Components <span aria-hidden="true">&rarr;</span></NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
import {Bars3Icon, XMarkIcon} from "@heroicons/vue/24/outline";
import { ref } from 'vue'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {BaseGroup, BaseItem} from "vuetage";

const router = useRouter()
const generalStore = useGeneralStore()
const componentDataStore = useComponentDataStore()

const menuConfig = computed(() => ([
  {
    label: 'Get Started',
    leftIcon: 'fa fa-book',
    route: '/docs/get-started',
    items: [
      { label: 'Installation', hash: '#installation' },
      { label: 'Usage', hash: '#usage' },
      { label: 'Full Example', hash: '#full-example' },
    ],
  },
  ...(componentDataStore.value.items && componentDataStore.value.items?.length > 0 ? [
    {
      label: 'Components',
      leftIcon: 'fa fa-table',
      route: '/docs/components',
      items: componentDataStore.value.items.filter(item => !item?.disabled).map(component => ({
        label: component.label,
        pathname: component.route
      })),
    },
  ] : []),
  {
    label: 'Theme',
    leftIcon: 'fa fa-paint-brush',
    route: '/docs/theme',
    items: [],
  },
  {
    label: 'Contribute',
    leftIcon: 'fa fa-user-plus',
    route: '/docs/contribute',
    items: [],
  },
  {
    label: 'Release Notes',
    leftIcon: 'fa fa-bookmark',
    route: '/docs/release-notes',
    items: [],
  }
]))
const mobileMenuOpen = ref(false)

const redirect = (route) => {
  router.push(route)
  mobileMenuOpen.value = false
}
</script>