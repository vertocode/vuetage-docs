<template>
  <div class="main-layout bg-emerald-200">
    <HeaderDefaultHeader />
    <div class="flex">
      <DocSidebar />
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.main-layout {
  min-height: 100vh;
}
</style>