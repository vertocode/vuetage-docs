import { defineVuetageConfig } from 'vuetage'

export default defineVuetageConfig({
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
})