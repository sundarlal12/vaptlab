import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',          // root deploy (vapt.vercel.app). Change to "./" if needed.
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // build: { outDir: 'dist' } // optional, default is 'dist'
});
