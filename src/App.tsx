import { defineComponent, ref, Suspense } from 'vue'
import '@/styles/admin.scss'
import {
  darkTheme,
  NConfigProvider,
  NButton,
  NLayout,
  NLayoutHeader,
  NLayoutSider,
  NLayoutFooter,
} from 'naive-ui'

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
            <NLayout style="height: 100%">
              <NLayoutHeader
                style="height: 64px; padding: 12px; line-height:34px;"
                bordered
              >
                <div>
                  <img
                    class="header-left-img"
                    src="https://www.naiveui.com/assets/naivelogo.93278402.svg"
                    alt=""
                  />
                  学习Vu3+Vite
                </div>
                <div>
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
                </div>
              </NLayoutHeader>
              <NLayout
                position="absolute"
                style="top: 64px; bottom: 64px;"
                has-sider
              >
                <NLayoutSider
                  content-style="padding: 24px;"
                  native-scrollbar={false}
                  bordered
                >
                  <h3>
                    <router-link to="/">Home</router-link>
                  </h3>
                  <h3>
                    <router-link to="/login">login</router-link>
                  </h3>
                  <h3>
                    <router-link to="/pinia-test">piniaTest</router-link>
                  </h3>
                  <h3>
                    <router-link to="/native-ui">NativeUi</router-link>
                  </h3>
                  <h3>
                    <router-link to="/lodash">Lodash</router-link>
                  </h3>
                  <h3>
                    <router-link to="/todo-list">todoList</router-link>
                  </h3>
                </NLayoutSider>

                <NLayout
                  content-style="padding: 24px;"
                  native-scrollbar={false}
                >
                  <Suspense>{slots}</Suspense>
                </NLayout>
              </NLayout>
              <NLayoutFooter
                position="absolute"
                style="height: 64px; padding: 24px;"
                bordered
              >
                Footer
              </NLayoutFooter>
            </NLayout>
          </NConfigProvider>
        </>
      )
    }
  },
})
