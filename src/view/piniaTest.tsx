import { defineComponent } from 'vue'
import { useMainStore } from '@/store/main'

export default defineComponent({
  name: 'piniaTest',
  setup() {
    const mainStore = useMainStore()

    const updateName = () => {
      // $patch 修改 store中的数据
      mainStore.$patch({
        name: '名称被修改了,nameLength也随之改变了',
      })
    }

    const updateActionName = () => {
      mainStore.insertPost('coderhzy')
    }

    return () => (
      <div>
        <div>store中的name：{mainStore.name}</div>
        <div>store中name的长度：{mainStore.nameLength}</div>
        <div>
          <button onClick={updateName}>修改store中的name</button>
        </div>
        <div>
          <button onClick={updateActionName}>从action修改名字</button>
        </div>
      </div>
    )
  },
})
