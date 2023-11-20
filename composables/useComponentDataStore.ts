
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
                    component: 'BaseButton',
                    route: '/docs/components/buttons/base-button',
                    props: [
                        {
                            label: 'Primary',
                            route: '/docs/components/buttons/base-button/primary',
                            bind: { variant: 'primary' }
                        },
                        {
                            label: 'Outlined Primary',
                            route: '/docs/components/buttons/base-button/outlined-primary',
                            bind: { variant: 'outlined-primary' }
                        },
                        {
                            label: 'Success',
                            route: '/docs/components/buttons/base-button/success',
                            bind: { variant: 'success' }
                        },
                        {
                            label: 'Outlined Success',
                            route: '/docs/components/buttons/base-button/outlined-success',
                            bind: { variant: 'outlined-success' }
                        },
                        {
                            label: 'Danger',
                            route: '/docs/components/buttons/base-button/danger',
                            bind: { variant: 'danger' }
                        },
                        {
                            label: 'Outlined Danger',
                            route: '/docs/components/buttons/base-button/outlined-danger',
                            bind: { variant: 'outlined-danger' }
                        },
                        {
                            label: 'Dark',
                            route: '/docs/components/buttons/base-button/dark',
                            bind: { variant: 'dark' }
                        },
                        {
                            label: 'Outlined Dark',
                            route: '/docs/components/buttons/base-button/outlined-dark',
                            bind: { variant: 'outlined-dark' }
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