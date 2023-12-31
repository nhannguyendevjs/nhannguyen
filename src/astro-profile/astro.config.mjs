import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  server: {
    port: 4200,
  },
  integrations: [mdx()],
})
