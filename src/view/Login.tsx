import { NButton, NCol, NForm, NFormItem, NInput, NRow } from 'naive-ui'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Login',
  setup() {
    return () => (
      <div>
        <NForm>
          <NFormItem path="age" label="年龄">
            <NInput></NInput>
          </NFormItem>
          <NFormItem path="pwd" label="密码">
            <NInput></NInput>
          </NFormItem>
          <NFormItem path="pwd" label="重复密码">
            <NInput></NInput>
          </NFormItem>
        </NForm>
        <NRow gutter="[0, 24]">
          <NCol span="24">
            <div style="display: flex; justify-content: flex-end;">
              <NButton round type="primary">
                验证
              </NButton>
            </div>
          </NCol>
        </NRow>
      </div>
    )
  },
})
