// setupTests.ts
import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';
import { afterAll, afterEach, beforeAll } from 'vitest';

// Define your request handlers using the new http API
const handlers = [
  http.post('http://localhost:5000/create_song', async ({ request }) => {
    // You can process request data as needed
    // For example, if you want to access JSON data:
    const data = await request.json(); // assuming the request body is JSON
    // Perform any necessary operations with 'data' here

    // Return a JSON response
    return HttpResponse.json([{ file_url: 'http://example.com/song.mp3' }]);
  }),

  http.post('http://localhost:5000/create_song_name', async ({ request }) => {
    // Handle the request and return a response
    const data = await request.json(); // Process JSON data if needed
    // Return a simple JSON response
    return HttpResponse.json('Mock Song Name');
  }),
];

// Setup the server with the handlers
export const server = setupServer(...handlers);

// Start the server before all tests
beforeAll(() => server.listen());

// Reset handlers after each test to avoid interference
afterEach(() => server.resetHandlers());

// Stop the server after all tests
afterAll(() => server.close());