/*
 * @Author: coderhzy
 * @Date: 2021-12-02 17:41:29
 * @Last Modified by: 填充
 * @Last Modified time: 2021-12-03 10:44:49
 */

import { defineComponent } from 'vue'
// import '@/style/index.css'
import { a } from './ts/test'
import '@/style/test.sass'
import classModule from '@/style/test.module.css'
import logo from './assets/logo.png'

export default defineComponent({
  setup() {
    return () => {
      return (
        <>
          <div class={`root ${classModule.moduleClass}`}>Hello {a.name} </div>
          <img src={logo} class="logo" alt="" />
        </>
      )
    }
  },
})
