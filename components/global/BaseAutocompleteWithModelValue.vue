<template>
  <div style="width: 200px;" >
    <BaseAutocomplete v-bind="$props" v-model="myValue"><slot></slot></BaseAutocomplete>
    <p>Model Value: <br><span style="font-weight: bold; color: black;">{{ myValue }}</span> </p>
  </div>
</template>

<script setup lang="ts">
import { BaseAutocomplete } from 'vuetage'

const props = defineProps({})

const myValue = ref('Hello World')

</script>
