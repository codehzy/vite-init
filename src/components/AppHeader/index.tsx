import { Head, Title } from './components'
import { defineComponent, ref } from 'vue'
import logo from './assets/logo.png'

export const AppHeader = defineComponent({
  name: 'AppHeader',
  setup() {
    const Header = ref('汇总Header')

    // 渲染Header
    const renderHeader = () => {
      return (
        <div>
          <p>这是Head</p>
          <Head />
          <p>这是Title</p>
          <Title />
          <p>汇总一下Header</p>
          {Header.value}
          <img src={logo} class="img" />
        </div>
      )
    }

    return () => <div>{renderHeader()}</div>
  },
})
