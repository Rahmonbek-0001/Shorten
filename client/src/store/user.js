import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('counter', () => {
  const user = ref(null)

  function login() {}
  function register() {}
  return { user, login, register }
})
