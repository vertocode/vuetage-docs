type Store = {
    showSidebar: Ref<boolean>
    showHeader: Ref<boolean>
}

export const useGeneralStore = () => useState('generalStore', (): Store => {
    const showSidebar = ref(true)
    const showHeader = ref(true)

    return {
        showSidebar,
        showHeader
    }
})