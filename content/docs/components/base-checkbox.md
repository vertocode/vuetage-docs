---
title: 'Base Checkbox component from Vuetage library'
description: 'BaseCheckbox is a customizable checkbox component that allows you to use predefined styles or use your own styles to create a new checkbox easily with ready states to use.'
---

# Base Checkbox

BaseCheckbox is a customizable checkbox component that allows you to use predefined styles or use your own styles to create a new checkbox easily with ready states to use.

<br>

## Props

### DefaultChecked

Basically you can control if the checkbox starts checked or not by using the `defaultChecked` prop. This prop is a boolean and the default value is `false`.

```vue
<BaseCheckbox defaultChecked />
```

### Color

There are some predefined colors that you can use to style the checkbox easily. The available colors are:

```vue
<BaseCheckbox color="primary" />
```

::div{style="display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 24px"}
    ::base-checkbox{code="primary"}
    ::
    ::base-checkbox{code="success" color="success"}
    ::
    ::base-checkbox{code="danger" color="danger"}
    ::
    ::base-checkbox{code="warning" color="warning"}
    ::
    ::base-checkbox{code="info" color="info"}
    ::
    ::base-checkbox{code="dark" color="dark"}
    ::
    ::base-checkbox{code="light" color="light"}
    ::
::
::

<br>

If you don't find the color you want, you can use the `variantColor`, `bgHoverColor`, and `checkColor` props to customize the checkbox as you want. Look an example below:

```vue
<BaseCheckbox
    variantColor="purple"
    bgHoverColor="#800080"
    checkColor="#D8BFD8"
/>
```

::base-checkbox{variantColor="purple" bgHoverColor="#800080" checkColor="#D8BFD8"}
::

<br>

### Size

You can control the size of the checkbox using the `size` prop. The available sizes are:

```vue
<BaseCheckbox size="small" />
```

::div{style="display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 24px"}
    ::base-checkbox{code="small" size="small"}
    ::
    ::base-checkbox{code="medium"}
    ::
    ::base-checkbox{code="large" size="large"}
::

<br>

If you want to use a custom size, you can use the `size` prop with the value in pixels, rem, em, etc.

```vue
<BaseCheckbox size="100px" />
```

::base-checkbox{code="100px" size="100px"}
::

<br>

Look that the check icon keeps the same size... you can customize it using the `checkIconClass` with sizes from "font-awesome-icons" that the check is being used. ([Sizing Icons](https://docs.fontawesome.com/web/style/size))

```vue
<BaseCheckbox size="100px" checkIconClass="fa-5x" />
```

::base-checkbox{code="100px + fa-5x" size="100px" checkIconClass="fa-5x"}
::

<br>

Other way to customize the size of the check icon is using the slot `checkIcon` creating yourself icon and styles. You can see an example about it in the [slots](#slots) section.

<br>

### Disabled

You can disable the checkbox using the `disabled` prop. The default value is `false`.

```vue
<BaseCheckbox disabled />
```

::base-checkbox{code="disabled" disabled}
::

<br>

### Label

You can add a label to the checkbox using the `label` prop. The default value is an empty string.

```vue
<BaseCheckbox label="Label" />
```

::base-checkbox{code="Label" label="Label"}
::

<br>
<br>

### Events

The BaseCheckbox component emits the following events:

<br>

- `checked`: Emitting the value of the checkbox as a boolean when the checkbox is checked or unchecked
- `key`: Emitting the value of the checkbox as a string when the checkbox is checked or unchecked
- `change`: Native change event from the input checkbox
- `click`: Native click event from the input checkbox
- `focus`: Native focus event from the input checkbox
- `focusout`: Native focusout event from the input checkbox
- `keydown`: Native keydown event from the input checkbox
- `keyup`: Native keyup event from the input checkbox
- `mousedown`: Native mousedown event from the input checkbox
- `mouseup`: Native mouseup event from the input checkbox
- `mouseover`: Native mouseover event from the input checkbox
- `mouseout`: Native mouseout event from the input checkbox
- `mouseenter`: Native mouseenter event from the input checkbox
- `mouseleave`: Native mouseleave event from the input checkbox

```vue
<BaseCheckbox
    @change="onChange"
    @checked="onChecked"
    @key="onKey"
/>
```

Need other events? You can [contact me](/contact) or [contribute](/docs/contribute).

<br>

### Slots

You can customize the checkbox using the slots `checkmark`, `label`, and `checkIcon`.

<br>

#### checkmark

You can customize the checkmark using the `checkmark` slot. This slot is a scoped slot that receives the `checked` prop as a boolean.

<br>

```vue
<BaseCheckbox defaultChecked>
    <template #checkmark="{ checked }">
        <span>{{ checked ? '✅' : '❌' }}</span>
    </template>
</BaseCheckbox>
```

::base-checkbox-checkmark
::

<br>

#### label

You can customize the label using the `label` slot. This slot is a scoped slot that receives the `checked` prop as a boolean.

<br>

```vue
<BaseCheckbox defaultChecked>
    <template #label="{ checked }">
        <span>{{ checked ? 'Checked' : 'Unchecked' }}</span>
    </template>
</BaseCheckbox>
```

<br>

#### checkIcon

You can customize the check icon using the `checkIcon` slot. This slot is a scoped slot that receives the `checked` prop as a boolean.

<br>

```vue
<BaseCheckbox defaultChecked>
    <template #checkIcon="{ checked }">
        <i :class="checked ? 'fas fa-check' : 'fas fa-times'"></i>
    </template>
</BaseCheckbox>
```

<br>




