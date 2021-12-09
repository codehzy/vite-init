import { defineComponent } from 'vue'
import { NButton } from 'naive-ui'
import '@/styles/admin.scss'

export default defineComponent({
  name: 'NativeUi',
  setup() {
    return () => (
      <div class="native-content">
        <NButton type="warning">naive-ui</NButton>
      </div>
    )
  },
})
