import { createApp } from 'vue'
import App from './App'
import Vant, { Popup } from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)

app.use(Vant).use(Popup).mount('#app')
