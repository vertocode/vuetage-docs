<template>
  <form @submit.prevent style="width: 240px; margin: 2em auto;">
    <BaseTextField
        label="Name"
        placeholder="Enter your name"
        v-model="data.name"
    />
    <BaseTextField
        label="Email"
        placeholder="Enter your email"
        v-model="data.email"
    />
    <BaseSelect
        close-on-select
        label="Country"
        :options="countries"
        v-model="data.country"
    />
    <BaseButton
        rightIcon="fa fa-rocket"
        size="small"
        :disabled="isDisabled"
        :loading="isLoading"
        @click="submit"
    >
      Submit form
    </BaseButton>
  </form>

  <div class="result">
    <h3>Model Result</h3>
    <pre>{{ data }}</pre>
  </div>
</template>
<script setup lang="ts">
import { BaseTextField, BaseButton, BaseSelect } from 'vuetage'
import { ref, reactive } from 'vue'

const isLoading = ref(false)
const data = reactive({
  name: '',
  email: '',
  country: {
    text: '',
    value: ''
  }
})

const countries = [
  { text: 'United States', value: 'us' },
  { text: 'Canada', value: 'ca' },
  { text: 'Mexico', value: 'mx' },
]

const isDisabled = computed(() => {
  return !data.name || !data.email || !data.country.value
})

const submit = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
}
</script>