<template>
  <div class="relative">
    <BaseButton @click="showMenu = !showMenu">Show Menu</BaseButton>
    <BaseMenu z-index="20" :show="showMenu">
      <BaseItem>Option 1</BaseItem>
      <BaseItem>Option 2</BaseItem>
      <BaseItem>Option 3</BaseItem>
    </BaseMenu>
  </div>
</template>

<script setup lang="ts">
import { BaseMenu, BaseItem, BaseButton } from 'vuetage'

const showMenu = ref(false)
</script>