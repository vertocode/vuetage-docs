<template>
  <div class="isolate px-6 py-20 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact</h2>
      <p class="mt-2 text-lg text-gray-600">Feel free to talk about anything.</p>
    </div>
    <form @submit.prevent="submit" class="mx-auto mt-2 max-w-xl sm:mt-10">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
          <div class="mt-2.5">
            <input v-model="formData.firstName" type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
          <div class="mt-2.5">
            <input v-model="formData.lastName" type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email *</label>
          <div class="mt-2.5">
            <input v-model="formData.email" type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message *</label>
          <div class="mt-2.5">
            <textarea v-model="formData.message" name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <SwitchGroup as="div" class="flex gap-x-4 sm:col-span-2">
          <div class="flex h-6 items-center">
            <Switch v-model="agreed" :class="[agreed ? 'bg-green-600' : 'bg-gray-200', 'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600']">
              <span class="sr-only">Agree to policies</span>
              <span aria-hidden="true" :class="[agreed ? 'translate-x-3.5' : 'translate-x-0', 'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out']" />
            </Switch>
          </div>
          <SwitchLabel class="text-sm leading-6 text-gray-600">
            By selecting this, you agree to our
            <span @click.prevent="privacyPolicy" class="cursor-pointer font-semibold text-green-600">privacy&nbsp;policy</span>. *
          </SwitchLabel>
        </SwitchGroup>
      </div>
      <div class="mt-10">
        <BaseButton :loading="loading" :disabled="isSendDisabled" variant="success" size="large" class="m-auto">Send</BaseButton>
      </div>
    </form>
    <div
        v-if="!lodash.isEmpty(alertStatus)"
        :class="alertStatus?.status === 'success' ? 'bg-green-400' : 'bg-red-400'"
        class="text-white rounded h-10 mt-4 px-4 flex items-center"
    >
      <h3 v-if="alertStatus.status === 'success'">
        Message sent successfully!
      </h3>
      <h3 v-else>
        I'm sorry, error sending message. Please try again later or contact via email directly <a href="mailto:evertonvanoni1@gmail.com">("evertonvanoni1@gmail.com")</a>.
      </h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
import lodash from 'lodash'

const agreed = ref(false)
const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  message: ''
})

const isSendDisabled = computed(() => {
  return lodash.isEmpty(formData.email) || lodash.isEmpty(formData.message) || !agreed.value
})

const alertStatus = ref({})
const loading = ref(false)

const privacyPolicy = () => alert('Be nice!')

const submit = async () => {
  loading.value = true
  alertStatus.value = {}
  try {
    const response = await fetch('https://formspree.io/f/mjvqngdw', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      alertStatus.value = { status: 'success' }
      formData.firstName = ''
      formData.lastName = ''
      formData.email = ''
      formData.message = ''
    } else {
      alertStatus.value = { status: 'failed' }
      console.error('Failed to submit form')
    }
  } catch (error) {
    alertStatus.value = { status: 'failed' }
    console.error('Error submitting form:', error)
  } finally {
    loading.value = false
  }
}
</script>