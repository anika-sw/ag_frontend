import React from 'react';
import { apiCall1, apiCall2 } from '../../utils/api';
// import './GenerateSongButton.css';

interface ButtonProps {
  genre: string;
  mood: string;
  tempo: string;
  setSongUrl: (url: string) => void;
  setSongName: (name: string) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const GenerateSongButton: React.FC<ButtonProps> = ({ genre, mood, tempo, setSongUrl, setSongName, isLoading, setIsLoading }) => {

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const [response1, response2] = await Promise.all([
        apiCall1(genre, mood, tempo),
        apiCall2(genre, mood, tempo),
      ]);
      setSongUrl(response1[0].file_url);
      setSongName(response2);
    } catch (error) {
      console.error('Error:', error);
      setSongName('Error generating song');
    }
    setIsLoading(false);
  };

  const isButtonDisabled = !genre || !mood || !tempo || isLoading;

  return (
    <button 
      onClick={handleClick} 
      disabled={isButtonDisabled} 
      className={isButtonDisabled ? 'disabled-button' : ''}
    >
      Generate Song
    </button>
  );
};

export default GenerateSongButton;
