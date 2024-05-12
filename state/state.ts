import { create } from 'zustand'

export type data = {
  couplesSrc?: string,
  brideName?: string,
  groomName?: string,
  date?: string,
  day?: string,
  time?: string,
  location?: string,
  brideSrc?: string,
  groomSrc?: string,
  brideText?: string,
  groomText?: string,
  projectName?: string,
  otherDetails?: string
  id?: string
} | undefined

 type projectData = {
  projectName: string,
  projectLink: string,
  projectEdit: string,
  razorpaySignature?: string | string[]
}
type State = {
  firstName: string
  lastName: string
  bgImage: string
  location: string
  data: data
  projectData: projectData[]
  userId ?: string
}

type Action = {
  updateFirstName: (firstName: State['firstName']) => void
  updateLastName: (lastName: State['lastName']) => void
  updateBgImage: (bgImage: State['bgImage']) => void
  updateLocation: (location: State['location']) => void
  updateData: (data: State['data']) => void
  updateProjectData: (projectData: State['projectData']) => void
  updateUserId: (userId: State['userId']) => void
}

export const usePersonStore = create<State & Action>((set) => ({
  userId: '',
  firstName: '',
  lastName: '',
  bgImage: '/template.png',
  location: '',
  data: {
    couplesSrc: '',
    brideName: '',
    groomName: '',
    date: '',
    day: '',
    time: '',
    location: '',
    brideSrc: '',
    groomSrc: '',
    brideText: '',
    groomText: '',
    projectName: '',
    id: ''
  },
  projectData: [],
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  updateLastName: (lastName) => set(() => ({ lastName: lastName })),
  updateBgImage: (bgImage) => set(() => ({ bgImage: bgImage })),
  updateLocation: (location) => set(() => ({ location: location })),
  updateData: (data) => set(() => ({ data: data })),
  updateProjectData: (projectData) => set(() => ({ projectData: projectData })),
  updateUserId: (userId) => set(() => ({ userId: userId }))
}))