// import { create } from 'zustand'

// type Store = {
//   count: number
//   inc: () => void
// }

// const useCountStore = create<Store>()((set) => ({
//   count: 1,
//   inc: () => set((state) => ({ count: state.count + 1 })),
// }))


import { create } from 'zustand'

interface CounterState {
  value: number
  increment: () => void
  decrement: () => void
}

export const useCounterStore = create<CounterState>((set) => ({
  value: 0,
  increment: () => set((state) => ({ value: state.value + 1 })),
  decrement: () => set((state) => ({ value: state.value - 1 })),
}))
