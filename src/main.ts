import { createApp } from 'vue'
import App from './App'
import Vant from 'vant'
import 'vant/lib/index.css'
import router from './router/index'

const app = createApp(App)

app.use(Vant).use(router).mount('#app')
