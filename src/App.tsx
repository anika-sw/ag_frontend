import React from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import GenerateSongButton from './components/GenerateSongButton';
import './App.css'


const App: React.FC = () => {

  // Example values, you might get these from user inputs or other sources
  const genre = 'pop';
  const mood = 'happy';
  const tempo = 'medium';

  return (
    <div>
      <h1>AutomatedGroove</h1>
      <GenerateSongButton genre={genre} mood={mood} tempo={tempo} />
    </div>
  );
};

export default App;
