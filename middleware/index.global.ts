import { useComponentDataStore } from "~/composables/useComponentDataStore";

export default defineNuxtRouteMiddleware((to) => {
    console.log(to)
    const componentsData = useComponentDataStore()
    console.log(componentsData.value)
    if (componentsData.value?.items?.length) {
        console.log('entrou')
        if (to.path.includes('/buttons')) {
            componentsData.value.items[componentsData.value.items.findIndex(item => item.category === 'button')].showComponents = true
        } else {
            componentsData.value.items[componentsData.value.items.findIndex(item => item.category === 'button')].showComponents = false
        }
    }
})
