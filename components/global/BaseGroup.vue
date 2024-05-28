<template>
  <div class="w-1/2 mx-auto">
    <BaseGroup :leftIcon="leftIcon" :rightIcon="rightIcon" :title="title || 'Base Group'" :customStyle="customStyle">
      <slot>
        <div v-if="useTodo">
          <BaseItem>Task 1</BaseItem>
          <BaseItem active>Task 2</BaseItem>
          <BaseItem>Task 3</BaseItem>
        </div>
        <div v-else>
          <BaseItem>Base Item 1</BaseItem>
          <BaseItem active>Base Item 2 (active)</BaseItem>
          <BaseItem>Base Item 3</BaseItem>
        </div>
      </slot>
    </BaseGroup>
  </div>
</template>

<script setup lang="ts">
import { BaseGroup, BaseItem } from 'vuetage'

defineProps<{
  title?: string
  useTodo?: boolean
  leftIcon?: string
  rightIcon?: string
  customStyle?: object | string
}>()
</script>