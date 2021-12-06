import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import { Plugin } from 'vite'
import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    removePolyfileLegacyStrict(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
  ],
  server: {
    host: true,
  },
  resolve: {
    alias: {
      '@': '/src/',
    },
  },
  optimizeDeps: {},
})

// 移除 polyfill 的 use strict，修复在ios10 老设备上的不兼容。
function removePolyfileLegacyStrict(): Plugin {
  return {
    name: 'vite-plugin-remove-strict-polyfills-legacy',
    apply: 'build',
    generateBundle(opt, bundle) {
      for (const accessPath in bundle) {
        if (Object.prototype.hasOwnProperty.call(bundle, accessPath)) {
          const obj = bundle[accessPath]
          if (obj.type === 'chunk' && obj.name === 'polyfills-legacy') {
            obj.code = obj.code.replace(/"use strict";/, '')
          }
        }
      }
    },
  }
}
