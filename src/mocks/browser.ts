import { setupWorker } from 'msw/browser';
import { handlers } from './handlers'; // Adjust the import path as needed

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers);