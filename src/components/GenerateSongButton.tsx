import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { apiCall1, apiCall2, onChange } from '../../utils/api';
import './GenerateSongButton.css';

interface ButtonProps {
    genre: string;
    mood: string;
    tempo: string;
    setSongUrl: (url: string) => void;
    setSongName: (name: string) => void;
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
    setSongGenerated: (generated: boolean) => void;
}

const GenerateSongButton: React.FC<ButtonProps> = ({ genre, mood, tempo, setSongUrl, setSongName, isLoading, setIsLoading, setSongGenerated }) => {
    const [userVerified, setUserVerified] = useState<boolean>(false);
    const [widgetShowing, setWidgetShowing] = useState<boolean>(false);

    const siteKey: string = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

    const handleClick = async (verified?: boolean) => {
        const isUserVerified = verified !== undefined ? verified : userVerified;

        if (!isUserVerified) {
            // Show reCAPTCHA widget if user is not verified
            setWidgetShowing(true);
            return;
        }

        setIsLoading(true);
        try {
            const [response1, response2] = await Promise.all([
                apiCall1(genre, mood, tempo),
                apiCall2(genre, mood, tempo),
            ]);
            setSongUrl(response1[0].file_url);
            setSongGenerated(true);
            setSongName(response2);
        } catch (error) {
            console.error('Error:', error);
            setSongName('Error generating song');
        }
        setIsLoading(false);
    };

    const handleRecaptchaChange = async (value: string | null) => {
        if (value) {
            await onChange(value, async (verified) => {
                console.log("Verification result:", verified);
                setUserVerified(verified);
                
                if (verified) {
                    setWidgetShowing(false); // Hide the widget after verification
                    // Directly trigger the song generation after verification
                    await handleClick(verified);
                }
            });
        } else {
            setUserVerified(false);
            setWidgetShowing(false); // Hide widget if verification failed
            console.error("reCAPTCHA verification failed.");
        }
    };

    const isButtonDisabled = !genre || !mood || !tempo || widgetShowing || isLoading;

    return (
        <div>
            {widgetShowing && 
                <div className="grecaptcha `visibility : condition ? 'visible' : 'hidden`">
                    <ReCAPTCHA
                        sitekey={siteKey}
                        onChange={handleRecaptchaChange} // Handle the reCAPTCHA token here
                    />
                </div>
            }
            <button 
                onClick={() => handleClick()} 
                disabled={isButtonDisabled} 
                className={`generate ${isButtonDisabled ? 'disabled-button' : ''}`}
            >
                Generate Groove
            </button>
            {!widgetShowing &&
            <p>Select genre, tempo, and mood to generate song</p>
            }
        </div>
    );
};

export default GenerateSongButton;