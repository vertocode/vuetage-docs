---
title: 'Base Autocomplete component from Vuetage library'
description: 'The BaseAutocomplete component is a great component when we have a lot of options and we need to filter them, it is a great component to use in forms, and it is very customizable.'
---

# Base Autocomplete

The BaseAutocomplete component is a great component when we have a lot of options and we need to filter them, it is a great component to use in forms, and it is very customizable.

<br>

Try to test the autocomplete component below, you can search for any state in the USA/Canada/Mexico.

::base-autocomplete{label="Search state" leftIcon="fa fa-search" use-state-options=true variant="outlined"}
::

<br>

# Model Value

The model value is a prop that we use to control the selected option in the autocomplete component. It is a two-way binding prop, so we can use it to set the initial value and to get the selected option.

<br>

```vue
<template>
  <div style="width: 400px; margin: auto; ">
    <BaseAutocomplete
        label="Model Value"
        :options="options"
        v-model="myValue"
    />
    <p>Model Value: <br><span style="font-weight: bold; color: black;">{{ myValue }}</span> </p>
  </div>
</template>

<script setup lang="ts">
import { BaseAutocomplete, GroupOption, NormalOption } from 'vuetage'

const myValue = ref<NormalOption>({ text: '', value: ''})

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

The code above shows the result that you can see below.

::base-autocomplete-with-model-value
::

<br>

# Props

## Options

The options prop is an array of objects that we use to set the options in the autocomplete component. The options prop can be an array of NormalOption or GroupOption.

<br>

### NormalOption

The NormalOption is an object with two properties, the text property that is the text that will be shown in the autocomplete component, and the value property that is the value that will be returned when the option is selected.

<br>

```ts
interface NormalOption {
  text: string
  value: string
}
```

The result of a NormalOption is shown below.

::base-autocomplete{label="Normal Option" leftIcon="fa fa-search" use-normal-options=true}
::

### GroupOption

The GroupOption is an object with two properties, the group property that is the group name that will be shown in the autocomplete component, and the items property that is an array of NormalOption.

```ts
interface GroupOption {
  group: string
  items: NormalOption[]
}
```

The result of a GroupOption is shown below.

::base-autocomplete{label="Group Option" leftIcon="fa fa-search"}
::

<br>

## Filter

There are props to control the filter of the options.

<br>

### Auto Filter

The autoFilter prop is a boolean that we use to set the filter state in the autocomplete component. When the autoFilter is false, the options will not be filtered automatically when the user types in the input.

<br>

This can be useful when you want to create a custom filter, so you can do that outside the component and pass the filtered options to the component.

<br>

The default is true.

<br>

```vue
<BaseAutocomplete label="Auto Filter" :options="options" :autoFilter="false"/>
```

::base-autocomplete{label="Auto Filter" autoFilter=false}
::

### Case Sensitive Filter

Define if we will filter considering the difference between uppercase and lowercase letters.

<br>

The default is false.

<br>

```vue
<BaseAutocomplete label="Case Sensitive Filter" :options="options" :caseSensitiveFilter="true"/>
```

::base-autocomplete{label="Case Sensitive Filter" caseSensitiveFilter=true}
::

<br>

## Variant

Variant is a prop that defines one of some predefined styles available to each case as you need.

As we are using the `BaseTextField` component under the hood, we can use the same `variant` prop values to change the style of the component.

<br>

- Default

The primary variant can be used just calling the component, this is the default value for "variant" prop.

<br>

```vue
<BaseAutocomplete label="Default" :options="options"/>
```

::base-autocomplete{label="Default"}
::

<br>

- Outlined

The outlined variant can be used with the props "variant" with value "outlined" as show below:

```vue
<BaseAutocomplete label="Outlined" :options="options" variant="outlined"/>
```

::base-autocomplete{label="Outlined" variant="outlined"}
::

<br>

- Underlined

The underlined variant can be used with the props "variant" with value "underlined" as show below:

```vue
<BaseAutocomplete label="Underlined" :options="options" variant="underlined"/>
```

::base-autocomplete{label="Underlined" variant="underlined"}
::

<br>

- Dark

The dark variant can be used with the props "variant" with value "dark" as show below:

```vue
<BaseAutocomplete label="Dark" :options="options" variant="dark"/>
```

::base-autocomplete{label="Dark" variant="dark"}
::

<br>

## Label

The label prop is a string that we use to set the label in the autocomplete component.

<br>

```vue
<BaseAutocomplete label="Label" :options="options"/>
```

::base-autocomplete{label="Label"}
::

## Loading

The loading prop is a boolean that we use to set the loading state in the autocomplete component.

<br>

```vue
<BaseAutocomplete label="Loading" :options="options" :loading="true"/>
```

::base-autocomplete{label="Loading" loading=true}
::

<br>

There are some props related to the loading state that we can use to customize the loading state.

| props            | type    | default                                            | description                                                                   |
|------------------|---------|----------------------------------------------------|-------------------------------------------------------------------------------|
| loading          | boolean | false                                              | Define if the component is in loading.                                        |
| useBorderLoading | boolean | false                                              | Define if the loading will be an spinner or border loading style.             |
| loadingColor     | string  | black                                              | Define the color of spinner or border loading.                                | 
| loadingSize      | string  | small(0.7em) for spinner or 2px for border loading | Define the size of spinner or border loading.                                 |
| disableOnLoading | boolean | false                                              | Define if when the props "loading" be true the field will be disabled or not. |
| menuLoading      | boolean | false                                              | Define if the the menu will be in loading state.                              |
| menuLoadingText  | string  | Loading more items                                 | Define the text that will be shown when the menu is in loading state.         |


## Disabled

The disabled prop is a boolean that we use to set the disabled state in the autocomplete component.

<br>

```vue
<BaseAutocomplete label="Disabled" :options="options" :disabled="true"/>
```

::base-autocomplete{label="Disabled" disabled=true}
::

<br>

## Icons

We can add icons to the input, we have 2 kinds of icons, the left icon, and the right icon. The available icons are the same that we can use in <a href="https://fontawesome.com/v4.7.0/icons/" target="_blank">font awesome</a>.
But if you have another library that adds an icon using this syntax "`<i class="icon"></i>`", you can use it passing it as a prop value.

<br>

### Left Icon

The left icon can be used with the prop "leftIcon" as shown below:

```vue
<BaseAutocomplete label="Left Icon" :options="options" leftIcon="fa fa-search"/>
```

::base-autocomplete{label="Left Icon" leftIcon="fa fa-search"}
::

### Right Icon

The right icon can be used with the prop "rightIcon" as shown below:

```vue
<BaseAutocomplete label="Right Icon" :options="options" rightIcon="fa fa-search"/>
```

::base-autocomplete{label="Right Icon" rightIcon="fa fa-search"}
::

## Styles

There are some props to help you to customize the select component.
For these props, you can use the same syntax that you use in the style of some vue component.

<br>

You can also edit the hover passing the style as an object inside the hover key, as show below.

```vue
<BaseAutocomplete
  label="Styles" 
  :options="options" 
  :inputFieldStyle="{
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

