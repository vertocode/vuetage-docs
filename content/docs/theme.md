# Theme Configuration

In this page we will see how to configure the theme of Vuetage library in your project.

<br>

## Configuration file

To configure the theme of Vuetage library, we need to create a configuration file depending on the bundler that you are using.

<br>

### [Nuxt.js](https://nuxt.com/)

Create a file in the "plugins" folder with the name "vuetage.{js|ts}" and add the following code:

```js
// ~/plugins/vuetage.ts | ~/src/plugins/vuetage.ts
import { defineVuetageConfig } from 'vuetage'

export default defineNuxtPlugin((nuxtApp) => defineVuetageConfig({
    theme: {
        variables: {
            // We can change any variable that vuetage uses here, below is just an example with some variables.
            // == Colors ==
            primary_color: '#FF5722',
            primary_color_hover: '#FF7043',
            error_color: '#F44336',
            disabled_color: '#BDBDBD',

            // == Sizes ==
            size_tiny_1x: '8px',
            size_tiny_2x: '16px',
            size_small_1x: '24px',

            // ...We can change any variable that we want, if not defined will use the default values.
        }
    },
}))
```

After this, if you take a look in "BaseButton" you can see that it has the color and radius(size that we changed) that we defined in the configuration file. (#FF5722)

<br>

<img style="margin: auto" src="https://i.imgur.com/R96qEf8.png" alt="vuetage">