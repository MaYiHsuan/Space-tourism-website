import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // 使用 react 插件來處理 JSX 和 React 的功能
  base: '/Space-tourism-website/', // 用於 GitHub Pages 部署的 base 路徑
  resolve: {
    alias: {
      react: resolve(__dirname, 'node_modules/react'),
      'react-dom': resolve(__dirname, 'node_modules/react-dom'),
      'react-router-dom': resolve(__dirname, 'node_modules/react-router-dom'),
    },
  },
});
