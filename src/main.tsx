import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// // Only start MSW in development mode
// if (process.env.NODE_ENV === 'development') {
//   const { worker } = require('./mocks/browser');
//   worker.start();
// }

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
