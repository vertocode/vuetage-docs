<template>
  <div class="quick-search">
    <div class="inline-flex flex-col justify-center relative text-gray-500">
      <div class="relative">
        <input @input="searchValue = $event.target.value" type="text" class="p-1 pl-10 rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent" placeholder="Quick Search..." :value="searchValue" />
        <svg class="w-5 h-5 absolute left-2.5 top-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      </div>

      <ul class="bg-white border border-gray-100 w-full mt-2 absolute top-8 max-h-96" style="overflow-y: auto;" v-if="searchValue?.length">
        <li
            :class="{ 'opacity-30': item?.disabled, 'hover:bg-green-50 hover:text-gray-900': !item?.disabled }"
            class="w-full pl-8 pr-2 py-1 border-b-2 border-gray-100 relative"
            v-for="item in filteredItems"
        >
          <a class="block w-full" @click="searchValue = ''" :href="item?.disabled ? null : item.route">
            <font-awesome-icon class="absolute left-2.5 top-2.5" icon="fa-solid fa-fire" />
            <span v-html="formatText(item.text)"></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const searchValue = ref('')

const componentStore = useComponentDataStore()

const options = computed(() => {
  const options = [
    { text: 'Get Started', route: '/docs/get-started' },
    { text: 'Contribute', route: '/docs/contribute' },
    { text: 'Components', route: '/docs/components' },
    { text: 'Release Notes', route: '/docs/release-notes' },
    { text: 'Contact', route: '/contact' },
    ...componentStore.value.items.flatMap(({ label, componentName, description, route, disabled = false, props = [] }) => [
      { text: label, route, disabled },
      { text: componentName, route, disabled },
      { text: description, route, disabled },
      ...props.map(({ label, hash }) => ({ text: `<b>${componentName}</b> <br> ${label}`, route: `${route}#${hash}`, disabled }))
    ])
  ]
  return options.filter((value, index) => options.map(option => option.text).indexOf(value.text) === index)
})

const filteredItems = computed(() => {
  return options.value.filter(({ text }) => text.toLowerCase().includes(searchValue.value?.toLowerCase()))
})

const formatText = (text: string) => text.replace(searchValue.value, `<b>${searchValue.value}</b>`)
</script>