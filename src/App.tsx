import { defineComponent, ref, Suspense } from 'vue'
import '@/styles/admin.scss'
import { darkTheme, NConfigProvider, NButton, NCard } from 'naive-ui'
export default defineComponent({
  components: {},
  setup() {
    const theme = ref()

    const slots = {
      default: () => (
        <div>
          <router-view></router-view>
        </div>
      ),
      fallback: () => [<div>加载中...</div>],
    }

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
              <Suspense>{slots}</Suspense>
            </NCard>
          </NConfigProvider>
        </>
      )
    }
  },
})
