import type { ComponentData } from '~/typing/Component'

interface ComponentDataStore {
    category: string
    route: string
    label: string
    showComponents: boolean
    allComponents: ComponentData[]
}

export const useComponentDataStore = () => useState('componentsData', () => {
    const items: ComponentDataStore[] = [
        {
            category: 'button',
            route: '/docs/components/buttons',
            label: 'Buttons',
            showComponents: false,
            allComponents: [
                {
                    label: 'Base Button',
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
                    label: 'Base Text Field',
                    componentName: 'BaseTextField',
                    description: 'The "BaseTextField" is a useful component that can help you with validations, easily change of styles, state, icons, and more.',
                    route: '/docs/components/base-text-field',
                    props: [
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
                            label: 'Variant',
                            hash: 'variant',
                            bind: {}
                        },
                        {
                            label: 'Model Value',
                            hash: 'model-value',
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
                            label: 'Required',
                            hash: 'required',
                            bind: {}
                        },
                        {
                            label: 'Styles',
                            hash: 'styles',
                            bind: {}
                        }
                    ]
                },
            ]
        }
    ]

    return {
        items
    }
})