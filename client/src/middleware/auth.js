import { useUserStore } from '@/store/user'
export default function auth(to, from, next) {
  const store = useUserStore()
  store.loadUser()
<<<<<<< HEAD
  if (store.user) {
=======
  if (store.user?.token) {
>>>>>>> 99d5452e8c544ed2c8cbc24abc571530ecd91bb7
    return next()
  }
  return next('/login')
}
