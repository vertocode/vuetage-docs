# Theme Configuration

In this page we will see how to customize the theme of Vuetage library in your project.

<br>

## Light and Dark Theme

There is a function from vuetage that we can use to change any scss variable that is being used in all components.

For example, we can change the primary color of all components using the function "changeTheme" as show below:

```vue
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
```
<br>

#### Result

Type any valid color like "red" in the input, and click in the button to see that the primary color that is being used in this button will change.

::base-button-theme
::

> Note
> 
> This will change globally, so if you change the route, the color will be the one that you set. If you want to reset the color, you can set the color to empty.