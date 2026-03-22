import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel'; // <--- UBAH BAGIAN INI (Hapus /serverless)

export default defineConfig({
  output: 'server',
  vite: {
    plugins: [tailwindcss()],
  },
  devToolbar: {
    enabled: false,
  },
  server: {
    port: 1234,
  },
  adapter: vercel(),
});
