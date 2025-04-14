import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Tailwind CSS is imported in App.vue

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
