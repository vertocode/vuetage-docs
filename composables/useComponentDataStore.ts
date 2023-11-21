
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
                    component: 'button',
                    route: '/docs/components/buttons/base-button',
                    props: [
                        {
                            label: 'Primary',
                            route: '/docs/components/buttons/base-button/primary',
                            bind: { variant: 'primary' }
                        },
                        {
                            label: 'Outline Primary',
                            route: '/docs/components/buttons/base-button/outline-primary',
                            bind: { variant: 'outline-primary' }
                        },
                        {
                            label: 'Success',
                            route: '/docs/components/buttons/base-button/success',
                            bind: { variant: 'success' }
                        },
                        {
                            label: 'Outline Success',
                            route: '/docs/components/buttons/base-button/outline-success',
                            bind: { variant: 'outline-success' }
                        },
                        {
                            label: 'Danger',
                            route: '/docs/components/buttons/base-button/danger',
                            bind: { variant: 'danger' }
                        },
                        {
                            label: 'Outline Danger',
                            route: '/docs/components/buttons/base-button/outline-danger',
                            bind: { variant: 'outline-danger' }
                        },
                        {
                            label: 'Dark',
                            route: '/docs/components/buttons/base-button/dark',
                            bind: { variant: 'dark' }
                        },
                        {
                            label: 'Outline Dark',
                            route: '/docs/components/buttons/base-button/outline-dark',
                            bind: { variant: 'outline-dark' }
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