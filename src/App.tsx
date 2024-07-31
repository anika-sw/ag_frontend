import React, { useState } from 'react';
import DropdownMenu from './components/DropdownMenu';
import GenerateSongButton from './components/GenerateSongButton';
import './App.css'


const App: React.FC = () => {

  // Example values, you might get these from user inputs or other sources
  const [mood, setMood] = useState<string>("happy");
  const [tempo, setTempo] = useState<string>("medium");
  const [genre, setGenre] = useState<string>("pop");

  return (
    <div>
      <h1>AutomatedGroove</h1>
      <label>
        Mood:
        <select value={mood} onChange={e => setMood(e.target.value)}>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="angry">Angry</option>
          <option value="relaxed">Relaxed</option>
        </select>
      </label>
      <label>
        Tempo:
        <select value={tempo} onChange={e => setTempo(e.target.value)}>
          <option value="slow">Slow</option>
          <option value="medium">Medium</option>
          <option value="fast">Fast</option>
        </select>
      </label>

      <label>
        Genre:
        <select value={genre} onChange={e => setGenre(e.target.value)}>
          <option value="pop">Pop</option>
          <option value="rock">Rock</option>
          <option value="jazz">Jazz</option>
          <option value="country">Country</option>
        </select>
      </label>

      {/* <DropdownMenu options={["rock", "pop", "edm", "hiphop", "country"]} onSelect={handleSelect} /> */}
      <GenerateSongButton genre={genre} mood={mood} tempo={tempo} />
    </div>
  );
};

export default App;
