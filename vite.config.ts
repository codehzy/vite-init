import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import legacy from "@vitejs/plugin-legacy";
import { Plugin } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    removePolyfileLegacyStrict(),
  ],
  server: {
    host: true,
  },
  resolve: {
    alias: {
      "@": "/src/",
    },
  },
});

// 移除 polyfill 的 use strict，修复在ios10 老设备上的不兼容。
function removePolyfileLegacyStrict(): Plugin {
  return {
    name: "vite-plugin-remove-strict-polyfills-legacy",
    apply: "build",
    generateBundle(opt, bundle) {
      for (const accessPath in bundle) {
        if (Object.prototype.hasOwnProperty.call(bundle, accessPath)) {
          const obj = bundle[accessPath];
          if (obj.type === "chunk" && obj.name === "polyfills-legacy") {
            obj.code = obj.code.replace(/"use strict";/, "");
          }
        }
      }
    },
  };
}
