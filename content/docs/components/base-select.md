---
title: 'Base Select component from Vuetage library'
description: 'Base Select is a vue component useful to manage easily variants, options, icons, and other things according to the props.'
---

# Base Select

Base Select is a vue component useful to manage easily variants, options, icons, and other things according to the props.

<br>

::base-select{use-demo-options="true" label="Base Select" left-icon="fa fa-fire" margin="auto" variant="outlined"}
::

# Model Value

The model value of the base select component is the value of the selected option. It will be automated updated when we select/unselect an option.
If is't a multiple select, the model value will be an array of the selected options.

::base-select-with-model-value{use-normal-options="true"}
::

```vue
<template>
    <BaseSelect label="Model Value" :options="options" v-model="myValue" />
    <p> Model Value: <code style="color: #6AAF85;">{{ JSON.stringify(myValue) }}</code> </p>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { BaseSelect, NormalOption } from 'vuetage'

  const myValue = ref<NormalOption>(null)
  const options = [
    { value: '1', text: 'Option 1' },
    { value: '2', text: 'Option 2' },
    { value: '3', text: 'Option 3' },
  ]
</script>
```

<br>

# Props

## Options

There are 2 ways to pass the `options` props to the component:

<br>

- Normal

This is the more common select options, this will be used to define the available options to the component.

```vue
<template>
  <BaseSelect label="Normal Options" :options="options" />
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

::base-select{label="Normal Options" :use-normal-options="true"}
::

<br>

- Grouped

This is the grouped select options, this will be used to define the available options with a specified group to each option to the component.

```vue
<template>
  <BaseSelect label="Group Options" :options="options" />
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

::base-select{label="Group Options" :use-normal-options="false"}
::

<br>

## Multiple

This prop is used to define if the select component are multiple or not. The default value is `false`.

If the base select is multiple, we can select more than one option as show below.

```vue
<BaseSelect :options="options" multiple />
```

::base-select{label="Multiple" :multiple="true" :use-demo-options="true"}
::

<br>

## Variant

The variant prop is used to define the variant of the select component. The available variants are:

<br>

- `default`

This is the default value for `variant` props of the base select component.

```vue
<BaseSelect label="Default" :options="options"/> 
```

::base-select{label="Default" :use-demo-options="true"}
::

<br>

- `outlined`

This is the outlined value for `variant` props of the base select component.

```vue
<BaseSelect label="Outlined" :options="options" variant="outlined" />
```

::base-select{label="Outlined" :use-demo-options="true" variant="outlined"}
::

<br>

- `underlined`

This is the underlined value for `variant` props of the base select component.

```vue
<BaseSelect label="Underlined" :options="options" variant="underlined" />
```

::base-select{label="Underlined" :use-demo-options="true" variant="underlined"}
::

<br>

- `dark`

This is the dark value for `variant` props of the base select component.

<br>

```vue
<BaseSelect label="Dark" :options="options" variant="dark" />
```

::base-select{label="Dark" :use-demo-options="true" variant="dark"}
::

<br>

## Close on select

This prop is used to define if the menu is closed when an option is selected. The default value is `true` for normal options, and `false` for grouped options.

```vue
<BaseSelect variant="underlined" label="Close on select" :options="options" :close-on-select="false" />
```

::base-select{label="Close on select" :use-normal-options="true" variant="underlined" :close-on-select="false"}
::

<br>

## Loading

This prop defines if the select component is loading or not. The default value is `false`.

```vue
<BaseSelect label="Loading" variant="outlined" :loading="true" />
```

::base-select{label="Loading" :use-demo-options="true" variant="outlined" :loading="true"}
::

<br>

There are some props related for the loading props:

| props            | type    | default                                            | description                                                                   |
|------------------|---------|----------------------------------------------------|-------------------------------------------------------------------------------|
| loading          | boolean | false                                              | Define if the component is in loading.                                        |
| useBorderLoading | boolean | false                                              | Define if the loading will be an spinner or border loading style.             |
| loadingColor     | string  | black                                              | Define the color of spinner or border loading.                                | 
| loadingSize      | string  | small(0.7em) for spinner or 2px for border loading | Define the size of spinner or border loading.                                 |
| disableOnLoading | boolean | false                                              | Define if when the props "loading" be true the field will be disabled or not. |

<br>

