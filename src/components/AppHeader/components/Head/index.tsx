import { defineComponent, ref } from 'vue'

export const Head = defineComponent({
  name: 'Head',
  setup() {
    const head = ref('头部')

    return () => (
      <div>
        <span>{head.value}</span>
      </div>
    )
  },
})
