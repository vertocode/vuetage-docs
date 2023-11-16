<template>
  <div class="flex">
    <div class="flex flex-col h-screen p-3 bg-white shadow w-60">
      <div class="space-y-3">
        <div class="flex items-center">
          <h2 class="text-xl font-bold flex gap-3">
            <svg
                class="w-5 h-5 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            Components
          </h2>
        </div>
        <div class="flex-1">
          <ul class="pt-2 pb-4 space-y-1 text-sm">
            <li class="rounded-sm" v-for="item in items" :key="item.category">
              <a
                  :href="item.route"
                  class="flex items-center p-2 space-x-3 rounded-md"
              >
                <span @click="item.showComponents = !item.showComponents">{{ item.label }}</span>
                <ul v-if="item.showComponents">
                  <li v-for="component in item.allComponents" :key="component.label">
                    {{ component.label }}
                  </li>
                </ul>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = ref([
  {
    category: 'button',
    route: '/docs/buttons',
    label: 'Buttons',
    showComponents: true,
    allComponents: [
      {
        label: 'Base Button',
        component: 'BaseButton',
        props: [
          {
            label: 'Primary',
            bind: { variant: 'primary' }
          },
          {
            label: 'Outlined Primary',
            bind: { variant: 'outlined-primary' }
          },
          {
            label: 'Success',
            bind: { variant: 'success' }
          },
          {
            label: 'Outlined Success',
            bind: { variant: 'outlined-success' }
          },
          {
            label: 'Danger',
            bind: { variant: 'danger' }
          },
          {
            label: 'Outlined Danger',
            bind: { variant: 'outlined-danger' }
          },
          {
            label: 'Dark',
            bind: { variant: 'dark' }
          },
          {
            label: 'Outlined Dark',
            bind: { variant: 'outlined-dark' }
          },
        ]
      }
    ]
  }
])
</script>