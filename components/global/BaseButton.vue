<template>
  <BaseButton v-bind="props"><slot></slot></BaseButton>
</template>

<script setup lang="ts">
import { BaseButton } from 'vuetage'

const props = defineProps({
  ...BaseButton.props
})

</script>