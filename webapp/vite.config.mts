import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import autoprefixer from 'autoprefixer'
import { defineConfig, loadEnv } from 'vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const publicEnv = Object.entries(env).reduce((acc, [key, value]) => {
    if (key.startsWith('VITE_') || key === 'NODE_ENV') {
      return {
        ...acc,
        [key]: value,
      }
    }
    return acc
  }, {})

  return {
    plugins: [
      react(),
      svgr(),
      legacy({
        targets: ['> 0.01%'],
      }),
    ],
    server: {
      port: +env.PORT,
    },
    preview: {
      port: +env.PORT,
    },
    define: {
      'process.env': publicEnv,
    },
    css: {
      postcss: {
        plugins: [autoprefixer({})],
      },
    },
  }
})
