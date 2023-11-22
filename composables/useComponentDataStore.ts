export const useComponentDataStore = () => useState('componentsData', () => {
    const items = [
        {
            category: 'button',
            route: '/docs/components/buttons',
            label: 'Buttons',
            showComponents: false,
            allComponents: [
                {
                    label: 'Base Button',
                    componentName: 'BaseButton',
                    route: '/docs/components/buttons/base-button',
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