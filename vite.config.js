import { defineConfig } from 'vite'
import { resolve } from 'path';
import ghPages from 'vite-plugin-gh-pages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ghPages()],
  base: '/Space-tourism-website/',
  resolve: {
    alias: {
      react: resolve(__dirname, 'node_modules/react'),
      'react-dom': resolve(__dirname, 'node_modules/react-dom'),
      'react-router-dom': resolve(__dirname, 'node_modules/react-router-dom'),
    },
  },
});
