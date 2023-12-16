<template>
  <div class="page mx-10 w-full">
    <main class="pb-2 nuxt-content " ref="scrollDiv">
      <ContentDoc class="prose prose-light">
        <template #not-found>
          <NotFound></NotFound>
        </template>
      </ContentDoc>
    </main>
    <div class="footer flex gap-5 w-full">
      <a :href="previousPageData?._path" class="recommended-page w-1/2 min-h-12" v-if="previousPageData?.title">
        <font-awesome-icon icon="fa-solid fa-arrow-left" class="mr-2"/>
        {{ previousPageData.title }}
      </a>
      <span class="w-1/2" v-else></span>
      <a :href="nextPageData?._path" class="recommended-page w-1/2 min-h-12" v-if="nextPageData?.title">
        {{ nextPageData.title }}
        <font-awesome-icon icon="fa-solid fa-arrow-right" class="ml-2"/>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const route = useRoute()
const previousPageData = ref({})
const nextPageData = ref({})
const { data } = await useAsyncData('home', () => queryContent(route.path).findOne())

onMounted(async () => {
  const [previous, next] = await queryContent().findSurround(route.path)
  previousPageData.value = previous
  nextPageData.value = next
})

definePageMeta({
  layout: 'docs'
})
</script>

<style lang="scss">
.page {
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

    table {
      border-collapse: collapse;
      width: 100%;
      margin-bottom: 20px;
    }

    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }

    th {
      background-color: #f2f2f2;
    }

    tr:hover {
      background-color: #f5f5f5;
    }
  }

  .footer {
    .recommended-page {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1em;
      border-width: 1px;
      border-style: solid;
      border-color: #e5e7eb;
      border-radius: 0 0 1.5em 1.5em;
      background-color: #F7FAFC;
      white-space: nowrap;
      overflow: hidden;
    }
  }
}

</style>