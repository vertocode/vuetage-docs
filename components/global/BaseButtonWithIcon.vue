<template>
  <BaseButton>
    <template #leftIcon v-if="leftIcon">
      <font-awesome-icon :icon="leftIcon"></font-awesome-icon>
    </template>
    <template #default><slot></slot></template>
    <template #rightIcon v-if="rightIcon">
      <font-awesome-icon :icon="rightIcon"></font-awesome-icon>
    </template>
  </BaseButton>
</template>

<script setup lang="ts">
import { BaseButton } from 'vuetage'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

defineProps({
  leftIcon: {
    type: String,
    required: false,
    default: null
  },
  rightIcon: {
    type: String,
    required: false,
    default: null
  }
})

</script>