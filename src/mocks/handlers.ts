import { http, HttpResponse } from 'msw';
import { mockSongNameResponse, mockSongFileResponse } from './mockData';

export const handlers = [
  // Define a POST request handler for the endpoint 'http://example.com/api/song'
  http.post('http://localhost:5000/create_song', async ({ request }) => {
    // Optionally, you can inspect the request if needed
    // const requestData = await request.json();

    // Return a mock response
    return HttpResponse.json(mockSongFileResponse, { status: 200 });
  }),

  http.post('http://localhost:5000/create_song_name', async ({ request }) => {
    // Optionally, you can inspect the request if needed
    // const requestData = await request.json();

    // Return a mock response
    return HttpResponse.json(mockSongNameResponse, { status: 200 });
  }),

  // You can add more handlers here as needed for other endpoints
];