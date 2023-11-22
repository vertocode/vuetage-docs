<template>
  <div class="mx-4 flex flex-wrap gap-3 container">
    <div class="max-w-screen-sm">
      <div class="cursor-pointer hover:bg-green-100 w-full px-4 py-5 bg-white rounded-lg shadow" v-for="component in allComponents" :key="component.component">
        <div class="text-lg text-center">
          <h3 class="text-gray-500">
            {{ component.label }}
          </h3>
          <br>
          <div class="flex gap-3 flex-wrap">
            <component
                v-for="props in component.props"
                :key="props.label"
                :is="getComponent(component.componentName)"
                v-bind="props.bind"
                size="large"
                @click.prevent="$router.push(component.route)"
            >{{ props.label }}</component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseButton, Spinner } from 'vuetage'

const componentData = useComponentDataStore()

const getComponent = (name: string): Component => {
  switch (name) {
    case 'BaseButton':
      return BaseButton
    case 'Spinner':
      return Spinner
    default:
      throw new Error(`component not registered: ${name}`)
  }
}

const allComponents = computed(() => {
  return componentData.value.items.flatMap(item => item.allComponents)
})
</script>