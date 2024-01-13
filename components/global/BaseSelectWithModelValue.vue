<template>
  <div style="width: 200px;" :style="{ margin }">
    <BaseSelect v-model="value" v-bind="{
    ...props,
    options,
    label: 'Model Value'
  }"></BaseSelect>
  </div>
  <p> Model Value: <code style="color: #6AAF85;">{{ JSON.stringify(value) }}</code> </p>
</template>

<script setup lang="ts">
import { BaseSelect } from 'vuetage'

const value = ref(null)

const props = defineProps({
  useNormalOptions: {
    type: Boolean,
    default: false
  },
  useDemoOptions: {
    type: Boolean,
    default: false
  },
  margin: {
    type: String,
    default: undefined
  },
  ...BaseSelect.props
})

const demoOptions = ref([
  {
    group: 'Buttons',
    items: [
      { text: 'Primary', value: 'option1' },
      { text: 'Success', value: 'option2' },
      { text: 'Danger', value: 'option3' }
    ]
  },
  {
    group: 'Inputs',
    items: [
      { text: 'Base Text Field', value: 'option4' },
      { text: 'Base Select', value: 'option5' },
      { text: 'Base Autocomplete', value: 'option6' }
    ]
  }
])

const normalOptions = ref([
  { text: 'Option 1', value: 'option1' },
  { text: 'Option 2', value: 'option2' },
  { text: 'Option 3', value: 'option3' }
])

const groupOptions = ref([
  {
    group: 'Group 1',
    items: [
      { value: '1', text: 'Option 1' },
      { value: '2', text: 'Option 2' },
      { value: '3', text: 'Option 3' },
    ],
  },
  {
    group: 'Group 2',
    items: [
      { value: '4', text: 'Option 4' },
      { value: '5', text: 'Option 5' },
      { value: '6', text: 'Option 6' },
    ],
  },
])

const options = computed(() => {
  if (props.useDemoOptions) {
    return demoOptions.value
  }

  if (props.useNormalOptions) {
    return normalOptions.value
  }

  return groupOptions.value
})
</script>