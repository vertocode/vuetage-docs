<template>
  <div class="container mx-auto">
    <div class="bg-gray-200 p-4 rounded">
      <div class="flex">
        <button
            v-for="(instruction, index) in codeInstructions"
            :key="index"
            @click="selectTab(instruction.tab)"
            :class="{ 'bg-blue-500 text-white': selectedTab === instruction.tab }"
            class="mr-2 px-4 py-2 rounded cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-400"
        >
          {{ instruction.tab }}
        </button>
      </div>

      <transition name="fade" mode="out-in">
        <div v-if="codeInstructions.length > 0" :key="selectedTab" class="mt-1">
          <div v-if="selectedTab !== ''">
            <p class="p-5 bg-black text-left text-white rounded-md">
              <code class="text-gray-400">{{ codeForSelectedTab }}</code>
            </p>
          </div>
        </div>
      </transition>

      <div v-if="codeInstructions.length === 0" class="text-gray-600 mt-4">
        Nada para mostrar.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface CodeInstruction {
  tab: string;
  code: string;
}

interface Props {
  codeInstructions: CodeInstruction[];
}

const props = defineProps<Props>();

const selectedTab = ref('');

const selectTab = (tab: string) => {
  selectedTab.value = tab;
};

const codeForSelectedTab = computed(() => {
  const instruction = props.codeInstructions.find((item) => item.tab === selectedTab.value);
  return instruction ? instruction.code : '';
});

if (props.codeInstructions.length > 0) {
  selectedTab.value = props.codeInstructions[0].tab;
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
