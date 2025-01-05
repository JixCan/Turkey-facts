import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Turkey-facts/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});