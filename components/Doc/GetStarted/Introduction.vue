<template>
  <section class="introduction">
    <DocPageSubTitle title="Introduction" hash="introduction" />
    <p>
      Vuetage is a library of custom Vue components designed to simplify and enhance web development experience to frontend developers. This library is a open source code where anyone with good intentions can contribute with new components and fix possible bugs.
    </p>
    <img class="mt-5 mx-auto" src="https://i.imgur.com/AjWJlr9.png" alt="vuetage">
    <div class="flex gap-3 justify-center mt-4">
      <a href="https://npm.im/vuetage">
        <img src="https://badgen.net/npm/v/vuetage?color=blue">
      </a>
      <a href="https://npm.im/vuetage">
        <img src="https://badgen.net/npm/dw/vuetage?color=blue">
      </a>
      <a href="https://npm.im/vuetage">
        <img src="https://badgen.net/npm/types/tslib">
      </a>
      <a href="https://bundlephobia.com/result?p=vuetage">
        <img src="https://badgen.net/bundlephobia/minzip/vuetage?color=blue">
      </a>
      <a href="https://bundlephobia.com/result?p=vuetage">
        <img src="https://badgen.net/npm/license/vuetage">
      </a>
    </div>
  </section>

  <section class="installation mt-10">
    <DocPageSubTitle class="mt-4" title="Installation" hash="installation" />

    <p>
      You can install Vuetage library using your package manager like show above.
    </p>

    <CodeWriter
        class="mt-2"
        :code-instructions="installationInstructions"
    ></CodeWriter>
  </section>

  <section class="usage mt-10">
    <DocPageSubTitle class="mt-4" title="Usage" hash="usage"/>

    <p>
      We can easily use the components just importing them. For example, to use BaseButton component we can import as show below.
    </p>

    <CodeWriter>import { BaseButton } from 'vuetage'</CodeWriter>

    <h3 class="mt-3 font-semibold">Full Example: </h3>

    <CodeWriter>
      <pre v-html="formattedExample"></pre>
    </CodeWriter>
  </section>
</template>

<script setup lang="ts">

const installationInstructions = [
  { tab: 'npm', code: 'npm install --save-dev vuetage' },
  { tab: 'yarn', code: 'yarn add -D vuetage' },
  { tab: 'pnpm', code: 'pnpm add -D vuetage' }
]

const fullExample = `<template>
  <BaseButton variant="success" :loading="isLoading" :disabled="isDisabled">
    Pay
  </BaseButton>
</template>

&lt;script setup lang="ts"&gt
import { ref } from 'vue'
import { BaseButton } from 'vuetage'

const isLoading = ref(false)
const isDisabled = ref(false)
&lt;/script&gt;
`;

const formattedExample = fullExample.replace(/</g, "&lt;").replace(/>/g, "&gt;");

</script>

