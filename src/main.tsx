import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Only start MSW in development mode
async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
}
  const { worker } = await import('./mocks/browser')

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start()
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

enableMocking().then(() => {
  root.render(<App />)
})

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
