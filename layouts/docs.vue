<template>
  <div class="main-layout bg-emerald-200">
    <DefaultHeader />
    <div class="flex">
      <Sidebar />
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import DefaultHeader from "~/components/Header/DefaultHeader.vue"
import Sidebar from "~/components/Docs/Sidebar.vue"
</script>

<style lang="scss">
.main-layout {
  min-height: 100vh;
}
</style>