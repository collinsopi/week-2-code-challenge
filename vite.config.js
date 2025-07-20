import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/week-2-code-challenge/',
  plugins: [react()],
});
