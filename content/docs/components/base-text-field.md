---
title: 'Base Text Field component from Vuetage library'
description: 'Base Text Field is a vue component useful to manage easily variants, validations, icons, and other things according to the props.'
---

# Base Text Field (In development)

Base Text Field is a vue component useful to manage easily variants, validations, icons, and other things according to the props.

<br>

::base-text-field{ height="1.9em" margin="auto" modelValue="vuetage" label="Base Text Field" placeholder="Type your text" variant="underlined" left-icon="fa fa-fire" right-icon="fa fa-check" use-border-loading use-rules}
::

# Model Value

We can easily control the value of input passing some "ref" as a v-model. See the example below:

> #### Note (Important)
> 
> The v-model property is the only required property of this component, if you don't define and try to use it, it will cause an error
> in the application.


```vue
<template>
  <main>
    <BaseTextField v-model="myValue" label="Model Value" variant="outlined"/>
    <p>Model Value: <br><span class="bold">{{ myValue }}</span></p>
  </main>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { BaseTextField } from 'vuetage'

  const myValue = ref('Hello World')
</script>
```
::base-text-field-with-model-value{label="Model Value" variant="underlined"}
::

<br>

The model value is updated using "input" event per default, if you want to change it to "change" or "blur" event, you can pass it as a value
using the props [eventEmitter](#event-emitter).

<br>

<h1> <a href="https://vuejs.org/guide/components/props.html" target="_blank">
Props
</a> </h1>

## Variant

Variant is a prop that defines one of some predefined styles available to each case as you need.

<br>

- Default

The default variant can be used just calling the component, this is the default value for "variant" prop.

<br>

```vue
<BaseTextField v-model="myValue" />
```

::base-text-field{label="Default"}
::

<br>

- Outlined

The outlined variant can be used with the props "variant" with value "outlined" as show below:

```vue
<BaseTextField v-model="myValue" variant="outlined" />
```

::base-text-field{variant="outlined" label="Outlined"}
::

<br>

- Underlined

The underlined variant can be used with the props "variant" with value "underlined" as show below:

```vue
<BaseTextField v-model="myValue" variant="underlined" />
```

::base-text-field{variant="underlined" label="Underlined"}
::

<br>

- Dark

The dark variant can be used with the props "variant" with value "dark" as show below:

```vue
<BaseTextField v-model="myValue" variant="dark" />
```

::base-text-field{variant="dark" label="Dark"}
::

<br>

## Label

Basically define some label for the input.

```vue
<BaseTextField v-model="myValue" label="Label" />
```

::base-text-field{label="Label"}
::

<br>

## Placeholder

Basically define some placeholder for the input.

```vue
<BaseTextField v-model="myValue" placeholder="Type your text" />
```

::base-text-field{label="Focus to see placeholder" placeholder="Type your text"}
::


<br>

## Bind

Basically, we have a props to allow you to pass any attribute to the input. If you pass the attribute directly without using this props,
probably the attribute will appear in the parent element if you look in the DOM, for this reason we have this prop to allow you to put
attributes directly in the input.

As this component is using the classic "input", we can add any attribute as show in [MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input).

```vue
<BaseTextField v-model="myValue" :bind="{ autofocus: true }" />
```

## Loading

There are 2 kinds of loading; the spinner loading, and border loading.

<br>

- Spinner (Default)

```vue
<BaseTextField v-model="myValue" :loading="true" />
```

::base-text-field{:loading="true" label="Loading" loadingSize="20px"}
::

<br>

- Border Loading

```vue
<BaseTextField v-model="myValue" :loading="true" use-border-loading />
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
<BaseTextField v-model="myValue" :disabled="true" />
```

::base-text-field{:disabled="true" label="Disabled"}
::

<br>

## Readonly

Control the readonly state of the component.

```vue
<BaseTextField v-model="myValue" :readonly="true" />
```

::base-text-field{:readonly="true" label="Readonly"}
::

<br>

## Password

This boolean prop defines if the base text field has the "password" type, it will apply a eye icon to show or hide the password.

```vue
<BaseTextField password v-model="myValue" :min-length="5" :max-length="20" label="true" />
```

::base-text-field{:max-length="20" :min-length="5" label="Password" :password="true"}
::

## Rules

We can add any validation in our BaseTextField component using the rules.

<br>

The prop "rules" is the principal prop to add validations; we can add any rule using this props.

For example, if we want to check if the text includes the text "vuetage", we could add the following code:

```vue
<template>
  <BaseTextField v-model="myValue" :rules="rules" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BaseTextField } from 'vuetage'

const myValue = ref(null)
const rules = [
    // Look that we can use the model value as param to add the validation.
    (value) => value.includes(value) || `The text "${value}" should include the word "vuetage".`
]
</script>
```

::base-text-field{:use-rules="true" label="Should include vuetage word"}
::

Type should be an array of function that will return a boolean or string.
If the returned value is "true" the input is valid, else if the returned value is "false" the input is invalid and
will just show the red border color, else if the returned value is a string the input is invalid
and will show this string as an error message.

<br>

## Predefined Rules

### Required

A predefined rule, and **attribute** to use, it indicates that the input should contain a value, otherwise will show an error message.
It also affect as an required field when we use inside a form.

```vue
<BaseTextField v-model="myValue" required />
```

You can test it by clicking on the input, and then cause the blur event. Or type any value and after clear it.
::base-text-field{:required="true" label="Required"}
::

<br>

### Max Length

A predefined rule that is available for usage, it is useful to define the max length of input.


```vue
<BaseTextField v-model="myValue" :max-length="5" />
```

You can test the input below typing any word with more than 5 characters.

::base-text-field{:max-length="5" label="Max Length 5"}
::

<br>

### Min Length

The same thing that "MaxLength" props, but for control minLength of characters.

```vue
<BaseTextField v-model="myValue" :min-length="5" />
```

You can test the input below typing any word with less than 5 characters.

::base-text-field{:min-length="5" label="Min Length 5"}
::

<br>

## Styles 

There are some ways to modify the input as you need.

<br>

### Width

This is a prop to modify the width of input. You can specify any width following the CSS rules.

```vue
<BaseTextField v-model="myValue" width="500px" />
```

::base-text-field{:width="500px" label="Custom Width"}
::

<br>

### Height

This is a prop to modify the height of input. You can specify any height following the CSS rules.

```vue
<BaseTextField v-model="myValue" height="100px" />
```

::base-text-field{:height="100px" label="Custom Height"}
::

<br>

### Custom Style

This is a prop to modify any style of input inside a component. The syntax is the same that we can use in
<a href="https://vuejs.org/style-guide/rules-strongly-recommended.html#quoted-attribute-values" target="_blank">
vue.js template
</a>.

```vue
<BaseTextField v-model="myValue" custom-style="background-color: yellow;" />
```

::base-text-field{custom-style="background-color: yellow;" label="Custom Style"}
::

<br>

### Custom Style Label

This is a prop to modify any style of label inside a component. The syntax is the same that we can use in <a href="https://vuejs.org/style-guide/rules-strongly-recommended.html#quoted-attribute-values" target="_blank">
vue.js template
</a>.

```vue
<BaseTextField v-model="myValue" custom-style-label="color: blue;" />
```

::base-text-field{custom-style-label="color: blue;" label="Blue Label"}
::

<br>

### Style

This is a prop that will affect the parent element, the field. It works as the "Custom Style", and "Custom Style Label", but for the field.

<br>

## Event emitter

This is a useful prop to change the update model event, the ref value that you should pass as a "v-model" will be updated
using this event, the default value is "input". You also have the option to use the "change" or "blur" event instead of input.

```vue
<BaseTextField v-model="myValue" event-emitter="blur" max-length="5" />
```

::base-text-field-with-model-value{max-length="5" label="Blur to update" event-emitter="blur"}
::