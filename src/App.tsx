import React, { useState } from 'react';
import DropdownMenu from './components/DropdownMenu';
import GenerateSongButton from './components/GenerateSongButton';
import './App.css';
import ReCAPTCHA from "react-google-recaptcha";

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

  // i got the angry red line to go away by adding "vite-env.d.ts" to the tsconfig.json file"
  // const apiKey: string = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  
  // const apiKey = process.env.sitekey

  // sitekey="6LfI_RsqAAAAACEnGBBLuWFGY6HqSTJBRZd9A-sG" no env var in AWS
  //  returned error: 


  return (
    <div>
      <h1>AutomatedGroove</h1>
      <DropdownMenu placeholder="Genre" options={["rock", "pop", "edm", "hiphop", "country"]} onSelect={handleSelect('genre')} />
      <DropdownMenu placeholder="Tempo" options={["slow", "medium", "fast"]} onSelect={handleSelect('tempo')} />
      <DropdownMenu placeholder="Mood" options={["happy", "sad", "angry", "romantic", "euphoric"]} onSelect={handleSelect('mood')} />
      <ReCAPTCHA sitekey="6LfI_RsqAAAAACEnGBBLuWFGY6HqSTJBRZd9A-sG" onChange={onChange} />
      <GenerateSongButton genre={genre} mood={mood} tempo={tempo} setSongUrl={setSongUrl} />
      <audio src={songUrl} controls data-testid="audio-player"/>
    </div>
  );
};

export default App;