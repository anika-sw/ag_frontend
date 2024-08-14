import React, { useState } from 'react';
import { apiCall1, apiCall2 } from '../../utils/api';
import './ResubmitPromptButton.css';

interface ButtonProps {
  genre: string;
  mood: string;
  tempo: string;
  setSongUrl: (url: string) => void;
  setSongName: (name: string) => void;
  setIsLoading: (loading: boolean) => void;
  setSongGenerated: (generated: boolean) => void
}

const ResubmitPromptButton: React.FC<ButtonProps> = ({ genre, mood, tempo, setSongUrl, setSongName, setIsLoading, setSongGenerated }) => {

  const handleClick = async () => {
    setSongName('Loading...');
    setIsLoading(true);
    setSongGenerated(false);
    try {
      const [response1, response2] = await Promise.all([
        apiCall1(genre, mood, tempo),
        apiCall2(genre, mood, tempo),
      ]);
      setSongUrl(response1[0].file_url); // Update the song URL in the App component
      setSongName(response2); // Update the song name
      setSongGenerated(true);
    } catch (error) {
      console.error('Error:', error);
      setSongName('Error generating song'); // Display error
    }
    setIsLoading(false);
  };

  return (
    <>
      <button className='resubmit' onClick={handleClick}>Same preferences, new groove</button>
    </>
  );
};

export default ResubmitPromptButton;