<template>
  <div class="container mx-auto">
    <div class="bg-gray-200 p-4 rounded">
      <div class="flex" v-if="codeInstructions instanceof Array && codeInstructions.filter(code => code.tab).length">
        <button
            v-for="(instruction, index) in codeInstructions"
            :key="index"
            @click="selectTab(instruction.tab || '')"
            :class="{ 'bg-blue-500 text-white': selectedTab === instruction.tab }"
            class="mr-2 px-4 py-2 rounded cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-400"
        >
          {{ instruction.tab }}
        </button>
      </div>

      <transition name="fade" mode="out-in">
        <div :key="selectedTab" class="mt-1">
          <div>
            <p class="p-5 bg-black text-left text-white rounded-md">
              <code class="text-gray-400">
                <slot v-if="$slots.default"></slot>
                <pre v-else v-html="code"></pre>
              </code>
            </p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
interface CodeInstruction {
  tab?: string
  code: string
}

interface Props {
  codeInstructions?: CodeInstruction[] | string
}

const props = defineProps<Props>()

const selectedTab = ref('')

const selectTab = (tab: string) => {
  selectedTab.value = tab
}

const code = computed(() => {
  if (props.codeInstructions instanceof Array) {
    const instruction = props.codeInstructions.find((item) => item.tab === selectedTab.value)
    return instruction ? instruction.code : ''
  }
})

if (props.codeInstructions instanceof Array && props.codeInstructions.filter(code => code.tab).length > 0) {
  selectedTab.value = props.codeInstructions[0].tab || ''
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
