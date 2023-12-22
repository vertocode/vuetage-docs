type Store = {
    showSidebar: Ref<boolean>
    showHeader: Ref<boolean>
    showNavbarControl: Ref<boolean>
}

export const useGeneralStore = () => useState('generalStore', (): Store => {
    const showSidebar = ref(true)
    const showHeader = ref(true)
    const showNavbarControl = ref(true)

    return {
        showSidebar,
        showHeader,
        showNavbarControl
    }
})