<template>
  <div class="container mx-auto mt-6 ml-6">
    <div class="mx-4">
      <div class="cursor-pointer hover:bg-green-100 w-full px-4 py-5 bg-white rounded-lg shadow" v-for="component in allComponents" :key="component.component">
        <div class="text-lg text-center">
          <h2>Buttons</h2>
          <h3 class="text-gray-500">
            {{ component.label }}:
          </h3>
          <br>
          <div class="flex gap-3 flex-wrap">
            <BaseButton class="m-auto">Primary</BaseButton>
            <BaseButton class="m-auto" variant="outline-primary">Outline Primary</BaseButton>
            <BaseButton class="m-auto" variant="success">Success</BaseButton>
            <BaseButton class="m-auto" variant="outline-success">Outline Success</BaseButton>
            <BaseButton class="m-auto" variant="danger">Danger</BaseButton>
            <BaseButton class="m-auto" variant="outline-danger">Outline Danger</BaseButton>
            <BaseButton class="m-auto" variant="dark">Dark</BaseButton>
            <BaseButton class="m-auto" variant="outline-dark">Outline Dark</BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseButton } from 'vuetage'

const componentData = useComponentDataStore()

const allComponents = computed(() => {
  return componentData.value.items.flatMap(item => item.allComponents)
})
</script>