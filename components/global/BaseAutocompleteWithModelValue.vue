<template>
  <div style="max-width: 400px; margin: auto; ">
    <BaseAutocomplete
        label="Model Value"
        :options="options"
        v-model="myValue"
    />
    <p>Model Value: <br><span style="font-weight: bold; color: black;">{{ myValue }}</span> </p>
  </div>
</template>

<script setup lang="ts">
import { BaseAutocomplete } from 'vuetage'

const myValue = ref({ text: '', value: ''})

const options = ref([
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

</script>
