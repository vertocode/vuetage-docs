<template>
  <div class="relative m-auto mt-52" v-if="isLoading">
    <Spinner size="large" color-spinner="green"/>
  </div>
  <div v-else class="page px-5 w-full mt-4 lg:ml-6">
    <main class="pb-2 nuxt-content" ref="scrollDiv">
      <ContentDoc class="prose prose-light">
        <template #not-found>
          <NotFound></NotFound>
        </template>
      </ContentDoc>
      <div class="footer flex gap-5">
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
    </main>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Spinner } from 'vuetage'

const route = useRoute()
const previousPageData = ref({})
const nextPageData = ref({})
const { status, pending } = await useAsyncData('home', () => queryContent(route.path).findOne())

const isLoading = computed(() => {
  return pending.value || status.value !== 'success'
})

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
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

.page {
  background-color: white;
  margin-right: 1em;
  padding: 1em;

  .nuxt-content {
    a {
      color: #236251;
      text-decoration: none !important;
      border-bottom: none;
    }

    a:hover {
      text-decoration: underline;
    }

    h1 {
      font-size: 2.5em;
      background: #21C55D;
      background-clip: text;
      color: transparent;
      padding-bottom: 0.3em;
      margin-bottom: 0.5em;
      font-family: 'Playfair Display', serif;

      a {
        background: #21C55D;
        background-clip: text;
        color: transparent;
        font-family: 'Playfair Display', serif;
      }
    }

    h2 {
      font-size: 1.8em;
      color: #555;
      margin-bottom: 0.5em;
      text-decoration: none;
    }

    h3 {
      font-size: 1.5em;
      color: #777;
      margin-bottom: 0.5em;
    }

    pre {
      background-color: #272A37;
      margin-bottom: 2em;
      border: 1px solid #F8F859;
      color: rgba(255, 255, 255, 0.60);
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
      padding: 10px;
      margin: 10px 0;
      font-style: italic;
      font-size: 0.8em;
      font-weight: bolder;
      color: rgba(248, 248, 89, 0.7);
      background-color: #272A37;
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
      overflow-x: auto;
      display: block;
      white-space: nowrap;
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
    }

    th, td {
      border: 1px solid #ddd;
      padding: 12px;
      text-align: left;
    }

    th {
      background-color: #f2f2f2;
    }

    tr:hover {
      background-color: #f5f5f5;
    }

    p {
      font-family: 'Roboto', sans-serif;
    }

    .footer {
      .recommended-page {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em;
        margin: 1em 0 5em 0;
        border-width: 1px;
        border-style: solid;
        border-color: #e5e7eb;
        background-color: #F7FAFC;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
}

</style>