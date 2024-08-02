import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'

if (!crypto.randomUUID) {
  (crypto as any).randomUUID = function (): string {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
          const r = Math.random() * 16 | 0;
          const v = c === 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
      });
  };
}

//needs an exclamation point after ('root')!
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
