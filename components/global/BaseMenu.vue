<template>
  <div class="mx-auto w-1/2 relative">
    <BaseMenu custom-class="px-10 bg-blue-50 text-blue-400" close-icon="fa fa-window-close" left-icon="fa fa-fire" title="Movies" show show-close-button>
      <div>
        <BaseGroup custom-class="text-blue-500 bg-green-100" title="Marvel Movies">
          <BaseItem>The Avengers</BaseItem>
          <BaseItem>Guardians of the Galaxy</BaseItem>
          <BaseItem>Doctor Strange</BaseItem>
        </BaseGroup>
        <BaseGroup custom-style="background-color: #90ee90; color: green;" title="DC Movies">
          <BaseItem>The Flash</BaseItem>
          <BaseItem>The Batman</BaseItem>
          <BaseItem>League of Justice</BaseItem>
        </BaseGroup>
      </div>
    </BaseMenu>
  </div>
</template>

<script setup lang="ts">
import { BaseMenu, BaseGroup, BaseItem } from 'vuetage'

defineProps<{
  title?: string
}>()
</script>