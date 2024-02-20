---
title: 'Base Group component from Vuetage library'
description: 'BaseGroup is a component that allows you to group elements with some predefined styles and props that can help you, it is been used in some components from Vuetage, and you can use to customize something that is using it as you need.'
---

# Base Group

BaseGroup is a component that allows you to group elements with some predefined styles and props that can help you, it is used in some components from Vuetage like BaseSelect, and you can use to customize something that is using it as you need.

<br>

It can be useful, for example, when you want to group some items, it is very good to combine with the `BaseItem` component, also it can be used as a slot in BaseSelect to change the menu using this slot.

<br>

::base-group{rightIcon="fa fa-fire" customStyle="backgroundColor: #90ee90; color: green; borderRadius: 10px; display: flex; justify-content:center;"}
::

<br>

## Title

This prop will define the title of component, usually we use it to define the title of the group.

For example, we can use it to define as "TO DO" in a list of tasks.

```vue
<BaseGroup title="TO DO">
  <BaseItem>Task 1</BaseItem>
  <BaseItem active>Task 2</BaseItem>
  <BaseItem>Task 3</BaseItem>
</BaseGroup>
```

::base-group{title="TO DO" useTodo=true}
::

## Left Icon

This prop is used to define the icon that will be placed on the left of the title.

```vue
<BaseGroup title="TO DO" left-icon="fa fa-check">
  <BaseItem>Task 1</BaseItem>
  <BaseItem active>Task 2</BaseItem>
  <BaseItem>Task 3</BaseItem>
</BaseGroup>
```

::base-group{title="TO DO" left-icon="fa fa-check" useTodo=true}
::

## Right Icon

This prop is used to define the icon that will be placed on the right of the title.

```vue
<BaseGroup title="TO DO" right-icon="fa fa-check">
  <BaseItem>Task 1</BaseItem>
  <BaseItem active>Task 2</BaseItem>
  <BaseItem>Task 3</BaseItem>
</BaseGroup>
```

<br>

::base-group{title="TO DO" rightIcon="fa fa-check" useTodo=true}
::

## Custom Style

This prop is very useful to modify any style of this component.

```vue
<BaseGroup title="TO DO" :custom-style="{ backgroundColor: '#90ee90', color: 'green' }">
  <BaseItem>Task 1</BaseItem>
  <BaseItem active>Task 2</BaseItem>
  <BaseItem>Task 3</BaseItem>
</BaseGroup>
```

::base-group{title="TO DO" customStyle="backgroundColor: #90ee90; color: green" useTodo=true}
::

### Custom Class

We can use the custom class to add some style with tailwind css, for example.

```vue
<BaseGroup title="TO DO" custom-class="px-10 bg-blue-50 text-blue-400">
  <BaseItem>Task 1</BaseItem>
  <BaseItem active>Task 2</BaseItem>
  <BaseItem>Task 3</BaseItem>
</BaseGroup>
```

## Slots

There are 2 slots:

- Title: You can use it to customize the title of the group.

```vue
<BaseGroup>
    <template #title>
        <h1>TO DO</h1>
    </template>
    <BaseItem>Task 1</BaseItem>
    <BaseItem active>Task 2</BaseItem>
    <BaseItem>Task 3</BaseItem>
</BaseGroup>
```

- Default: You can use it to add items or anything else that you want.

```vue
<BaseGroup title="TO DO">
    <BaseItem>Task 1</BaseItem>
    <BaseItem active>Task 2</BaseItem>
    <BaseItem>Task 3</BaseItem>
</BaseGroup>
```