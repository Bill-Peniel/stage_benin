import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Animation libraries
import AOS from 'aos'
import 'aos/dist/aos.css'
// Custom animations
import './assets/animation.css'

// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  mirror: false
})

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
