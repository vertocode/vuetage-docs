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
                    description: 'The "BaseButton" is a versatile button component that serves as a foundation for creating different button styles. It includes primary, outlined, success, danger, dark-themed, and custom-styled buttons. You can customize the size, disable the button, add a loading indicator, and include an icon.',
                    route: '/docs/components/base-button',
                    props: [
                        {
                            label: 'Primary',
                            hash: 'primary',
                            bind: { variant: 'primary' }
                        },
                        {
                            label: 'Outline Primary',
                            hash: 'outline-primary',
                            bind: { variant: 'outline-primary' }
                        },
                        {
                            label: 'Success',
                            hash: 'success',
                            bind: { variant: 'success' }
                        },
                        {
                            label: 'Outline Success',
                            hash: 'outline-success',
                            bind: { variant: 'outline-success' }
                        },
                        {
                            label: 'Danger',
                            hash: 'danger',
                            bind: { variant: 'danger' }
                        },
                        {
                            label: 'Outline Danger',
                            hash: 'outline-danger',
                            bind: { variant: 'outline-danger' }
                        },
                        {
                            label: 'Dark',
                            hash: 'dark',
                            bind: { variant: 'dark' }
                        },
                        {
                            label: 'Outline Dark',
                            hash: 'outline-dark',
                            bind: { variant: 'outline-dark' }
                        },
                        {
                            label: 'Custom Style',
                            hash: 'custom-style',
                            bind: {
                                variant: '',
                                customStyle: 'color: yellow; border-radius: 0.4em; background-color: purple;'
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
                            label: 'Small',
                            hash: 'small',
                            bind: {
                                size: 'small'
                            }
                        },
                        {
                            label: 'Medium',
                            hash: 'medium',
                            bind: {
                                size: 'medium'
                            }
                        },
                        {
                            label: 'Large',
                            hash: 'large',
                            bind: {
                                size: 'large'
                            }
                        },
                        {
                            label: 'With Icon',
                            hash: 'with-icon',
                            bind: {
                                leftIcon: 'fa fa-check',
                            }
                        },
                    ]
                }
            ]
        }
    ]

    return {
        items
    }
})