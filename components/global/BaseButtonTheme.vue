<template>
  <div style="width: 300px">
    <BaseTextField
        label="Primary Color"
        v-model="primaryColor"
    />
    <BaseButton
        rightIcon="fa fa-rocket"
        size="small"
        :disabled="!primaryColor"
        @click="handleSubmit"
    >
      Apply Theme
    </BaseButton>
  </div>

</template>

<script setup lang="ts">
import { BaseButton, changeTheme, BaseTextField } from 'vuetage'

const primaryColor = ref('')

const handleSubmit = () => {
  changeTheme({
    variables: {
      primaryColor: primaryColor.value
    }
  })
}
</script>