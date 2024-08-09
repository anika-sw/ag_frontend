interface CaptchaResponse {
    success: boolean;
    challenge_ts: string;
    hostname: string;
    error_codes?: string[];
  }

export const apiCall1 = async (genre: string, mood: string, tempo: string) => {
    // const response = await fetch('https://ag-backend-caij.onrender.com/create_song', {
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
    // const response = await fetch('https://ag-backend-caij.onrender.com/create_song_name', {
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


export function onChange(value: string | null): void {
        if (value) {
            console.log("Captcha value:", value);

            fetch('http://localhost:5000/verify-recaptcha', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: value })
            })
            .then<CaptchaResponse>(response => response.json())
            .then(data => {
                if (data.success) {
                console.log("Captcha verified successfully!");
                // Proceed with your form submission or other actions
                } else {
                console.error("Captcha verification failed:", data.error_codes);
                // Handle failed verification (e.g., display error message)
                }
            })
            .catch(error => console.error(error));
        } else {
            console.error("Captcha validation failed.");
        }
        }