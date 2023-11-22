<template>
  <div class="docs">
    <div class="container mx-auto">
      <div class="mx-4 flex gap-3">
        <DocCard route="/docs/get-started">
          <div class="text-gray-600">
            <h2 class="mb-2 text-lg font-semibold text-gray-900 fark:text-white">
              Get Started
            </h2>
            <ul class="list-disc list-inside dark:text-gray-400">
              <li class="item">Introduction</li>
              <li class="item">Installation</li>
              <li class="item">How use components?</li>
            </ul>
          </div>
        </DocCard>

        <DocCard route="/docs/components">
          <div class="text-gray-600">
            <h2 class="mb-2 text-lg font-semibold text-gray-900 fark:text-white">
              Components
            </h2>
            <ul class="list-disc px-4 dark:text-gray-400">
              <li class="item">
                Buttons
                <ul class="list-disc list-inside dark:text-gray-400">
                  <li class="item">Base Button</li>
                </ul>
              </li>
              <li>
                Inputs
                <ul class="list-disc list-inside dark:text-gray-400">
                  <li class="item">Base Input</li>
                </ul>
              </li>
              <li>
                Spinners
                <ul class="list-disc list-inside dark:text-gray-400">
                  <li class="item">Spinner</li>
                </ul>
              </li>
            </ul>
          </div>
        </DocCard>

        <DocCard route="/docs/contribute">
            <div class="text-gray-600">
              <h2 class="mb-2 text-lg font-semibold text-gray-900 fark:text-white">
                Contribute
              </h2>
              <ul class="list-disc list-inside dark:text-gray-400">
                <li class="item">How report some bug</li>
                <li class="item">How create new component</li>
                <li class="item">How fix some bug</li>
              </ul>
            </div>
        </DocCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import DocCard from '~/components/Docs/DocCard.vue'
</script>