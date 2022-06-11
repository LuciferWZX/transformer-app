import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'
import devConfig from './devConfig';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/es/${name}/style`,
        },
        {
          libName: "nprogress",
          style: () => "nprogress/nprogress.css",
        },
      ],
    })
  ],
  server:{
    proxy:{
      '/api': {
        target: devConfig.reqUrl.jjtest,
        changeOrigin: true,
      },
    }
  },
  resolve:{
    alias:{
      "@":path.resolve(__dirname, "src")
    }
  },
  css:{
    preprocessorOptions:{
      less:{
        javascriptEnabled:true,
        modifyVars:{
          '@primary-color':'#3761E2',
          '@border-radius-base': '4px',
        }
      }
    }
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) { // 分包
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
})
