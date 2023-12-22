<template>
  <div class="quick-search">
    <div class="inline-flex flex-col justify-center relative text-gray-500">
      <div class="relative">
        <input @input="searchValue = $event.target.value" type="text" class="p-2 pl-8 rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent" placeholder="Quick Search..." :value="searchValue" />
        <svg class="w-4 h-4 absolute left-2.5 top-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      </div>

      <ul class="bg-white border border-gray-100 w-full mt-2 absolute top-11 max-h-96" style="overflow-y: auto;" v-if="searchValue?.length">
        <li
            :class="{ 'opacity-30': item?.disabled, 'cursor-pointer hover:bg-yellow-50 hover:text-gray-900': !item?.disabled }"
            class="pl-8 pr-2 py-1 border-b-2 border-gray-100 relative"
            v-for="item in filteredItems"
        >
          <font-awesome-icon class="absolute left-2.5 top-2.5" icon="fa-solid fa-fire" />
          <a :href="item?.disabled ? null : item.route">
            <span v-html="formatText(item.text)"></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const searchValue = ref('')

const componentStore = useComponentDataStore()

const options = computed(() => {
  const options = [
    ...componentStore.value.items.flatMap(({ label, componentName, description, route, disabled = false }) => [
      { text: label, route, disabled },
      { text:componentName, route, disabled },
      { text: description, route, disabled },
      { text: 'Get Started', route: '/docs/get-started' },
      { text: 'Contribute', route: '/docs/contribute' },
      { text: 'Contact', route: '/contact' }
    ])
  ]
  return options.filter((value, index) => options.map(option => option.text).indexOf(value.text) === index)
})

const filteredItems = computed(() => {
  return options.value.filter(({ text }) => text.toLowerCase().includes(searchValue.value?.toLowerCase()))
})

const formatText = (text: string) => text.replace(searchValue.value, `<b>${searchValue.value}</b>`)
</script>