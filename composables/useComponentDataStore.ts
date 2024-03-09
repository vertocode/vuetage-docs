import type { ComponentData } from '~/typing/Component'

export const useComponentDataStore = () => useState('componentsData', () => {
    const items: ComponentData[] = [
        {
            disabled: false,
            label: 'BaseButton',
            componentName: 'BaseButton',
            description: 'The "BaseButton" is a versatile button component that serves as a foundation for creating different button styles. You can customize it as you need using the props.',
            route: '/docs/components/base-button',
            props: [
                {
                    label: 'Variant',
                    hash: 'variant',
                    bind: {
                        variant:
                            'primary'
                            ||  'outline-primary'
                            ||  'success'
                            ||  'outline-success'
                            ||  'danger'
                            ||  'outline-danger'
                            ||  'dark'
                            ||  'outline-dark'
                    }
                },
                {
                    label: 'Custom Style',
                    hash: 'custom-style',
                    bind: {
                        variant: '',
                        customStyle: 'color: blue; background-color: yellow; border-radius: 0.2em;'
                    }
                },
                {
                    label: 'Custom Class',
                    hash: 'custom-class',
                    bind: {
                        variant: '',
                        customClass: 'custom-button'
                    }
                },
                {
                    label: 'Disabled',
                    hash: 'disabled',
                    bind: {
                        variant: 'primary',
                        disabled: true
                    }
                },
                {
                    label: 'Loading',
                    hash: 'loading',
                    bind: {
                        variant: 'primary',
                        loading: true
                    }
                },
                {
                    label: 'Size',
                    hash: 'size',
                    bind: {
                        size: 'small' || 'medium' || 'large'
                    }
                },
                {
                    label: 'With Icon',
                    hash: 'with-icon',
                    bind: {
                        leftIcon: 'fa fa-check',
                    }
                },
                {
                    label: 'Slots',
                    hash: 'slots',
                    bind: {}
                },
            ]
        },
        {
            disabled: false,
            label: 'BaseTextField',
            componentName: 'BaseTextField',
            description: 'The "BaseTextField" is a useful component that can help you with validations, easily change of styles, state, icons, and more.',
            route: '/docs/components/base-text-field',
            props: [
                {
                    label: 'Model Value',
                    hash: 'model-value',
                    bind: {}
                },
                {
                    label: 'Variant',
                    hash: 'variant',
                    bind: {}
                },
                {
                    label: 'Label',
                    hash: 'label',
                    bind: {}
                },
                {
                    label: 'Placeholder',
                    hash: 'placeholder',
                    bind: {}
                },
                {
                    label: 'Bind',
                    hash: 'bind',
                    bind: {}
                },
                {
                    label: 'Loading',
                    hash: 'loading',
                    bind: {}
                },
                {
                    label: 'Disabled',
                    hash: 'disabled',
                    bind: {}
                },
                {
                    label: 'Rules',
                    hash: 'rules',
                    bind: {}
                },
                {
                    label: 'Password',
                    hash: 'password',
                    bind: {}
                },
                {
                    label: 'Required',
                    hash: 'required',
                    bind: {}
                },
                {
                    label: 'Icons',
                    hash: 'icons',
                    bind: {}
                },
                {
                    label: 'Styles',
                    hash: 'styles',
                    bind: {}
                },
                {
                    label: 'Custom Class',
                    hash: 'custom-class',
                    bind: {}
                },
                {
                    label: 'Event Emitter',
                    hash: 'event-emitter',
                    bind: {}
                },
                {
                    label: 'Events',
                    hash: 'events',
                    bind: {}
                },
                {
                    label: 'Slots',
                    hash: 'slots',
                    bind: {}
                }
            ]
        },
        {
            disabled: false,
            label: 'BaseSelect',
            componentName: 'BaseSelect',
            description: 'The "BaseSelect" is a useful component that can help you to use a custom select, easily change of styles, state, options, and more.',
            route: '/docs/components/base-select',
            props: [
                {
                    label: 'Model Value',
                    hash: 'model-value',
                    bind: {}
                },
                {
                    label: 'Normal Options',
                    hash: 'options',
                    bind: {}
                },
                {
                    label: 'Group Options',
                    hash: 'options',
                    bind: {}
                },
                {
                    label: 'Multiple',
                    hash: 'multiple',
                    bind: {}
                },
                {
                    label: 'Variant',
                    hash: 'variant',
                    bind: {}
                },
                {
                    label: 'Close on Select',
                    hash: 'close-on-select',
                    bind: {}
                },
                {
                    label: 'Loading',
                    hash: 'loading',
                    bind: {}
                },
                {
                    label: 'Disabled',
                    hash: 'disabled',
                    bind: {}
                },
                {
                    label: 'Icons',
                    hash: 'icons',
                    bind: {}
                },
                {
                    label: 'Styles',
                    hash: 'styles',
                    bind: {}
                },
                {
                    label: 'Custom Class',
                    hash: 'custom-class',
                    bind: {}
                },
                {
                    label: 'Slots',
                    hash: 'slots',
                    bind: {}
                },
            ]
        },
        {
            label: 'BaseAutocomplete',
            componentName: 'BaseAutocomplete',
            description: 'The "BaseAutocomplete" component is a great component when we have a lot of options and we need to filter them, it is a great component to use in forms, and it is very customizable.',
            disabled: false,
            route: '/docs/components/base-autocomplete',
            props: [
                {
                    label: 'Props',
                    hash: 'props',
                    bind: {}
                },
                {
                    label: 'Events',
                    hash: 'events',
                    bind: {}
                },
                {
                    label: 'Slots',
                    hash: 'slots',
                    bind: {}
                },
            ]
        },
        {
            label: 'BaseGroup',
            componentName: 'BaseGroup',
            description: 'BaseGroup is a component that allows you to group elements with some predefined styles and props that can help you, it is been used in some components from Vuetage, and you can use to customize something that is using it as you need.',
            disabled: false,
            route: '/docs/components/base-group',
            props: [
                {
                   label: 'Title',
                   hash: 'title',
                   bind: {}
                },
                {
                    label: 'Left Icon',
                    hash: 'left-icon',
                    bind: {}
                },
                {
                    label: 'Right Icon',
                    hash: 'right-icon',
                    bind: {}
                },
                {
                    label: 'Custom Style',
                    hash: 'custom-style',
                    bind: {}
                },
                {
                    label: 'Custom Class',
                    hash: 'custom-class',
                    bind: {}
                },
                {
                    label: 'Slots',
                    hash: 'slots',
                    bind: {}
                }
            ]
        },
        {
            label: 'BaseItem',
            componentName: 'BaseItem',
            description: 'BaseItem is a component that allows you to define item(s) with some predefined styles and props that can help you, it is been used in some components from Vuetage, and you can use to customize something that is using it as you need.',
            disabled: false,
            route: '/docs/components/base-item',
            props: [
                {
                    label: 'Active',
                    hash: 'active',
                    bind: {}
                },
                {
                    label: 'Active Text Color',
                    hash: 'active-text-color',
                    bind: {}
                },
                {
                    label: 'Active Background Color',
                    hash: 'active-background-color',
                    bind: {}
                },
                {
                    label: 'Cursor',
                    hash: 'cursor',
                    bind: {}
                },
                {
                    label: 'Left Icon',
                    hash: 'left-icon',
                    bind: {}
                },
                {
                    label: 'Right Icon',
                    hash: 'right-icon',
                    bind: {}
                },
                {
                    label: 'Custom Style',
                    hash: 'custom-style',
                    bind: {}
                },
                {
                    label: 'Custom Class',
                    hash: 'custom-class',
                    bind: {}
                },
                {
                    label: 'Slots',
                    hash: 'slots',
                    bind: {}
                }
            ]
        },
        {
            label: 'BaseMenu',
            componentName: 'BaseMenu',
            description: 'BaseMenu is a component that allows you to define a menu with some predefined styles and props that can help you, it is been used in some components from Vuetage, and you can use to customize something that is using it as you need.',
            disabled: false,
            route: '/docs/components/base-menu',
            props: [
                {
                    label: 'Introduction',
                    hash: 'introduction',
                    bind: {}
                },
                {
                    label: 'Props',
                    hash: 'props',
                    bind: {}
                },
                {
                    label: 'Slots',
                    hash: 'slots',
                    bind: {}
                },
                {
                    label: 'Events',
                    hash: 'events',
                    bind: {}
                }
            ]
        },
        {
            label: 'BaseCheckbox (Labs)',
            componentName: 'BaseCheckbox',
            description: '',
            disabled: true,
            route: '/docs/components/base-checkbox',
            props: []
        },
        {
            label: 'BaseSwitch (Labs)',
            componentName: 'BaseSwitch',
            description: '',
            disabled: true,
            route: '/docs/components/base-switch',
            props: []
        },
        {
            label: 'BaseRadio (Labs)',
            componentName: 'BaseRadio',
            description: '',
            disabled: true,
            route: '/docs/components/base-radio',
            props: []
        },
        {
            label: 'BaseSpan (Labs)',
            componentName: 'BaseSpan',
            description: '',
            disabled: true,
            route: '/docs/components/base-span',
            props: []
        },
        {
            label: 'BaseTooltip (Labs)',
            componentName: 'BaseSpan',
            description: '',
            disabled: true,
            route: '/docs/components/base-tooltip',
            props: []
        },
        {
            label: 'BaseChip (Labs)',
            componentName: 'BaseChip',
            description: '',
            disabled: true,
            route: '/docs/components/base-chip',
            props: []
        },
        {
            label: 'BaseModal (Labs)',
            componentName: 'BaseModal',
            description: '',
            disabled: true,
            route: '/docs/components/base-modal',
            props: []
        },
        {
            label: 'BaseCard (Labs)',
            componentName: 'BaseCard',
            description: '',
            disabled: true,
            route: '/docs/components/base-card',
            props: []
        },
        {
            label: 'BaseCodeWriter (Labs)',
            componentName: 'BaseCodeWriter',
            description: '',
            disabled: true,
            route: '/docs/components/base-code-writer',
            props: []
        },
    ]

    return {
        items
    }
})