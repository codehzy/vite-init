import { defineComponent, ref } from 'vue'

export const Title = defineComponent({
  name: 'Title',
  setup() {
    const title = ref('标题')

    return () => (
      <div>
        <span>{title.value}</span>
      </div>
    )
  },
})
