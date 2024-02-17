<template>
  <div class="m-auto my-6 mr-4 flex flex-col gap-8 w-full ml-10">
    <DocCard :disabled="component.disabled" v-for="component in componentDataStore.items" @click="$router.push(component.route)">
      <h3 class="font-semibold">{{ component.label }}</h3>
      <p class="font-light opacity-60" v-if="component.description.length">{{ component.description }}</p>
    </DocCard>
  </div>
</template>

<script setup lang="ts">
const componentDataStore = useComponentDataStore()
</script>