import { create } from 'zustand'

export interface IPlans {
    menuIsOpen: boolean;
}

const stateDefault: IPlans = {
    menuIsOpen: false,
}

type Store = {
    data: IPlans
    fnOnChange: (field: keyof IPlans, value: any) => void
    fnReset: () => void
}

const actionStore = create<Store>((set) => ({
    data: { ...stateDefault },
    fnOnChange: async (field, value) => {
        set((state) => {
            const newData = { ...state.data, [field]: value }
            return { data: newData }
        })
    },
    fnReset: () => {
        set(() => {
            return { data: stateDefault }
        })
    }
}))

export { actionStore };