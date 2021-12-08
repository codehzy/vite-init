import { createApp } from 'vue'
import App from './App'
import { Popup } from 'vant'
import 'vant/lib/index.css'
import router from './router/index'

const app = createApp(App)

app.use(Popup).use(router).mount('#app')
