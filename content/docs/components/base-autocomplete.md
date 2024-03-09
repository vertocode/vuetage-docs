---
title: 'Base Autocomplete component from Vuetage library'
description: 'The BaseAutocomplete component is a great component when we have a lot of options and we need to filter them, it is a great component to use in forms, and it is very customizable.'
---

# Base Autocomplete

The BaseAutocomplete component is a great component when we have a lot of options and we need to filter them, it is a great component to use in forms, and it is very customizable.

<br>

::base-autocomplete-with-model-value
::

<br>

## Props

| Prop               | Type                                       | Default               | Description                                                                                               |
|---------------------|--------------------------------------------|-----------------------|-----------------------------------------------------------------------------------------------------------|
| options             | `Array<NormalOption | GroupOption>`        | -                     | An array of options to be displayed in the autocomplete menu. Each option should have a `text` property representing the display text.                             |
| label               | `string`                                   | -                     | Label text for the autocomplete field.                                                                    |
| autoFilter          | `boolean`                                  | `true`                | Enables or disables automatic filtering of options based on user input.                                   |
| caseSensitiveFilter | `boolean`                                  | `true`                | Enables or disables case-sensitive filtering of options.                                                   |
| multiple            | `boolean`                                  | `false`               | Allows selecting multiple options.                                                                        |
| menuLoading         | `boolean`                                  | `false`               | Indicates whether the menu is in a loading state.                                                          |
| menuLoadingText     | `string`                                   | `'Loading more items'`| Custom loading text to display when the menu is in a loading state.                                        |
| inputFieldStyle     | `object` or `string`                       | -                     | Style object or CSS string to be applied to the input field of the autocomplete.                           |
| inputStyle          | `object` or `string`                       | -                     | Style object or CSS string to be applied to the input element of the autocomplete.                          |
| labelStyle          | `object` or `string`                       | -                     | Style object or CSS string to be applied to the label of the autocomplete.                                  |
| menuStyle           | `object` or `string`                       | -                     | Style object or CSS string to be applied to the autocomplete menu.                                         |
| groupStyle          | `object` or `string`                       | -                     | Style object or CSS string to be applied to the groups in the autocomplete menu.                            |
| itemStyle           | `object` or `string`                       | -                     | Style object or CSS string to be applied to the items in the autocomplete menu.                             |

## Events

| Event                | Payload               | Description                                              |
|----------------------|-----------------------|----------------------------------------------------------|
| update:modelValue    | `NormalOption`        | Emitted when an option is selected, updating the model value. |
| input                | `string`              | Emitted when the input value changes.                     |


## Slots

| Slot Name         | Props                                          | Description                                              |
|-------------------|------------------------------------------------|----------------------------------------------------------|
| Default           | -                                              | The default slot includes the `BaseTextField` component. |
| menu              | -                                              | The slot for defining the content of the autocomplete menu. It includes the `BaseMenu` component with sub-slots for `item`, `no-options`, and `menu-loading`. |
| item              | `{ option: NormalOption | GroupOption, index: number }` | Customize the appearance of each item in the autocomplete menu. |
| no-options        | -                                              | Displayed when there are no matching options, providing a message and an optional clear button. |
| menu-loading      | -                                              | Displayed when the menu is in a loading state, showing a loading message and spinner. |