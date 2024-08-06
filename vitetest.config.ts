// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.tsx', // Add this line
  },
});


// const webpack = require('webpack');
// const dotenv = require('dotenv');
// dotenv.config();
// module.exports = {
//     plugins: [
//         new webpack.DefinePlugin({
//             'process.env.REACT_APP_RECAPTCHA_SITE_KEY': JSON.stringify(process.env.REACT_APP_RECAPTCHA_SITE_KEY)
//         })
//     ]
// };


// require('dotenv').config();

// module.exports = {
//   apiKey: process.env.REACT_APP_RECAPTCHA_SITE_KEY,
// };