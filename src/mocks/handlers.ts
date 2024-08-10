import { http, HttpResponse } from 'msw';
import { mockSongNameResponse, mockSongFileResponse } from './mockData';

export const handlers = [
  http.post('http://localhost:5000/create_song', async ({ request }) => {
    // // inspect the request if needed
    // console.log('Handler', request.method, request.url)
    return HttpResponse.json(mockSongFileResponse, { status: 200 });
  }),

  http.post('http://localhost:5000/create_song_name', async ({ request }) => {
    return HttpResponse.json(mockSongNameResponse, { status: 200 });
  }),

  // loading gif
  http.get('/assets/giphy1.gif', async ({ request }) => {
    return new HttpResponse(null, {
      status: 200,
      statusText: 'OK: loaded gif',
    })
  }),

  // src attribute of audio element in App creates a GET request to fetch the song
  http.get('http://mock_musicfy_api.com/song.mp3', async ({ request }) => {
    return new HttpResponse(null, { status: 200 })
  }),

  // You can add more handlers here as needed for other endpoints
];

// // mocking error response 
// export const handlers = [
//   http.get('/user', () => {
//     // Respond with "401 Unauthorized" to "GET /user" requests.
//     return new HttpResponse(null, { status: 401 })
//   }),
// ]

// // mocking network error
// export const handlers = [
//   http.post('/checkout/cart', () => {
//     return HttpResponse.error()
//   }),
// ]