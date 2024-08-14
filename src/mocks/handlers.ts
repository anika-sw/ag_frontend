import { http, HttpResponse } from 'msw';
import { mockSongNameResponse, mockSongFileResponse, mockRecaptchaResponse, mockRecaptchaRequest } from './mockData';

export const handlers = [
  http.post('http://localhost:5000/create_song', async () => {
    // // inspect the request if needed
    return HttpResponse.json(mockSongFileResponse, { status: 200 });
  }),

  http.post('http://localhost:5000/create_song_name', async () => {
    return HttpResponse.json(mockSongNameResponse, { status: 200 });
  }),

  // loading gif
  http.get('/assets/loading.gif', async () => {
    return new HttpResponse(null, {
      status: 200,
      statusText: 'OK: loaded gif',
    })
  }),

  // src attribute of audio element in App creates a GET request to fetch the song
  http.get('http://mock_musicfy_api.com/song.mp3', async () => {
    return new HttpResponse(null, { status: 200 })
  }),

  // recaptcha api
  http.post('http://localhost:5000/verify-recaptcha', async (mockRecaptchaRequest) => {
    return HttpResponse.json(mockRecaptchaResponse, { status: 200 });
  }),

  // You can add more handlers here as needed for other endpoints
];