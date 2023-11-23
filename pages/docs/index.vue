<template>
  <div class="docs">
    <div class="container mx-auto py-8">
      <div class="mx-4 flex flex-wrap gap-4">
        <DocCard route="/docs/get-started" color="bg-blue-500">
          <h2 class="text-lg font-semibold">Get Started</h2>
          <ul class="list-disc list-inside text-gray-400">
            <li class="item">Introduction</li>
            <li class="item">Installation</li>
            <li class="item">How to use components?</li>
          </ul>
        </DocCard>

        <DocCard route="/docs/components" color="bg-purple-500">
          <h2 class="text-lg font-semibold">Components</h2>
          <ul class="list-disc list-inside text-gray-400">
            <li class="item">Buttons</li>
            <li class="item">Inputs</li>
            <li class="item">Spinners</li>
          </ul>
        </DocCard>

        <DocCard route="/docs/contribute" color="bg-green-500">
          <h2 class="text-lg font-semibold">Contribute</h2>
          <ul class="list-disc list-inside text-gray-400">
            <li class="item">How to report a bug</li>
            <li class="item">How to create a new component</li>
            <li class="item">How to fix a bug</li>
          </ul>
        </DocCard>
      </div>
    </div>
  </div>
</template>
