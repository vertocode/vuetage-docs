<template>
  <div class="quick-search">
    <BaseAutocomplete
        left-icon="fa fa-search"
        :options="options"
        v-model="searchValue"
        placeholder="Quick Search..."
        @selectOption="(item: Option) => {
          if (item.route) {
             const hasHash = item.route.includes('#')
             if (hasHash) {
               router.push(`/docs/components${item.route}`)
             } else {
                router.push(item.route)
             }
          }
        }"
    />
  </div>
</template>

<script setup lang="ts">
import { BaseAutocomplete } from "vuetage"

const searchValue = ref('')

const componentStore = useComponentDataStore()
const router = useRouter()

type Option = {
  text: string
  route: string
  disabled: boolean
}

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
</script>