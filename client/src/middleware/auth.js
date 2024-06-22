import { useUserStore } from '@/store/user'
// export default function auth({ to, from, next }) {  // Error
export default function auth({ next }) {
  const store = useUserStore()
  store.loadUser()
  if (store.user) {
    return next()
  }
  return next('/login')
}
