---
title: 'Base Button component from Vuetage library'
description: 'Base Button is a simple component to use; there are some predefined variants to choose to each case, variants to symbol an error, warning, and more.
In addition, we can modify the style of button using custom-class or custom-styles.'
---

# Base Button

Base Button is a simple component to use; there are some predefined variants to choose to each case, variants to symbol an error, warning, and more.
In addition, we can modify the style of button using custom-class or custom-styles.

<br>

## Variant

Variant is a prop that defines one of some predefined styles available to each case as you need.

<br>

- Primary

The primary variant can be used just calling the component, this is the default value for "variant" props:

<br>

```vue
<BaseButton>Primary</BaseButton>
```

::base-button
Primary
::

<br>

- Outline Primary

The outline primary variant can be used with the props "variant" with value "outline-primary" as show below:

```vue
<BaseButton variant="outline-primary">Outline Primary</BaseButton>
```

::base-button{variant="outline-primary"}
Outline Primary
::

<br>

- Success

The success variant can be used with the props "variant" with value "success" as show below:

```vue
<BaseButton variant="success">Success</BaseButton>
```

::base-button{variant="success"}
Success
::

<br>

- Outline Success

The outline success variant can be used with the props "variant" with value "outline-success" as show below:

```vue
<BaseButton variant="outline-success">Outline Success</BaseButton>
```

::base-button{variant="outline-success"}
Outline Success
::

<br>

- Danger

The success variant can be used with the props "variant" with value "danger" as show below:

```vue
<BaseButton variant="danger">Danger</BaseButton>
```

::base-button{variant="danger"}
Danger
::

<br>

- Outline Danger

The outline success variant can be used with the props "variant" with value "outline-danger" as show below:

```vue
<BaseButton variant="outline-danger">Outline Danger</BaseButton>
```

::base-button{variant="outline-danger"}
Outline Danger
::

<br>

- Dark

The success variant can be used with the props "variant" with value "dark" as show below:

```vue
<BaseButton variant="dark">Dark</BaseButton>
```

::base-button{variant="dark"}
Dark
::

<br>

- Outline Dark

The outline success variant can be used with the props "variant" with value "outline-dark" as show below:

```vue
<BaseButton variant="outline-dark">Outline Dark</BaseButton>
```

::base-button{variant="outline-dark"}
Outline Dark
::

<br>

## Custom Style

There is a prop to add custom styles in the button, you can call like the example below and add any valid css syntax as a string.

```html
<BaseButton custom-style="color: blue; background-color: yellow; border-radius: 0.2em;">Custom Style</BaseButton>
```

::base-button{custom-style="color: blue; background-color: yellow; border-radius: 0.2em;"}
Custom Style
::

<br>

## Custom Class

There is a way to edit the style of button using the Custom Style, but it's not good in cases that we want to modify a lot of things, in these cases can be better to use custom class. 
For usage of this prop, we just create styles for some class, and attribute this class as value for this props.

> Note
> We can use css frameworks like tailwind css, and bootstrap passing in this custom class. 

```html
<BaseButton custom-class="rounded-none">Custom Class</BaseButton>
```

This class is from tailwind css to remove border-radius as mentioned before. [Reference](https://tailwindcss.com/docs/border-radius)

<br>

::base-button{custom-style="border-radius: 0px;"}
Custom Class
::

<br>

## Disabled

We can control the disabled state of button using the props "disabled".

```html
<BaseButton :disabled="true">Loading</BaseButton>
```

::base-button{disabled="true"}
Disabled
::

<br>

## Loading

We can control the loading state of button using the props "loading".

```html
<BaseButton :loading="true">Loading</BaseButton>
```

::base-button{loading="true"}
Loading
::

<br>

## Size

We can use predefined sizes of button, there are 3 variants: "small", "medium', and "large".

- Small

```html
<BaseButton size="small">Small</BaseButton>
```

::base-button{size="small"}
Small
::

<br>


- Medium

```html
<BaseButton size="medium">Medium</BaseButton>
```

::base-button{size="medium"}
Medium
::

<br>


- Large

```html
<BaseButton size="large">Large</BaseButton>
```

::base-button{size="large"}
Large
::
