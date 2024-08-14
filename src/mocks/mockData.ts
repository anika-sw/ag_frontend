import { SongFile, RecaptchaResponse, RecaptchaRequest } from '../../utils/types';

export const mockSongFileResponse: SongFile[] = [
  {
    file_url: 'http://mock_musicfy_api.com/song.mp3',
    type: "music"
  }
];

export const mockSongNameResponse: string = 'Mock Song Name';

export const mockRecaptchaRequest: RecaptchaRequest = {
  token: 'mockToken'
}

export const mockRecaptchaResponse: RecaptchaResponse = {
  success: true,
  challenge_ts: '2021-09-15T21:09:45Z',
  hostname: 'localhost'
}