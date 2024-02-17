<template>
  <div class="w-1/2 mx-auto">
    <BaseItem
      :active
      :activeTextColor
      :activeBgColor
      :cursor
      :customStyle
      :leftIcon
      :rightIcon
    >{{ label }}</BaseItem>
  </div>
</template>

<script setup lang="ts">
import { BaseItem } from 'vuetage'

defineProps<{
  label: string
  active?: boolean
  activeTextColor?: string
  activeBgColor?: string
  cursor?: string
  customStyle?: string | object
  leftIcon?: string
  rightIcon?: string
}>()

</script>