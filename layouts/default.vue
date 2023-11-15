<template>
  <div class="main-layout bg-green-200">
    <DefaultHeader />
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import DefaultHeader from "~/components/Header/DefaultHeader.vue"
</script>

<style lang="scss">
.main-layout {
  min-height: 100vh;
}
</style>