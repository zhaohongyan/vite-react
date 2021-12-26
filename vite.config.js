import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import createImportPlugin from 'vite-plugin-import';
import styleImport, { AntdResolve } from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "primary-color": "#FF5B18", // 全局主色
          "link-color": "#FF5B18", // 链接色
          "font-size-base": "14px" // 主字号
        },
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  build: {

  },
  server: {
    port: 8080,
    open: true,
    host: true,
  },
  plugins: [
    react(),
    styleImport({
      resolves: [AntdResolve()],
    }),
    // createImportPlugin({
    //   onlyBuild: false, // if onlyBuild === true, this plugin takes effect only in vite build mode; onlyBuild's default value is true.
    //   babelImportPluginOptions: [{
    //     libraryName: 'antd',
    //     style: true,   // or 'css'
    //   }]
    // }),
  ]
})
