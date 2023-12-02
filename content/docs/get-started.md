---
title: 'Get Started with Vuetage library'
description: 'Vuetage is a library of custom Vue components designed to simplify and enhance the web development experience for frontend developers. This library is open source, and anyone with good intentions can contribute new components and fix possible bugs.'
---

# Introduction

Vuetage is a library of custom Vue components designed to simplify and enhance the web development experience for frontend developers. This library is open source, and anyone with good intentions can contribute new components and fix possible bugs.

![Vuetage](https://i.imgur.com/AjWJlr9.png)

[![npm version](https://badgen.net/npm/v/vuetage?color=blue)](https://npm.im/vuetage)
[![npm downloads](https://badgen.net/npm/dw/vuetage?color=blue)](https://npm.im/vuetage)
[![typescript types](https://badgen.net/npm/types/tslib)](https://npm.im/vuetage)
[![minzip size](https://badgen.net/bundlephobia/minzip/vuetage?color=blue)](https://bundlephobia.com/result?p=vuetage)
[![license](https://badgen.net/npm/license/vuetage)](https://npm.im/vuetage)

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


