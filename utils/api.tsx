// interface ButtonProps {
//     genre: string;
//     mood: string;
//     tempo: string;
//   }


export const apiCall1 = async (genre: string, mood: string, tempo: string) => {
    // const response = await fetch('http://flask-env.eba-np4xpmaq.us-east-2.elasticbeanstalk.com/create_song', {
    const response = await fetch('http://localhost:5000/create_song', {
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
    return response.json();
};


export const apiCall2 = async (genre: string, mood: string, tempo: string) => {
    // const response = await fetch('http://flask-env.eba-np4xpmaq.us-east-2.elasticbeanstalk.com/create_song_name', {
        const response = await fetch('http://localhost:5000/create_song_name', {
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
    return response.json();
};