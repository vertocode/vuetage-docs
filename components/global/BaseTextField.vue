<template>
  <div style="width: 200px;" :style="{ margin }">
    <BaseTextField v-bind="$props" :rules="rules" v-model="value"><slot></slot></BaseTextField>
  </div>
</template>

<script setup lang="ts">
import { BaseTextField } from 'vuetage'

const value = ref(null)
const props = defineProps({
  useRules: {
    type: Boolean,
    default: false
  },
  margin: {
    type: String,
    default: undefined
  },
  ...BaseTextField.props
})

const rules = props.useRules ? [
  (value: string) => value.includes('vuetage') || `The text "${value}" should include the word "vuetage".`
] : []

</script>
