import React, { useState, useEffect } from 'react';
import DropdownMenu from './components/DropdownMenu';
import GenerateSongButton from './components/GenerateSongButton';
import './App.css';
// import ReCAPTCHA from "react-google-recaptcha";
import RefreshInputMenusButton from './components/RefreshInputMenusButton';
import ResubmitPromptButton from './components/ResubmitPromptButton';

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, params: { action: string }) => Promise<string>;
    };
  }
}

const App: React.FC = () => {
  const [mood, setMood] = useState<string>('');
  const [tempo, setTempo] = useState<string>('');
  const [genre, setGenre] = useState<string>('');
  const [songUrl, setSongUrl] = useState<string>('');
  const [songName, setSongName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [captchaToken, setCaptchaToken] = useState<string>('');

  // removed handleSelect functions per Ansel's recommendation. Passed setter
  // functions via the onSelect prop in the DropdownMenu components.

  // const onChange = () => {};

  const handleSelect = (type: 'mood' | 'tempo' | 'genre') => (selectedOption: string) => {
    if (type === 'mood') setMood(selectedOption);
    else if (type === 'tempo') setTempo(selectedOption);
    else if (type === 'genre') setGenre(selectedOption);
  };

  const onChange = () => {};

  
  useEffect(() => {
    // const script = document.createElement('script'); 
    // script.src = "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad";
    // script.async = true;
    // document.body.appendChild(script);

    window.grecaptcha.ready(() => {
      window.grecaptcha.execute('6LfI_RsqAAAAACEnGBBLuWFGY6HqSTJBRZd9A-sG', { action: 'homepage' }).then(onCaptchaChange);
    });
  }, []);
  
  const onCaptchaChange = (token: string) => { setCaptchaToken(token); };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Send captchaToken to your backend for verification
  };
  


// code below returned error: Error: Missing required parameters: sitekey
  // const siteKey: string = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  // console.log("printing import.meta.env:", import.meta.env);
  // console.log("printing siteKey:", siteKey);



  // Troubleshooting attempts

  // sitekey="6LfI_RsqAAAAACEnGBBLuWFGY6HqSTJBRZd9A-sG" no env var in AWS
  //  returned error: Error: Missing required parameters: sitekey

  // const apiKey = process.env.sitekey


  return (
    <div>
      <h1>AutomatedGroove</h1>
      <DropdownMenu placeholder="Genre" options={["rock", "pop", "edm", "hiphop", "country"]} onSelect={setMood} />
      <DropdownMenu placeholder="Tempo" options={["slow", "medium", "fast"]} onSelect={setTempo} />
      <DropdownMenu placeholder="Mood" options={["happy", "sad", "angry", "romantic", "euphoric"]} onSelect={setGenre} />
      {/* <ReCAPTCHA sitekey={siteKey} onChange={onChange} /> */}
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form> );
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
      <audio src={songUrl} controls data-testid="audio-player"/>
      <RefreshInputMenusButton genre={genre} mood={mood} tempo={tempo} setSongUrl={setSongUrl}/>
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