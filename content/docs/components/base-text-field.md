---
title: 'Base Text Field component from Vuetage library'
description: 'Base Text Field is a vue component useful to manage easily variants, validations, icons, and other things according to the props.'
---

# Base Text Field (In development)

## Variant

Variant is a prop that defines one of some predefined styles available to each case as you need.

<br>

- Default

The default variant can be used just calling the component, this is the default value for "variant" prop.

<br>

```vue
<BaseTextField />
```

::base-text-field{label="Default"}
::

<br>

- Outlined

The outlined variant can be used with the props "variant" with value "outlined" as show below:

```vue
<BaseTextField variant="outlined" />
```

::base-text-field{variant="outlined" label="Outlined"}
::

<br>

- Underlined

The underlined variant can be used with the props "variant" with value "underlined" as show below:

```vue
<BaseTextField variant="underlined" />
```

::base-text-field{variant="underlined" label="Underlined"}
::

<br>

- Dark

The dark variant can be used with the props "variant" with value "dark" as show below:

```vue
<BaseTextField variant="dark" />
```

::base-text-field{variant="dark" label="Dark"}
::

<br>

## Loading

There are 2 kinds of loading; the spinner loading, and border loading.

<br>

- Spinner (Default)

```vue
<BaseTextField :loading="true" />
```

::base-text-field{loading="true" label="Loading"}
::

<br>

- Border Loading

```vue
<BaseTextField :loading="true" use-border-loading />
```

::base-text-field{loading="true" label="Loading" useBorderLoading="true"}
::

<br>