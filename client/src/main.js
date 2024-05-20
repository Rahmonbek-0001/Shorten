import '/src/assets/main.css'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from '/src/App.vue'
import router from '/src/router'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(PrimeVue)
app.mount('#app')