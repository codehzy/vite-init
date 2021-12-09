import { createApp } from 'vue'
import App from './App'
import Vant from 'vant'
import 'vant/lib/index.css'
import router from './router/index'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(Vant).use(createPinia()).use(router).mount('#app')
