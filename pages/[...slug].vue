<template>
  <main class="mx-10 mb-20 nuxt-content" ref="scrollDiv">
    <ContentDoc class="prose prose-light">
      <template #not-found>
        <NotFound></NotFound>
      </template>
    </ContentDoc>
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
    text-decoration: underline;
  }

  h3 {
    font-size: 1.5em;
    color: #777;
    margin-bottom: 0.5em;
  }

  pre {
    background-color: #f8f8f8;
    margin-bottom: 2em;
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

  blockquote {
    border-left: 2px solid #6a737d;
    padding-left: 10px;
    margin: 10px 0;
    color: #6a737d;
  }

  a {
    color: #236251;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  ul, ol {
    padding-left: 20px;
  }

  li {
    margin-bottom: 0.25em;
    color: #333;
  }

  ul {
    list-style-type: disc;
  }

  ol {
    list-style-type: decimal;
  }

}
</style>