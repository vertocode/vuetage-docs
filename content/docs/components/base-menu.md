---
title: 'Base Menu component from Vuetage library'
description: 'BaseMenu is a component that allows you to create a menu with some predefined styles and props that can help you, it is been used in some components from Vuetage, and you can use to customize something that is using it as you need.'
---

# Base Menu

BaseMenu is a component that allows you to create a menu with some predefined styles and props that can help you, it is used in some components from Vuetage like [BaseSelect](/docs/components/base-select), and you can use to customize something that is using it as you need.

<br>

You can combine with other components, in BaseSelect component, for example, it's been used with BaseGroup and BaseItems to create a list of options in this menu. But feel free to use it as you need.

<br>

::base-menu{title="Movies" custom-class="px-10 bg-blue-50 text-blue-400" closeIcon="fa fa-window-close" leftIcon="fa fa-fire" showCloseButton=true}
::

<br>

## Introduction

This BaseMenu component has the [absolute position](https://developer.mozilla.org/en-US/docs/Web/CSS/position), so you need to define it with a relative position in the parent element.

<br>

For example, you can add a button to show the menu when you click on it, and you can use the `show` prop to show or hide the menu.

```vue
<template>
  <div class="relative">
    <BaseButton @click="showMenu = !showMenu">Show Menu</BaseButton>
    <BaseMenu :show="showMenu">
      <BaseItem>Option 1</BaseItem>
      <BaseItem>Option 2</BaseItem>
      <BaseItem>Option 3</BaseItem>
    </BaseMenu>
  </div>
</template>

<script setup lang="ts">
import { BaseMenu, BaseItem, BaseButton } from 'vuetage'
import { ref } from 'vue'

const showMenu = ref<boolean>(false)
</script>
```

Result:

::base-menu-with-button
::

<br>

## Props

| Prop            | Type        | Default                      | Description                                                           |
|-----------------|-------------|------------------------------|-----------------------------------------------------------------------|
| show            | Boolean     | false                        | Show or hide the menu                                                 |
| title           | String      | null                         | Title that will appear in the menu                                    |
| closeIcon       | String      | fa fa-times                  | Icon to close the menu                                                |
| showCloseIcon   | String      | false                        | Define if the close menu will appear                                  |
| leftIcon        | String      | fa fa-arrow-left             | Icon to show in the left of the title                                 |
| rightIcon       | String      | fa fa-arrow-left             | Icon to show in the right of the title                                |
| showCloseButton | Boolean     | false                        | Show or hide the close button                                         |
| backgroundColor | String      | #fff                         | Define the background color of menu                                   |
| top             | String      | null                         | Define the top style of menu                                          |
| left            | String      | 0                            | Define the left style of menu                                         |
| right           | String      | 0                            | Define the right style of menu                                        |
| bottom          | String      | null                         | Define the bottom style of menu                                       |
| borderColor     | String      | #eaeaea                      | Define the border color style of menu                                 |
| zIndex          | String      | 100                          | Define the z-index style of menu                                      |
| maxHeight       | String      | 200px                        | Define the max-height style of menu                                   |
| boxShadow       | String      | 0 2px 5px rgba(0, 0, 0, 0.1) | Define the box-shadow style of menu                                   |
| customClass     | String      | null                         | Define classes in base menu, you can use to apply some tailwind style |
| customStyle     | CustomStyle | null                         | Define custom styles in base menu, you can use to apply any style     |


## Slots

| Slot        | Description                     |
|-------------|---------------------------------|
| default     | Content of the menu             |
| title       | Change the title                |
| closeButton | Change the close button content |


## Events

| Event    | Description                     |
|----------|---------------------------------|
| close    | Emit when click on close button |
