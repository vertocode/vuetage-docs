<template>
  <div>
    <h1>{{ route.params.component }}</h1>
  </div>
</template>

<script setup lang="ts">

const route = useRoute()
</script>