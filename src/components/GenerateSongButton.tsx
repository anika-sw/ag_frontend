import React from 'react';

interface ButtonProps {
  genre: string;
  mood: string;
  tempo: string;
}

const GenerateSongButton: React.FC<ButtonProps> = ({ genre, mood, tempo }) => {
  const handleClick = async () => {
    try {
      const response = await fetch('https://flask-env.eba-np4xpmaq.us-east-2.elasticbeanstalk.com/create_song', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          genre: [genre],
          mood: [mood],
          tempo: [tempo],
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Song generated:', data);
    } catch (error) {
      console.error('Error generating song:', error);
    }
  };

  return <button onClick={handleClick}>Generate Song</button>;
};

export default GenerateSongButton;
