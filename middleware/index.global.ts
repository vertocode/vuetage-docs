import { useComponentDataStore } from "~/composables/useComponentDataStore";

export default defineNuxtRouteMiddleware((to) => {
    const componentsData = useComponentDataStore()
    if (componentsData.value?.items?.length) {
        if (to.path.includes('/buttons')) {
            componentsData.value.items[componentsData.value.items.findIndex(item => item.category === 'button')].showComponents = true
        } else {
            componentsData.value.items[componentsData.value.items.findIndex(item => item.category === 'button')].showComponents = false
        }
    }
})
