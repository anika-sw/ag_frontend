import React, { useState } from 'react';
import { apiCall1, apiCall2 } from '../../utils/api';

interface ButtonProps {
  genre: string;
  mood: string;
  tempo: string;
  setSongUrl: (url: string) => void;
}

const GenerateSongButton: React.FC<ButtonProps> = ({ genre, mood, tempo, setSongUrl }) => {
  const [songName, setSongName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const [response1, response2] = await Promise.all([
        apiCall1(genre, mood, tempo),
        apiCall2(genre, mood, tempo),
      ]);
      setSongUrl(response1[0].file_url); // Update the song URL in the App component
      setSongName(response2); // Update the song name
    } catch (error) {
      console.error('Error:', error);
      setSongName('Error generating song'); // Display error
    }
    setIsLoading(false);
  };

  return (
    <>
      <button onClick={handleClick} disabled={isLoading}>Generate Song</button>
      <div>
        {isLoading ? 'Loading...' : songName}
      </div>
    </>
  );
};

export default GenerateSongButton;






// const GenerateSongButton: React.FC<ButtonProps> = ({ genre, mood, tempo }) => {
//   const [songName, setSongName] = useState(''); // State to store the response from response2

//   const handleClick = async () => {
//     try {
//       const [response1, response2] = await Promise.all([
//         apiCall1(genre, mood, tempo),
//         apiCall2(genre, mood, tempo),
//       ]);
//       console.log('Response 1:', response1);
//       console.log('Response 2:', response2);

//       setSongName(response2); // Update the state with the result from response2
//     } catch (error) {
//       console.error('Error:', error);
//       setSongName('Error generating song'); // Update state in case of an error
//     }
//   };

//   return (
//     <>
//       <button onClick={handleClick}>Generate Song</button>
//       <div>
//         {songName}
//       </div>
//     </>
//   );
// };

// export default GenerateSongButton;