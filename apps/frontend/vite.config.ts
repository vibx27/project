import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          resolveIcons: true,
          importStyle: "less"
        })
      ]
    })
  ],
  server: {
    port: 4200,
    host: 'localhost',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'font-weight-bold': 'bold',
          'font-weight-light': '300',
          'border-radius-base': '5px',
          'font-weight-normal': '400',
          'font-weight-semibold': '500',
          'font-weight-base': "@font-weight-normal",
          'font-family': "'Poppins', sans-serif, Arial"
        }
      }
    }
  }
})