## Disabled

This prop defines if the select component is disabled or not. The default value is `false`.

```vue
<BaseSelect label="Disabled" :disabled="true" />
```

::base-select{:disabled="true" label="Disabled"}
::

<br>

## Icons

We can add icons to the input, we have 2 kinds of icons, the left icon, and the right icon. The available icons are the same that we can use in <a href="https://fontawesome.com/v4.7.0/icons/" target="_blank">font awesome</a>.
But if you have another library that adds an icon using this syntax "`<i class="icon"></i>`", you can use it passing it as a prop value.

<br>

### Left Icon

This is a prop to add an icon to the left of the input.

```vue
<BaseSelect label="Left Icon" :options="options" left-icon="fa fa-fire" />
```

::base-select{left-icon="fa fa-fire" label="Left Icon"}
::

<br>

### Right Icon

This is a prop to add an icon to the left of the input.

> Note
> 
> The right icon passed as prop will replace the default icon that is the arrow down("fa fa-caret-down").

```vue
<BaseSelect label="Left Icon" :options="options" left-icon="fa fa-fire" />
```

::base-select{right-icon="fa fa-fire" label="Left Icon"}
::

<br>

## Styles

There are some props to help you to customize the select component. 
For these props, you can use the same syntax that you use in the style of some vue component.

<br>

You can also edit the hover passing the style as an object inside the hover key, as show below.

```vue
<BaseSelect
  label="Styles" 
  :options="options" 
  :style="{
      backgroundColor: '#90ee90',
      color: 'green',
      // You can use any style that you use in the style prop. It will be applied when the mouse is over the component.
      hover: { 
        backgroundColor: 'yellow',
        color: 'green',
      }
  }"
/>
```

<br>

### Input Style

This prop will modify the style of the input.

```vue
<BaseSelect label="Input Style" :options="options" input-style="background-color: #90ee90; color: green;" />
```

::base-select{label="Input Style" :use-demo-options="true" input-style="background-color: #90ee90; color: green;"}
::

<br>

### Label Style

This prop will modify the style of the label.

```vue
<BaseSelect label="Label Style" :options="options" label-style="color: red;" />
```

::base-select{label="Label Style" :use-demo-options="true" label-style="color: red;"}
::

<br>

### Menu Style

This prop will modify the style of the menu.

```vue
<BaseSelect label="Menu Style" :options="options" menu-style="background-color: #90ee90; color: green;" />
```

::base-select{label="Menu Style" :use-demo-options="true" menu-style="background-color: #90ee90; color: green;"}
::

<br>

### Item Style

This prop will modify the style of the menu item.

```vue
<BaseSelect label="Menu Item Style" :options="options" item-style="background-color: #90ee90; color: green;" />
```

::base-select{label="Menu Item Style" :use-demo-options="true" item-style="background-color: #90ee90; color: green;"}
::

<br>

### Group Style

This prop will modify the style of the menu group.

```vue
<BaseSelect label="Menu Group Style" :options="options" group-style="background-color: #90ee90; color: green;" />
```

::base-select{label="Menu Group Style" :use-demo-options="false" group-style="background-color: #90ee90; color: green;"}
::

## Slots

There are some slots that you can use to customize the select component.

| Slot      | Description                                                                                                                                     |
|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| rightIcon | Replace content of right icon                                                                                                                   |
| menu      | Replace the menu when the user clicks on base select to select options (you receive if the menu is opened in "show" attribute, and the options) |
| item      | Replace each item content inside menu when the user clicks on base select (you receive the option, and index to use)                            |

<br>

### Slot Examples

#### Menu Slot

This is an example of how to use the menu slot to customize the menu.

```vue
<BaseSelect label="Menu Slot" :options="options">
  <template #menu="{ show, options }">
    <BaseMenu :show="show">
      <BaseItem v-for="(option, index) in options" :key="index">
        <i :class="option.icon"></i> {{ option.text }}
      </BaseItem>
    </BaseMenu>
  </template>
</BaseSelect>
```

#### Item Slot

This is an example of how to use the item slot to customize the item.

```vue
<BaseSelect label="Item Slot" :options="options">
  <template #item="{ option, index }">
    <BaseItem :key="index">
      <i :class="option.icon"></i> {{ option.text }}
    </BaseItem>
  </template>
</BaseSelect>
```

