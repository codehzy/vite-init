/*
 * @Author: coderhzy
 * @Date: 2021-12-02 17:41:29
 * @Last Modified by: 填充
 * @Last Modified time: 2021-12-06 15:30:23
 */

import { defineComponent, ref } from 'vue'
import '@/styles/admin.scss'
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
          <AppHeader />
          <vanCell onclick={showPopup}>展示弹出层</vanCell>
          <vanPopup v-model:show={show.value}>弹出框内容</vanPopup>
        </>
      )
    }
  },
})
