import React, { useState } from 'react';
import DropdownMenu from './components/DropdownMenu';
import GenerateSongButton from './components/GenerateSongButton';
import './App.css';
// import ReCAPTCHA from "react-google-recaptcha";
import RefreshInputMenusButton from './components/RefreshInputMenusButton';
import ResubmitPromptButton from './components/ResubmitPromptButton';

const App: React.FC = () => {
  const [mood, setMood] = useState<string>('');
  const [tempo, setTempo] = useState<string>('');
  const [genre, setGenre] = useState<string>('');
  const [songUrl, setSongUrl] = useState<string>('');
  const [songName, setSongName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // removed handleSelect functions per Ansel's recommendation. Passed setter
  // functions via the onSelect prop in the DropdownMenu components.

  // const onChange = () => {};

  // const apiKey: string = import.meta.env.VITE_RECAPTCHA_SITE_KEY;


  return (
    <div>
      <h1>AutomatedGroove</h1>
      <DropdownMenu placeholder="Genre" options={["rock", "pop", "edm", "hiphop", "country"]} onSelect={setMood} />
      <DropdownMenu placeholder="Tempo" options={["slow", "medium", "fast"]} onSelect={setTempo} />
      <DropdownMenu placeholder="Mood" options={["happy", "sad", "angry", "romantic", "euphoric"]} onSelect={setGenre} />
      {/* <ReCAPTCHA sitekey={apiKey} onChange={onChange} /> */}
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