export const userLogin = async (data) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if (response.status !== 200) {
      const { message } = await response.json()
      return { message, status: response.status }
    }
    const { message, user, token } = await response.json()
    return { message, user, token }
  } catch (error) {
    console.error('Error submitting form:', error)
  }
}
// import { useUserStore } from '@/store/user'
// // export default function auth({ to, from, next }) {  // Error
// export default function auth({ next }) {
//   const store = useUserStore()
//   store.loadUser()
//   if (store.user) {
//     return next()
//   }
//   return next('/login')
// }
