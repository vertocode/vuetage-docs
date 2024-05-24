---
title: 'Release Notes of Vuetage Library'
description: 'Take a look what is changing in each version of vuetage library.'
---

# Release Notes

This page contains the release notes for each version of the Vuetage library since 0.0.48 version.

<br>

This library is available on [npm](https://www.npmjs.com/package/vuetage).

<br>

<h2>
    <a href="https://www.npmjs.com/package/vuetage/v/0.0.73" target="_blank" rel="noopener noreferrer">
        v.0.0.73
    </a>
</h2>

- Fix the left position of rightIcon, leftIcon, and label according to the height set in the BaseButton component

<br>

<br>

<h2>
    <a href="https://www.npmjs.com/package/vuetage/v/0.0.72" target="_blank" rel="noopener noreferrer">
        v.0.0.72
    </a>
</h2>

- Fix the top position of rightIcon, leftIcon, and label according to the height set in the BaseButton component

<br>

<h2>
    <a href="https://www.npmjs.com/package/vuetage/v/0.0.71" target="_blank" rel="noopener noreferrer">
        v.0.0.71
    </a>
</h2>

- Add the possibility to use "BaseGroup" as a dropdown menu, and it's configured as default, but we available to disable using the new props "showDropdown" with the value "false"
- Increase the default height of Input components (it includes, BaseTextField, BaseSelect, and BaseAutocomplete)
- Decrease the default padding bottom of BaseTextField component to "underlined" variant
- Resolve the problem in BaseSelect, when we was using the variant "dark", it wasn't be passed to menu

<br>

<h2>
    <a href="https://www.npmjs.com/package/vuetage/v/0.0.70" target="_blank" rel="noopener noreferrer">
        v.0.0.70
    </a>
</h2>

- Fix of variants colors, margins, and paddings of BaseTextField component

<br>

<h2>
    <a href="https://www.npmjs.com/package/vuetage/v/0.0.68" target="_blank" rel="noopener noreferrer">
        v.0.0.68
    </a>
</h2>

- Fix the label position of BaseTextField component

<br>

<h2>
    <a href="https://www.npmjs.com/package/vuetage/v/0.0.66" target="_blank" rel="noopener noreferrer">
        v.0.0.66
    </a>
</h2>

- Fix the vModel of BaseAutocomplete, from this version we are able to set a default initial value to the field

<br>

<h2>
    <a href="https://www.npmjs.com/package/vuetage/v/0.0.65" target="_blank" rel="noopener noreferrer">
        v.0.0.65
    </a>
</h2>

- Fix the export for BaseAutocomplete component, from this version we are able to use this component

<br>

<h2>
    <a href="https://www.npmjs.com/package/vuetage/v/0.0.64" target="_blank" rel="noopener noreferrer">
        v.0.0.64
    </a>
</h2>

- Add the necessary type for BaseAutocomplete component

<br>

<h2>
    <a href="https://www.npmjs.com/package/vuetage/v/0.0.62" target="_blank" rel="noopener noreferrer">
        v.0.0.62
    </a>
</h2>

- Add [BaseAutocomplete](https://vuetage.vertocode.com/docs/components/base-autocomplete) component
- Close the menu of BaseSelect when click outside the menu
- Add new event enter, and key up/down for BaseTextField
- For `size` props from BaseButton, in addition about what we already have now we can custom sizes like for example `24px`, `2rem`, `2em`, etc.
- Fix wrong padding in BaseMenu component

<br>

<br>

<h2>
    <a href="https://www.npmjs.com/package/vuetage/v/0.0.61" target="_blank" rel="noopener noreferrer">
        v.0.0.61
    </a>
</h2>

- Fix instability with tailwindcss problem caused by version v.0.0.60

<br>

<br>

<h2>
    <a href="https://www.npmjs.com/package/vuetage/v/0.0.60" target="_blank" rel="noopener noreferrer">
        v.0.0.60 (Instable version with tailwindcss, do not use it)
    </a>
</h2>

- Fix place of customClass in BaseGroup component

<br>

<br>

<h2>
    <a href="https://www.npmjs.com/package/vuetage/v/0.0.59" target="_blank" rel="noopener noreferrer">
        v.0.0.59
    </a>
</h2>

- Add CustomClass prop to all components to give the possibility to add classes to the components from tailwindcss or custom classes
- Add the tailwindcss classes to the components

<br>

<h2>
    <a href="https://www.npmjs.com/package/vuetage/v/0.0.58" target="_blank" rel="noopener noreferrer">
        v.0.0.58
    </a>
</h2>

- Add BaseGroup component
- Add BaseItem component
- Add BaseMenu component
- Change the font-family, font-weight, and line-height globally of the library

<h2>
    <a href="https://www.npmjs.com/package/vuetage/v/0.0.57" target="_blank" rel="noopener noreferrer">
        v.0.0.57
    </a>
</h2>

- Improvement style of dark variant of the BaseTextField component.
- Fix the wrong alignment of the spinner in BaseTextField component.
- Fix the padding of text when we have left icon in the BaseTextField component.

<h2>
    <a href="https://www.npmjs.com/package/vuetage/v/0.0.56" target="_blank" rel="noopener noreferrer">
        v.0.0.56
    </a>
</h2>

- Fix the wrong alignment of the left, and right icon in the BaseTextField when there is an error message.
- Fix the wrong alignment in the spinner of the BaseButton component.

<h2>
    <a href="https://www.npmjs.com/package/vuetage/v/0.0.55" target="_blank" rel="noopener noreferrer">
        v.0.0.55
    </a>
</h2>

- Fix the wrong alignment of the left, and right icon in the BaseTextField.

<br>

<h2>
    <a href="https://www.npmjs.com/package/vuetage/v/0.0.54" target="_blank" rel="noopener noreferrer">
        v.0.0.54
    </a>
</h2>

- Fix padding-left on `BaseTextField` in an input element, the text was too close to the left border
- Add a padlock icon for `BaseButton` component when the state is `disabled` per default, you can disable it using the hideRightIcon with the same conditional passed for disabled
- Export type of props of `BaseButton`, `BaseTextField`, and `BaseSelect` components
- Export type of options of `BaseSelect` component
- Change hover color of outline variants of `BaseButton` component

<br>

<h2>
    <a href="https://www.npmjs.com/package/vuetage/v/0.0.53" target="_blank" rel="noopener noreferrer">
        v.0.0.53
    </a>
</h2>

- Add a new prop `hideRightIcon` prop for `BaseButton` component to hide the right icon
- Add a new prop `hideLeftIcon` prop for `BaseButton` component to hide the left icon
- Fix some wrong alignments in general components
- Add a type for BaseSelect (This is a problem in v.0.0.51/v.0.0.52 because, when we were importing, it is not being recognized as a component)

<br>

<h2>
    <a href="https://www.npmjs.com/package/vuetage/v/0.0.52" target="_blank" rel="noopener noreferrer">
        v.0.0.52
    </a>
</h2>

- Resolve bug: `BaseSelect` with state `disabled` is opening the menu when we click on right icon
- Add transition for a border, and background of `BaseTextField`, and `BaseSelect` components
- Add a string model for BaseSelect

<br>

<h2>
    <a href="https://www.npmjs.com/package/vuetage/v/0.0.51" target="_blank" rel="noopener noreferrer">
        v.0.0.51
    </a>
</h2>

- Added a beta [`BaseSelect`](https://vuetage.vertocode.com/docs/components/base-select) component version

<br>

<h2>
    <a href="https://www.npmjs.com/package/vuetage/v/0.0.50" target="_blank" rel="noopener noreferrer">
        v.0.0.50
    </a>
</h2>

- Fixed wrong style with the value overwriting the icon leftIcon and rightIcon when using this as a slot
- Resolved BaseTextField console warnings for wrong value passed to style props
- Improvement spinner animation to have a better user experience

<br>

<h2>
    <a href="https://www.npmjs.com/package/vuetage/v/0.0.49" target="_blank" rel="noopener noreferrer">
        v.0.0.49
    </a>
</h2>

Error version. Do not use it.

<br>

<h2>
    <a href="https://www.npmjs.com/package/vuetage/v/0.0.48" target="_blank" rel="noopener noreferrer">
        v.0.0.48
    </a>
</h2>

- Added [`BaseTextField`](https://vuetage.vertocode.com/docs/components/base-text-field) component

<br>

