// components/RefreshInputMenusButton.tsx
import React from 'react';

interface ButtonProps {
  setMood: (mood: string) => void;
  setTempo: (tempo: string) => void;
  setGenre: (genre: string) => void;
  setSongUrl: (url: string) => void;
  setSongName: (name: string) => void;
  setIsLoading: (loading: boolean) => void;
  setSongGenerated: (generated: boolean) => void
}

const RefreshInputMenusButton: React.FC<ButtonProps> = ({ setMood, setTempo, setGenre, setSongUrl, setSongName, setIsLoading, setSongGenerated  }) => {

  const handleClick = () => {
    setIsLoading(false);
    setMood('');
    setTempo('');
    setGenre('');
    setSongUrl('');
    setSongName('');
    setSongGenerated(false);
  };

  return (
    <>
      <button onClick={handleClick}>Change my groove preferences</button>
    </>
  );
};

export default RefreshInputMenusButton;