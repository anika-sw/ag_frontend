import { http, HttpResponse } from 'msw';
import { mockSongNameResponse, mockSongFileResponse, mockRecaptchaResponse } from './mockData';

export const handlers = [
  http.post('*/create_song', async () => {
    // TODO: remove delay before shipping — for animation preview only
    await new Promise(resolve => setTimeout(resolve, 30000));
    return HttpResponse.json(mockSongFileResponse, { status: 200 });
  }),

  http.post('*/create_song_name', async () => {
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
  http.get('*/songs/mock-song.mp3', async () => {
    return new HttpResponse(null, { status: 200 })
  }),

  // recaptcha api
  http.post('*/verify-recaptcha', async () => {
    return HttpResponse.json(mockRecaptchaResponse, { status: 200 });
  }),

  // You can add more handlers here as needed for other endpoints
];