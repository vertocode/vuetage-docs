---
title: 'Base Text Field component from Vuetage library'
description: 'Base Text Field is a vue component useful to manage easily variants, validations, icons, and other things according to the props.'
---

# Base Text Field (In development)

Base Text Field is a vue component useful to manage easily variants, validations, icons, and other things according to the props.

<br>


<h1> <a href="https://vuejs.org/guide/components/props.html" target="_blank">
Props
</a> </h1>

## Label

Basically define some label for the input.

```vue
<BaseTextField label="Label" />
```

::base-text-field{label="Label"}
::

<br>

## Placeholder

Basically define some placeholder for the input.

```vue
<BaseTextField placeholder="Type your text" />
```

::base-text-field{label="Focus to see placeholder" placeholder="Type your text"}
::


<br>

## Variant

Variant is a prop that defines one of some predefined styles available to each case as you need.

<br>

- Default

The default variant can be used just calling the component, this is the default value for "variant" prop.

<br>

```vue
<BaseTextField />
```

::base-text-field{label="Default"}
::

<br>

- Outlined

The outlined variant can be used with the props "variant" with value "outlined" as show below:

```vue
<BaseTextField variant="outlined" />
```

::base-text-field{variant="outlined" label="Outlined"}
::

<br>

- Underlined

The underlined variant can be used with the props "variant" with value "underlined" as show below:

```vue
<BaseTextField variant="underlined" />
```

::base-text-field{variant="underlined" label="Underlined"}
::

<br>

- Dark

The dark variant can be used with the props "variant" with value "dark" as show below:

```vue
<BaseTextField variant="dark" />
```

::base-text-field{variant="dark" label="Dark"}
::

<br>

## Model Value

We can easily control the value of input passing some "ref" as a modelValue props. See the example below:

```vue
<template>
  <BaseTextField v-model="myValue"/>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { BaseTextField } from 'vuetage'

  const myValue = ref(null)
</script>
```
::base-text-field{label="Value"}
::

<br>

## Bind

Basically, we have a props to allow you to pass any attribute to the input. If you pass the attribute directly without using this props,
probably the attribute will appear in the parent element if you look in the DOM, for this reason we have this prop to allow you to put
attributes directly in the input.

As this component is using the classic "input", we can add any attribute as show in [MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input).

```vue
<BaseTextField :bind="{ autofocus: true }" />
```

## Loading

There are 2 kinds of loading; the spinner loading, and border loading.

<br>

- Spinner (Default)

```vue
<BaseTextField :loading="true" />
```

::base-text-field{:loading="true" label="Loading" loadingSize="20px"}
::

<br>

- Border Loading

```vue
<BaseTextField :loading="true" use-border-loading />
```

::base-text-field{:loading="true" label="Loading" :use-border-loading="true"}
::

<br>

There are some props related for the loading props:

| props            | type    | default                                            | description                                                                   |
|------------------|---------|----------------------------------------------------|-------------------------------------------------------------------------------|
| loading          | boolean | false                                              | Define if the component is in loading.                                        |
| useBorderLoading | boolean | false                                              | Define if the loading will be an spinner or border loading style.             |
| loadingColor     | string  | #3498db                                            | Define the color of spinner or border loading.                                | 
| loadingSize      | string  | small(0.7em) for spinner or 2px for border loading | Define the size of spinner or border loading.                                 |
| disableOnLoading | boolean | false                                              | Define if when the props "loading" be true the field will be disabled or not. |

<br>

## Disabled

Control the disabled state of the component.

```vue
<BaseTextField :disabled="true" />
```

::base-text-field{:disabled="true" label="Disabled"}
::

<br>

## Readonly

Control the readonly state of the component.

```vue
<BaseTextField :readonly="true" />
```

::base-text-field{:readonly="true" label="Readonly"}
::

<br>

## Rules

We can add any validation in our BaseTextField component using the rules.

<br>

- MaxLength

A predefined rule that is available for usage, it is useful to define the max length of input.


```vue
<BaseTextField :max-length="5" v-model="123456" />
```

You can test the input below typing any word with more 5 characters.

::base-text-field{:max-length="5" label="Max Length 5"}
::

