/*
 * @Author: coderhzy
 * @Date: 2021-12-02 17:41:29
 * @Last Modified by: 填充
 * @Last Modified time: 2021-12-09 12:40:27
 */

import { defineComponent, ref } from 'vue'
import '@/styles/admin.scss'
import { darkTheme, NConfigProvider, NButton, NCard } from 'naive-ui'

export default defineComponent({
  components: {},
  setup() {
    const theme = ref()

    return () => {
      return (
        <>
          <NConfigProvider theme={theme.value}>
            <NCard>
              <NButton
                onClick={() => {
                  theme.value = darkTheme
                }}
              >
                深色
              </NButton>
              <NButton
                onClick={() => {
                  theme.value = null
                }}
              >
                浅色
              </NButton>
              <router-view></router-view>
            </NCard>
          </NConfigProvider>
        </>
      )
    }
  },
})
