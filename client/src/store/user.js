import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)

  function login(newUser) {
    user.value = newUser
    localStorage.setItem('user', JSON.stringify(newUser))
  }
  function logout() {
    user.value = null
    localStorage.removeItem('user')
  }
  async function loadUser() {
    if (localStorage.getItem('user')) {
      const storedUser = JSON.parse(localStorage.getItem('user'))
      user.value = storedUser
    }
  }
  return { user, login, logout, loadUser }
})