### Input Style

The inputStyle prop is an object that we use to set the style of the input in the autocomplete component.

<br>

```vue
<BaseAutocomplete
  label="Input Style" 
  :options="options" 
  :inputStyle="{ backgroundColor: '#90ee90', color: 'green' }"
/>
```

::base-autocomplete{label="Input Style" inputStyle="backgroundColor: #90ee90; color: green"}
::

### Label Style

The labelStyle prop is an object that we use to set the style of the label in the autocomplete component.

<br>

```vue
<BaseAutocomplete
  label="Label Style" 
  :options="options" 
  :labelStyle="{ backgroundColor: '#90ee90', color: 'green' }"
/>
```

::base-autocomplete{label="Label Style" labelStyle="backgroundColor: #90ee90; color: green"}
::

### Menu Style

The menuStyle prop is an object that we use to set the style of the menu in the autocomplete component.

<br>

```vue
<BaseAutocomplete
  label="Menu Style" 
  :options="options" 
  :menuStyle="{ backgroundColor: '#90ee90', color: 'green' }"
/>
```

::base-autocomplete{label="Menu Style" menuStyle="backgroundColor: #90ee90; color: green"}
::

### Item Style

The itemStyle prop is an object that we use to set the style of the items in the autocomplete component.

<br>

```vue
<BaseAutocomplete
  label="Item Style" 
  :options="options" 
  :itemStyle="{ backgroundColor: '#90ee90', color: 'green' }"
/>
```

::base-autocomplete{label="Item Style" itemStyle="backgroundColor: #90ee90; color: green"}
::

### Group Style

The groupStyle prop is an object that we use to set the style of the group in the autocomplete component.

<br>

```vue
<BaseAutocomplete
  label="Group Style" 
  :options="options" 
  :groupStyle="{ backgroundColor: '#90ee90', color: 'green' }"
/>
```

::base-autocomplete{label="Group Style" groupStyle="backgroundColor: #90ee90; color: green"}
::

### Custom Class

The customClass prop is a string that we use to set a custom class in the autocomplete component. This is useful to set custom css using tailwind, bootstrap, or other thing like that.

<br>

Maybe you need to configure something, any problem to use external css frameworks, [contact me](https://vuetage.vertocode.com/contact) or [report the issue](https://github.com/vertocode/vuetage/issues).

<br>

```vue
<BaseAutocomplete
  label="Custom Class" 
  :options="options" 
  customClass="mt-2 bg-green-200 text-green-800"
/>
```

## Events

There are 2 events that we usually will use.

<br>

- update:model-value

The modelValue event is emitted when the selected option is changed.

<br>

- input

The input event is emitted when the input value is changed. When the user is typing in the input, this event will be emitted. This can be useful to do a request to API and update the options.

<br>

- Others


<br>

## Slots

There are some slots that we can use to customize the autocomplete component.

<br>

- menu

The menu slot is used to customize the menu that is shown when the user clicks in the input. You can use the [BaseMenu](/docs/components/base-menu) component from vuetage if you want to use the same style of the autocomplete component.

<br>

- item

The item slot is used to customize the items that are shown in the menu. You can use the [BaseItem](/docs/components/base-item) component from vuetage if you want to use the same style of the autocomplete component.

<br>

- no-options

The no-options slot is used to customize the message that is shown when there are no options to show in the BaseMenu. 

<br>

- menu-loading

The menu-loading slot is used to customize the loading state of the menu.