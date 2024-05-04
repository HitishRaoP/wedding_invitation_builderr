import { create } from 'zustand'

type State = {
  firstName: string
  lastName: string
  bgImage: string
  location: string
}

type Action = {
  updateFirstName: (firstName: State['firstName']) => void
  updateLastName: (lastName: State['lastName']) => void
  updateBgImage: (bgImage: State['bgImage']) => void
  updateLocation: (location: State['location']) => void
}

export const usePersonStore = create<State & Action>((set) => ({
  firstName: '',
  lastName: '',
  bgImage: '/template.png',
  location: '',
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  updateLastName: (lastName) => set(() => ({ lastName: lastName })),
  updateBgImage: (bgImage) => set(() => ({ bgImage: bgImage })),
  updateLocation: (location) => set(() => ({ location: location })),
}))