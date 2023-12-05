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

You can install the Vuetage library using your package manager as shown above.

```bash
npm install --save-dev vuetage
```

# Usage

To use the components, simply import them. For example, to use the BaseButton component, import it as shown below.

```javascript
import { BaseButton } from 'vuetage'
```

# Full example

```vue
<template>
  <BaseButton variant="success" :loading="isLoading" :disabled="isDisabled">
    Pay
  </BaseButton>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BaseButton } from 'vuetage'

const isLoading = ref(false)
const isDisabled = ref(false)
</script>
```


