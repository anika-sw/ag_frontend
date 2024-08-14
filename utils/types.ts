export interface SongFile {
  file_url: string;
  type: string;
}

export interface RecaptchaRequest {
  token: string;
}

export interface RecaptchaResponse {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  error_codes?: string[];
}