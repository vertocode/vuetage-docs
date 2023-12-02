<template>
  <div class="mx-10 grid grid-cols-1 gap-8 md:grid-cols-2 h-max">
    <DocCard v-for="component in allComponents" @click="$router.push(component.route)">
      <h3 class="font-semibold">{{ component.label }}</h3>
      <p class="font-light opacity-60">{{ component.description }}</p>
    </DocCard>
  </div>
</template>

<script setup lang="ts">
const componentData = useComponentDataStore()

const allComponents = computed(() => {
  return componentData.value.items.flatMap(item => item.allComponents)
})
</script>