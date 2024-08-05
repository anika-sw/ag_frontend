// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});

require('dotenv').config();

module.exports = {
  apiKey: process.env.REACT_APP_API_KEY,
};