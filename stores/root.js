import {defineStore} from 'pinia'

export const useRootStore = defineStore('root', () => {
  const count = ref(0)


  return { count}
})