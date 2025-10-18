import { defineConfig } from '@tanstack/start/config'


export default defineConfig({
  tsr: {
    experimental: {
      enableCodeSplitting: true,
    },
  },
})
