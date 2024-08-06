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
  const apiKey: string = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  return (
    <div>
      <h1>AutomatedGroove</h1>
      <DropdownMenu placeholder="Genre" options={["rock", "pop", "edm", "hiphop", "country"]} onSelect={handleSelect('genre')} />
      <DropdownMenu placeholder="Tempo" options={["slow", "medium", "fast"]} onSelect={handleSelect('tempo')} />
      <DropdownMenu placeholder="Mood" options={["happy", "sad", "angry", "romantic", "euphoric"]} onSelect={handleSelect('mood')} />
      <ReCAPTCHA sitekey={apiKey} onChange={onChange} />
      <GenerateSongButton genre={genre} mood={mood} tempo={tempo} setSongUrl={setSongUrl} />
      <audio src={songUrl} controls />
    </div>
  );
};

export default App;