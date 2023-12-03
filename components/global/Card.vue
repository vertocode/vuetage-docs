<template>
  <div class="w-full p-6 bg-black rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
    <div class="text-gray-800">
      <slot>Default slot content</slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  height: max-content;
}
</style>
