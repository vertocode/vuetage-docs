<template>
  <div class="sticky top-[3em] min-h-[91vh] max-h-80">
    <div
        v-if="generalStore.showSidebar"
        class="duration-75 op-0.1 flex flex-col justify-between h-auto p-3 bg-slate-50 shadow whitespace-nowrap rounded-lg relative"
    >
      <div>
        <BaseGroup
            :show-dropdown="menu.items.length"
            :leftIcon="menu.leftIcon"
            :title="menu.label"
            v-for="(menu, index) in menuConfig"
            :key="`item-sidebar-${index}`"
            @click="() => {
              if (!menu.items.length) {
                $router.push(menu.route)
              }
            }"
        >
          <NuxtLink
              class="text-center m-0 p-0"
              v-for="(item, subIndex) in menu.items"
              :key="`sub-item-sidebar-${subIndex}`"
              :to="menu.route + ((item?.pathname || '') + (item?.hash || ''))"
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



      <div class="bg-slate-50 inset-y-1/2 inset-x-1/2 cursor-pointer hover:bg-slate-200 p-2 flex justify-between" @click="generalStore.showSidebar = false">
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
import { BaseGroup, BaseItem } from 'vuetage'

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
    leftIcon: 'fa fa-palette',
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
    leftIcon: 'fa-solid fa-code-branch',
    route: '/docs/release-notes',
    items: [],
  }
]))

</script>