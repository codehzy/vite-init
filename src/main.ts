import { createApp } from 'vue'
import App from './App'
import Vant from 'vant'
import 'vant/lib/index.css'
import router from './router/index'
import { createPinia } from 'pinia'
import VConsole from 'vconsole'

let vconsole = '' as unknown
if (import.meta.env.VITE_APP_VCONSOLE === 'yes') {
  vconsole = new VConsole()
}
export default vconsole

const app = createApp(App)

app.use(Vant).use(createPinia()).use(router).mount('#app')
