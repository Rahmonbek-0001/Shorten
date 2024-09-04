import { createApp } from 'vue'
import '/src/assets/main.css'
import PrimeVue from 'primevue/config'
import App from '/src/App.vue'
import router from '/src/router/index.js'
import { createPinia } from 'pinia'
import plugin from 'vue-toastify'
const pinia = createPinia()
import { VueQueryPlugin } from '@tanstack/vue-query'

const app = createApp(App)
app.use(plugin)
app.use(VueQueryPlugin)
app.use(PrimeVue)
app.use(router)
app.use(pinia)
app.mount('#app')
