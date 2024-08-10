interface CaptchaResponse {
    success: boolean;
    challenge_ts: string;
    hostname: string;
    error_codes?: string[];
}

export const apiCall1 = async (genre: string, mood: string, tempo: string) => {
    // const response = await fetch('https://ag-backend-caij.onrender.com/create_song', {
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

export const onChange = async (value: string | null, setUserVerified: (verified: boolean) => void) => {
    if (value) {
        try {
            const response = await fetch('http://localhost:5000/verify-recaptcha', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token: value })
            });

            const data = await response.json();

            if (data.success) {
                setUserVerified(true);  // Update state to true
            } else {
                console.error("Captcha verification failed:", data.error_codes);
                setUserVerified(false);  // Update state to false
            }
        } catch (error) {
            console.error("Error during captcha verification:", error);
            setUserVerified(false);  // Update state to false in case of error
        }
    } else {
        console.error("Captcha validation failed.");
        setUserVerified(false);  // Update state to false if no value
    }
};
