import React, { useState, useEffect } from 'react';
import DropdownMenu from './components/DropdownMenu';
import GenerateSongButton from './components/GenerateSongButton';
import './App.css';
import ReCAPTCHA from "react-google-recaptcha";

// declare global {
//   interface Window {
//     grecaptcha: {
//       ready: (callback: () => void) => void;
//       execute: (siteKey: string, params: { action: string }) => Promise<string>;
//     };
//   }
// }

const App: React.FC = () => {
  const [mood, setMood] = useState<string>('');
  const [tempo, setTempo] = useState<string>('');
  const [genre, setGenre] = useState<string>('');
  const [songUrl, setSongUrl] = useState<string>('');

  const handleSelect = (type: 'mood' | 'tempo' | 'genre') => (selectedOption: string) => {
    if (type === 'mood') setMood(selectedOption);
    else if (type === 'tempo') setTempo(selectedOption);
    else if (type === 'genre') setGenre(selectedOption);
  };

  const onChange = () => {};

  
  // function MyComponent() {
  //   const [captchaToken, setCaptchaToken] = useState<string>('');
  
  //   useEffect(() => {
  //     const onCaptchaChange = (token: string) => {
  //       setCaptchaToken(token);
  //     };
  //     window.grecaptcha.ready(() => {
  //       window.grecaptcha.execute('6LfI_RsqAAAAACEnGBBLuWFGY6HqSTJBRZd9A-sG', { action: 'homepage' }).then(onCaptchaChange);
  //     });
  //   }, []);
  
  //   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     // Send captchaToken to your backend for verification
  //   };
  // }


  // i got the angry red line to go away by adding "vite-env.d.ts" to the tsconfig.json file"

  const siteKey: string = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  console.log("printing import.meta.env:", import.meta.env);
  console.log("printing siteKey:", siteKey);

  // const apiKey = process.env.sitekey

  // Troubleshooting attempts

  // sitekey="6LfI_RsqAAAAACEnGBBLuWFGY6HqSTJBRZd9A-sG" no env var in AWS
  //  returned error: Error: Missing required parameters: sitekey

  // const apiKey = process.env.sitekey


  return (
    <div>
      <h1>AutomatedGroove</h1>
      <DropdownMenu placeholder="Genre" options={["rock", "pop", "edm", "hiphop", "country"]} onSelect={handleSelect('genre')} />
      <DropdownMenu placeholder="Tempo" options={["slow", "medium", "fast"]} onSelect={handleSelect('tempo')} />
      <DropdownMenu placeholder="Mood" options={["happy", "sad", "angry", "romantic", "euphoric"]} onSelect={handleSelect('mood')} />
      <ReCAPTCHA sitekey={siteKey} onChange={onChange} />
      {/* <form onSubmit={handleSubmit}> */}
        {/* Your form elements */}
        {/* <button type="submit">Submit</button> */}
      {/* </form> */}
      <GenerateSongButton genre={genre} mood={mood} tempo={tempo} setSongUrl={setSongUrl} />
      <audio src={songUrl} controls data-testid="audio-player"/>
    </div>
  );
};

export default App;