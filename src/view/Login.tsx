import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Login',
  setup() {
    const Login = ref('')
    Login.value = '这是Login'

    return () => <div>{Login.value}</div>
  },
})
