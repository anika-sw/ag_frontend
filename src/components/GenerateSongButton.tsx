import React from 'react';
import { apiCall1, apiCall2 } from '../api'

interface ButtonProps {
  genre: string;
  mood: string;
  tempo: string;
}

const GenerateSongButton: React.FC<ButtonProps> = ({ genre, mood, tempo }) => {
  const handleClick = async () => {
    try {
      const [response1, response2] = await Promise.all([
        apiCall1(genre, mood, tempo),
        apiCall2(genre, mood, tempo),
      ]);
      console.log('Response 1:', response1);
      console.log('Response 2:', response2);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return <button onClick={handleClick}>Generate Song</button>;
};

export default GenerateSongButton;


  // const handleClick = async () => {
  //   try {
  //     const response = await fetch('http://flask-env.eba-np4xpmaq.us-east-2.elasticbeanstalk.com/create_song',
  //     // const response = await fetch('http://localhost:5000/create_song'
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         genre: [genre],
  //         mood: [mood],
  //         tempo: [tempo],
  //       }),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }

  //     const data = await response.json();
  //     console.log('Song generated:', data);
  //   } catch (error) {
  //     console.error('Error generating song:', error);
  //   }
  // };




