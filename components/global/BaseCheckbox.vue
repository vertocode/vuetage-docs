<template>
  <div>
    <code v-if="!!code">{{ code }}</code>
    <div style="display: flex; gap: 16px">
      <BaseCheckbox v-bind="$props" />
      <BaseCheckbox v-bind="$props" defaultChecked />
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseCheckbox } from 'vuetage'

defineProps({
  code: String,
  ...BaseCheckbox.props
})

</script>