---
title: 'Get Started with Vuetage library'
description: 'Vuetage is a library of custom Vue components designed to simplify and enhance the web development experience for frontend developers. This library is open source, and anyone with good intentions can contribute new components and fix possible bugs.'
---

# {{ $doc.title }}

{{ $doc.description }}

<br>

<div>
  <img style="margin: auto" src="https://i.imgur.com/AjWJlr9.png" alt="vuetage">
</div>

<div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 1em;">
 <a href="https://npm.im/vuetage">
      <img src="https://badgen.net/npm/v/vuetage?color=blue" alt="npm version">
    </a>
 <a href="https://npm.im/vuetage">
      <img src="https://badgen.net/npm/dw/vuetage?color=blue" alt="npm downloads">
    </a>
 <a href="https://npm.im/vuetage">
      <img src="https://badgen.net/npm/types/tslib" alt="typescript types">
    </a>
 <a href="https://bundlephobia.com/result?p=vuetage">
      <img src="https://badgen.net/bundlephobia/minzip/vuetage?color=blue" alt="minzip size">
    </a>
 <a href="https://npm.im/vuetage">
      <img src="https://badgen.net/npm/license/vuetage" alt="license">
    </a>
</div>

# Installation

> Note (important)
>
> To use the Vuetage library, you must have installed the Vue 3 in your project. Probably you will find problems if you try to use it on Vue 2.

<br>

You can install the Vuetage library using your prefer package manager as shown below.

```bash
yarn add -D vuetage
```

# Usage

To use the components, simply import them. For example, to use the BaseButton, BaseTextField, and BaseSelect component, import it as shown below.

```javascript
import { BaseButton, BaseSelect, BaseTextField } from 'vuetage'
```

# Full example

```vue
<template>
  <form @submit.prevent style="width: 240px; margin: 2em auto;">
      <BaseTextField
          label="Name"
          placeholder="Enter your name"
          v-model="name"
      />
      <BaseTextField
          label="Email"
          placeholder="Enter your email"
          v-model="email"
      />
      <BaseSelect
          label="Country"
          :options="countries"
          v-model="country"
      />
      <BaseButton
          rightIcon="fa fa-rocket"
          size="small"
          :disabled="isDisabled"
          :loading="isLoading"
          @click="submit"
      >
        Submit form
      </BaseButton>
  </form>
</template>
```

> NOTE
>
> There are a lot of props to modify the styles of component, this is just a default, you can edit the colors, size, effects, and add custom styles as you need.

The Result of this code will be:

::form-example-get-started
::