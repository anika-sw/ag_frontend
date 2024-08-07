// gpt referenced one file first, then three separate files -- browser, handlers, and server. 
// based on what i can see in the current msw 2.0 docs, browser is handled under the
// hood by the msw package, so i'm not sure if that's necessary. handlers can be rolled
// into the server file, which is what i've done here.


// src/mocks/server.ts
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers);