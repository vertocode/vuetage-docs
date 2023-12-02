export interface ComponentData {
    label: string
    description: string
    componentName: string
    route: string
    props: Prop[]
}

interface Prop {
    label: string
    hash: string
    bind: any
}