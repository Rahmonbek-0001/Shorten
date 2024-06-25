import { useUserStore } from '@/store/user'
export default function auth(to, from, next) {
  const store = useUserStore()
  store.loadUser()
  if (store?.user?.token) {
    return next()
  }
  return next('/login')
}
