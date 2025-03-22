import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()], // React plugin qo‘shildi
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        product: resolve(__dirname, "product.html"),
        card: resolve(__dirname, "card.html")
      }
    }
  }
});
