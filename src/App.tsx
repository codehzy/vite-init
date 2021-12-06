/*
 * @Author: coderhzy
 * @Date: 2021-12-02 17:41:29
 * @Last Modified by: 填充
 * @Last Modified time: 2021-12-06 15:02:07
 */

import { defineComponent, ref } from 'vue'
// import '@/style/index.css'
import { a } from './ts/test'
import '@/style/test.sass'
import classModule from '@/style/test.module.css'
import './assets/admin.scss'
import { AppHeader } from './components'

export default defineComponent({
  components: {},
  setup() {
    const show = ref(false)
    const showPopup = () => {
      show.value = true
    }

    return () => {
      return (
        <>
          <div class={`root ${classModule.moduleClass}`}>Hello {a.name} </div>
          <AppHeader />
          <vanCell onclick={showPopup}>展示弹出层</vanCell>
          <vanPopup v-model:show={show.value}>内容</vanPopup>
        </>
      )
    }
  },
})
