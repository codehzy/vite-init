import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Index',
  setup() {
    const Index = ref('')
    Index.value = '这是Index'

    return () => <div>{Index.value}</div>
  },
})
