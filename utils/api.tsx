interface CaptchaResponse {
    success: boolean;
    challenge_ts: string;
    hostname: string;
    error_codes?: string[];
}

const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

const resolveFileUrl = (fileUrl: string): string =>
    fileUrl.startsWith('http') ? fileUrl : `${backendUrl}${fileUrl}`;

export const apiCall1 = async (genre: string, mood: string, tempo: string) => {
    const response = await fetch(`${backendUrl}/create_song`, {
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
    return data.map((song: { file_url: string; [key: string]: unknown }) => ({
        ...song,
        file_url: resolveFileUrl(song.file_url),
    }));
};


export const apiCall2 = async (genre: string, mood: string, tempo: string) => {
    const response = await fetch(`${backendUrl}/create_song_name`, {
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
            const response = await fetch(`${backendUrl}/verify-recaptcha`, {
            // const response = await fetch('http://localhost:5000/verify-recaptcha', {
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
