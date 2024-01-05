import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from "./router"
import App from './App.vue'
import "./assets/styles/tailwind.scss"
import "./assets/styles/global.scss"

const pinia = createPinia()
const app = createApp(App)
  
app.use(router)
app.use(pinia)
app.mount('#app')