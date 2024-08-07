// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setupTests.ts',
    // exclude specifies files and directories that should be excluded from the test runs
    exclude: [...configDefaults.exclude, '**/node_modules/**'],
  },
});

// // vitest.config.ts
// import { defineConfig } from 'vitest/config';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//     plugins: [react()],
//     test: {
//         globals: true,
//         environment: 'jsdom',
//     },
// });


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