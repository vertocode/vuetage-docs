---
title: 'Base Select component from Vuetage library'
description: 'Base Select is a vue component useful to manage easily variants, options, icons, and other things according to the props.'
---

# Base Select (Labs)

Base Select is a vue component useful to manage easily variants, options, icons, and other things according to the props.

<br>

# TODO: Add example

# Props

## Options

There are 2 ways to pass the `options` props to the component:

- Normal

This is the more common select options, this will be used to define the available options to the component.

```vue
<template>
  <BaseSelect :options="options" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BaseSelect, NormalOption } from 'vuetage'

const options = ref<NormalOption[]>([
  { value: '1', text: 'Option 1' },
  { value: '2', text: 'Option 2' },
  { value: '3', text: 'Option 3' },
])
</script>
```

# TODO: Add example

- Grouped

This is the grouped select options, this will be used to define the available options with a specified group to each option to the component.

```vue
<template>
  <BaseSelect :options="options" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BaseSelect, GroupOption } from 'vuetage'

const options = ref<GroupOption[]>([
  {
    group: 'Group 1',
    items: [
      { value: '1', text: 'Option 1' },
      { value: '2', text: 'Option 2' },
      { value: '3', text: 'Option 3' },
    ],
  },
  {
    group: 'Group 2',
    items: [
      { value: '4', text: 'Option 4' },
      { value: '5', text: 'Option 5' },
      { value: '6', text: 'Option 6' },
    ],
  },
])
</script>
```

# TODO: Add example

## Multiple

This prop is used to define if the select component are multiple or not. The default value is `false`.

If the base select is multiple, we can select more than one option as show below.

```vue
  <BaseSelect :options="options" multiple />
```

# TODO: Add an example

## Selected Options

This prop is used to define the selected options of the select component. The default value is `[]`.

```vue
<template>
  <BaseSelect :options="options" :selectedOptions="selectedOptions" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BaseSelect, NormalOption } from 'vuetage'

const options = ref<NormalOption[]>([
  { value: '1', text: 'Option 1' },
  { value: '2', text: 'Option 2' },
  { value: '3', text: 'Option 3' },
])
const selectedOptions = ref<NormalOption[]>(options.value.slice(0, 2))
</script>
```

> NOTE
>
> The selected options must have the same type that `NormalOption` as show above.

## Variant

The variant prop is used to define the variant of the select component. The available variants are:

- `default`

This is the default value for `variant` props of the base select component.

```vue
<BaseSelect :options="options"/> 
```

# TODO: Add an example

- `outline`

This is the outline value for `variant` props of the base select component.

```vue
BaseSelect :options="options" variant="outline" />
```

# TODO: Add an example

- `underlined`

This is the underlined value for `variant` props of the base select component.

```vue
<BaseSelect :options="options" variant="underlined" />
```

# TODO: Add an example

- `dark`

This is the dark value for `variant` props of the base select component.

```vue
<BaseSelect :options="options" variant="dark" />
```

# TODO: Add an example

