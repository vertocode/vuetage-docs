<template>
  <div style="width: 200px;" >
    <BaseTextField v-bind="$props" v-model="myValue"><slot></slot></BaseTextField>
    <p>Model Value: <br><span style="font-weight: bold; color: black;">{{ myValue }}</span> </p>
  </div>
</template>

<script setup lang="ts">
import { BaseTextField } from 'vuetage'

const props = defineProps(BaseTextField.props)

const myValue = ref('Hello World')

</script>
