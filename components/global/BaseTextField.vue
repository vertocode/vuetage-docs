<template>
  <div style="width: 200px">
    <BaseTextField v-bind="$props"><slot></slot></BaseTextField>
  </div>
</template>

<script setup lang="ts">
import { BaseTextField } from 'vuetage'

defineProps(BaseTextField.props)

</script>
