import React, { useState, useEffect, useRef } from 'react';
import LogoBar from './components/LogoBar';
import DropdownMenu from './components/DropdownMenu';
import GenerateSongButton from './components/GenerateSongButton';
import RefreshInputMenusButton from './components/RefreshInputMenusButton';
import ResubmitPromptButton from './components/ResubmitPromptButton';
import './App.css';

const App: React.FC = () => {
  const [mood, setMood] = useState<string>('');
  const [tempo, setTempo] = useState<string>('');
  const [genre, setGenre] = useState<string>('');
  const [songUrl, setSongUrl] = useState<string>('');
  const [songName, setSongName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [songGenerated, setSongGenerated] = useState<boolean>(false);

  const landingPageRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, [songUrl]);

  useEffect(() => {
    if (landingPageRef.current) {
      const landingPage = landingPageRef.current;
      const logoBar = landingPage.querySelector('.logo-container');
      const landingPageText = landingPage.querySelector('.landing-page-text');

      if (logoBar && landingPageText) {
        const totalHeight = logoBar.clientHeight + landingPageText.clientHeight;
        landingPage.style.height = `${totalHeight}px`;
      }
    }
  }, []);

  const scrollFunction = () => {
    const title: HTMLElement | null = document.getElementById('title');
    if (title) { // Null check to ensure the element exists
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        title.style.fontSize = "2.5rem";
        title.style.height = '10vh'
      } else {
        title.style.fontSize = "7rem";
        title.style.height = '30vh'
      }
    }
  };
  
  window.onscroll = scrollFunction;

  return (
    <div>
      <div ref={landingPageRef} className="landing-page">
        <video autoPlay muted loop className="background-video">
          <source src="/assets/musicnotes.mp4" type="video/mp4" />
        </video>
        <section className='landing-page-text'>
          <h1 id='title'>AutomatedGroove</h1>
          <div className='intro'>
            <pre className='sm-text'>
              {'High-quality license- and royalty-free grooves \n for all you music needs'}
            </pre>
            <p className='md-text'>Generated by AI</p>
            <p className='lg-text'>Certified groovy by you.</p>
            <br />
            <br />
            <p className='logo-bar-text'>Use with your favorite platforms. No restrictions. Ever.</p>
            <LogoBar />
          </div>
        </section>
      </div>
      <section className='make-groove'>
        <h2>Are you ready? Let's groove.</h2>
        <DropdownMenu placeholder="Genre" options={["rock", "pop", "edm", "hiphop", "country"]} selectedOption={genre} onSelect={setGenre} />
        <DropdownMenu placeholder="Tempo" options={["slow", "medium", "fast"]} selectedOption={tempo} onSelect={setTempo} />
        <DropdownMenu placeholder="Mood" options={["happy", "sad", "angry", "romantic", "euphoric"]} selectedOption={mood} onSelect={setMood} />
        <div>
          <GenerateSongButton
            genre={genre}
            mood={mood}
            tempo={tempo}
            setSongUrl={setSongUrl}
            setSongName={setSongName}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            setSongGenerated={setSongGenerated}/>
            <p>Select genre, tempo, and mood to generate song</p>
        </div>
      </section>
      <section>
        <div>
          <>Finding the groove...</>
          {isLoading ?
          <img className="loadingGif" src='/assets/giphy1.gif' />
          : songName}
        </div>
      </section>
      <section>
      { songGenerated &&
        <>
          <div>
            <h2>Get into your groove!</h2>
            <div>
              <audio ref={audioRef} src={songUrl} controls data-testid="audio-player"/>
            </div>
          </div>
          <div>
            <h2>Here we groove again!</h2>
            <ResubmitPromptButton
              genre={genre}
              mood={mood}
              tempo={tempo}
              setSongUrl={setSongUrl}
              setSongName={setSongName}
              isLoading={isLoading}
              setIsLoading={setIsLoading}/>
            <RefreshInputMenusButton
              setMood={setMood}
              setTempo={setTempo}
              setGenre={setGenre}
              setSongUrl={setSongUrl}
              setSongName={setSongName}
              setIsLoading={setIsLoading}/>
          </div>
        </>
        }
      </section>
      <section>
        <div>
          <p>FAQs</p>
          <p>Have a different question? Groovy. Get in touch.</p>
        </div>
      </section>
      <section>
        <div>
          <p>The AutomatedGroove Group</p>
        </div>
      </section>
    </div>
  );
};

export default App;
