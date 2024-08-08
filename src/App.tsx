import React, { useState, useEffect, useRef } from 'react';
import DropdownMenu from './components/DropdownMenu';
import GenerateSongButton from './components/GenerateSongButton';
import RefreshInputMenusButton from './components/RefreshInputMenusButton';
import ResubmitPromptButton from './components/ResubmitPromptButton';
import ReCAPTCHA from "react-google-recaptcha";
import './App.css';

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
  const [songName, setSongName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [captchaToken, setCaptchaToken] = useState<string>('');

  // removed handleSelect functions per Ansel's recommendation. Passed setter
  // functions via the onSelect prop in the DropdownMenu components.

  const onChange = () => {};
  
  // useEffect(() => {
  //   // const script = document.createElement('script'); 
  //   // script.src = "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad";
  //   // script.async = true;
  //   // document.body.appendChild(script);

  //   window.grecaptcha.ready(() => {
  //     window.grecaptcha.execute('6LfI_RsqAAAAACEnGBBLuWFGY6HqSTJBRZd9A-sG', { action: 'homepage' }).then(onCaptchaChange);
  //   });
  // }, []);
  
  // const onCaptchaChange = (token: string) => { setCaptchaToken(token); };

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   // Send captchaToken to your backend for verification
  // };
  


// code below returned error: Error: Missing required parameters: sitekey
  const siteKey: string = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  console.log("printing import.meta.env:", import.meta.env);
  console.log("printing siteKey:", siteKey);



  // Troubleshooting attempts

  // sitekey="6LfI_RsqAAAAACEnGBBLuWFGY6HqSTJBRZd9A-sG" no env var in AWS
  //  returned error: Error: Missing required parameters: sitekey

  // const apiKey = process.env.sitekey

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, [songUrl]);

  return (
    <div>
      <h1>AutomatedGroove</h1>
      <ReCAPTCHA sitekey={siteKey} onChange={onChange} />
      {/* <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>; */}
      <DropdownMenu placeholder="Genre" options={["rock", "pop", "edm", "hiphop", "country"]} selectedOption={genre} onSelect={setGenre} />
      <DropdownMenu placeholder="Tempo" options={["slow", "medium", "fast"]} selectedOption={tempo} onSelect={setTempo} />
      <DropdownMenu placeholder="Mood" options={["happy", "sad", "angry", "romantic", "euphoric"]} selectedOption={mood} onSelect={setMood} />
      <GenerateSongButton 
        genre={genre} 
        mood={mood} 
        tempo={tempo} 
        setSongUrl={setSongUrl} 
        setSongName={setSongName}
        isLoading={isLoading}
        setIsLoading={setIsLoading}/>
      <div>
        {isLoading ? 'Loading...' : songName}
      </div>
      <audio ref={audioRef} src={songUrl} controls data-testid="audio-player"/>
      <RefreshInputMenusButton 
        setMood={setMood}
        setTempo={setTempo}
        setGenre={setGenre}
        setSongUrl={setSongUrl}
        setSongName={setSongName}
        setIsLoading={setIsLoading}/>
      <ResubmitPromptButton
        genre={genre} 
        mood={mood} 
        tempo={tempo} 
        setSongUrl={setSongUrl} 
        setSongName={setSongName}
        isLoading={isLoading}
        setIsLoading={setIsLoading}/>
    </div>
  );
};

export default App;
