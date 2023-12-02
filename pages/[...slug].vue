<template>
  <main class="mx-10 mb-20 nuxt-content">
    <ContentDoc class="prose prose-light"/>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'docs'
})
</script>

<style lang="scss">
.nuxt-content {
  max-height: 80vh;
  overflow-y: auto;

  h1 {
    font-size: 2.5em;
    color: #333;
    border-bottom: 2px solid #333;
    padding-bottom: 0.3em;
    margin-bottom: 0.5em;
  }

  h2 {
    font-size: 2em;
    color: #555;
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: 1.8em;
    color: #777;
    margin-bottom: 0.5em;
  }

  p {
    margin-bottom: 2em;
  }

  pre {
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 4px;
    overflow: auto;
  }

  code {
    font-family: 'Courier New', monospace;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 1em 0;
  }

  a {
    text-decoration: none;
  }
}
</style>