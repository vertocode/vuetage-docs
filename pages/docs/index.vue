<template>
  <div class="docs w-full">
    <div class="container mx-auto py-8">
      <div class="mx-4 lg:mr-4 flex flex-wrap gap-4">
        <DocCard route="/docs/get-started" color="bg-blue-500">
          <h2 class="text-lg font-semibold">Get Started</h2>
          <ul class="list-disc list-inside text-gray-400">
            <li class="item">Introduction</li>
            <li class="item">Installation</li>
            <li class="item">Example</li>
            <li class="item">Usage</li>
          </ul>
        </DocCard>

        <DocCard route="/docs/components" color="bg-purple-500">
          <h2 class="text-lg font-semibold">Components</h2>
          <ul class="list-disc list-inside text-gray-400">
            <li class="item">Buttons</li>
            <li class="item">Inputs</li>
            <li class="item">Modals</li>
            <li class="item">Others</li>
          </ul>
        </DocCard>

        <DocCard route="/docs/contribute" color="bg-green-500">
          <h2 class="text-lg font-semibold">Contribute</h2>
          <ul class="list-disc list-inside text-gray-400">
            <li class="item">Contribute to Documentation</li>
            <li class="item">Contribute to Components</li>
            <li class="item">Report Bugs in Components</li>
            <li class="item">General Guidelines</li>
          </ul>
        </DocCard>
      </div>
    </div>
  </div>
</template>
