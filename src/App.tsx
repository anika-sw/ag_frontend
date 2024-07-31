import React, { useState } from 'react';
import DropdownMenu from './components/DropdownMenu';
import GenerateSongButton from './components/GenerateSongButton';
import './App.css';

const App: React.FC = () => {
  const [mood, setMood] = useState<string>('');
  const [tempo, setTempo] = useState<string>('');
  const [genre, setGenre] = useState<string>('');

  const handleSelect = (type: 'mood' | 'tempo' | 'genre') => (selectedOption: string) => {
    if (type === 'mood') setMood(selectedOption);
    else if (type === 'tempo') setTempo(selectedOption);
    else if (type === 'genre') setGenre(selectedOption);
  };

  return (
    <div>
      <h1>AutomatedGroove</h1>
      <DropdownMenu options={["rock", "pop", "edm", "hiphop", "country"]} onSelect={handleSelect('genre')} />
      <DropdownMenu options={["slow", "medium", "fast"]} onSelect={handleSelect('tempo')} />
      <DropdownMenu options={["happy", "sad", "angry", "romantic", "euphoric"]} onSelect={handleSelect('mood')} />
      <GenerateSongButton genre={genre} mood={mood} tempo={tempo} />
    </div>
  );
};

export default App;