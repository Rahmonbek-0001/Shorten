import { createApp } from 'vue'
import '/src/assets/main.css'
import PrimeVue from 'primevue/config'
import App from '/src/App.vue'
import router from '/src/router/index.js'
import { createPinia } from 'pinia'
const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(PrimeVue)
app.mount('#app')
