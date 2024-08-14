import React from 'react';
import './LogoBar.css';

const LogoBar: React.FC = () => {
  const logos: string[] = [
    '/assets/youtube.svg',
    '/assets/twitch.svg',
    '/assets/tiktok.svg',
    '/assets/spotify.svg',
    '/assets/instagram.svg',
    '/assets/soundcloud.svg',
    '/assets/and_more.svg'
  ];

  return (
    <div className="logo-container">
      <div className="logo-slider">
        <div className="logos">
          {logos.map((logo, index) => (
            <img src={logo} alt={`Logo ${index + 1}`} className="logo" key={index} />
          ))}
          {logos.map((logo, index) => (
            <img src={logo} alt={`Logo ${index + logos.length}`} className="logo" key={index + logos.length} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoBar;

