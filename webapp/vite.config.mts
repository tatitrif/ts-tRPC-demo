import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import autoprefixer from 'autoprefixer'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig, loadEnv } from 'vite'
import svgr from 'vite-plugin-svgr'
import { parsePublicEnv } from './src/lib/parsePublicEnv'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const publicEnv = parsePublicEnv(env)
  return {
    plugins: [
      react(),
      svgr(),
      legacy({
        targets: ['> 0.01%'],
      }),
      visualizer({
        filename: './dist/bundle-stats.html',
        gzipSize: true,
        brotliSize: true,
      }),
    ],
    css: {
      postcss: {
        plugins: [autoprefixer({})],
      },
    },
    build: {
      chunkSizeWarningLimit: 900,
    },
    server: {
      port: +env.PORT,
    },
    preview: {
      port: +env.PORT,
    },
    define: {
      'process.env': publicEnv,
    },
  }
})
