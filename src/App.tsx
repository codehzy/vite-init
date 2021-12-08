/*
 * @Author: coderhzy
 * @Date: 2021-12-02 17:41:29
 * @Last Modified by: 填充
 * @Last Modified time: 2021-12-08 14:07:25
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
          <router-view></router-view>
        </>
      )
    }
  },
})
