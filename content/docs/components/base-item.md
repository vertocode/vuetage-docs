---
title: 'Base Item component from Vuetage library'
description: 'BaseItem is a component that allows you to create items with some predefined styles and props that can help you, it is been used in some components from Vuetage, and you can use to customize something that is using it as you need.'
---

# Base Item

BaseItem is a component that allows you to create items with some predefined styles and props that can help you, it is used in some components from Vuetage like BaseSelect, and you can use to customize something that is using it as you need.

<br>

It can be useful, for example, when you want to create a list of items, it is exceptional to combine with the `BaseGroup` component when we have more than a group, also it can be used as a slot in BaseSelect to change the menu using this slot.

<br>

::base-item{:active=true label="Base Item Active Customized" activeBgColor="#90ee90" activeTextColor="green"}
::
::base-item{label="Default Base Item"}
::

<br>

## Active

This prop will define the state of the item if it is active or not. There is a default style for the active state, but you can customize as you need using the class `active` or some props like [active-text-color](#active-text-color) or [active-bg-color](#active-background-color).

```vue
<BaseItem active>Active</BaseItem>
```

::base-item{label="Active" :active=true}
::

<br>

## Active Text Color

Basically it will change the text color when the item is active.

```vue
<BaseItem active activeTextColor="green">Active Text Color</BaseItem>
```

::base-item{label="Active Text Color" :active=true activeTextColor="green"}
::

<br>

## Active Background Color

Basically it will change the background color when the item is active.

```vue
<BaseItem active activeBgColor="#90ee90">Active Background Color</BaseItem>
```

::base-item{label="Active Background Color" :active=true activeBgColor="#90ee90"}
::

<br>

## Cursor

This prop will change the cursor style when the mouse is over the item.

```vue
<BaseItem cursor="help">Hover here</BaseItem>
```

::base-item{label="Hover here" cursor="help"}
::

<br>

## Left Icon

This prop will add an icon on the left of the item.

```vue
<BaseItem leftIcon="fa fa-fire">Left Icon</BaseItem>
```

::base-item{label="Left Icon" leftIcon="fa fa-fire"}
::

<br>

## Right Icon

This prop will add an icon on the right of the item.

```vue
<BaseItem rightIcon="fa fa-fire">Right Icon</BaseItem>
```

::base-item{label="Right Icon" rightIcon="fa fa-fire"}
::

<br>

## Custom Style

You can use the style prop to customize the item as you need.

```vue
<BaseItem :style="{ backgroundColor: '#90ee90', color: 'green' }">Custom Style</BaseItem>
```

::base-item{label="Custom Style" :style="backgroundColor: #90ee90; color: green"}
::

<br>

## Custom Class

We can use the custom class to add some style with tailwind css, for example.

```vue
<BaseItem custom-class="bg-blue-500 text-white">Custom Class</BaseItem>
```

<br>

## Slots

There is only one slot in the BaseItem component, and it is the default slot, you can use it to customize the content of the item as you need.

```vue
<BaseItem>
  <div>
    <h3>Custom Content</h3>
    <p>Here you can put any content that you want.</p>
  </div>
</BaseItem>
```