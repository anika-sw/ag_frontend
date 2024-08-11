import React, { useEffect, useRef } from 'react';
import './LogoBar.css';

const LogoBar: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const logos: string[] = [
    '/assets/youtube.svg',
    '/assets/twitch.svg',
    '/assets/tiktok.svg',
    '/assets/spotify.svg',
    '/assets/instagram.svg',
    '/assets/soundcloud.svg',
    '/assets/and_more.svg'
  ];

  useEffect(() => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const logos = slider.querySelectorAll('img');
      const totalWidth = Array.from(logos).reduce((width, logo) => width + (logo as HTMLImageElement).offsetWidth, 0);

      // Adjust the animation duration based on total width of the logos
      // Slower speed by increasing the divisor
      const animationDuration = totalWidth / 20; // Increase divisor to slow down speed
      slider.style.animationDuration = `${animationDuration}s`;
    }
  }, []);

  return (
    <div className="logo-container">
      <div className="logo-slider" ref={sliderRef}>
        {logos.concat(logos).concat(logos).map((logo, index) => (
          <img src={logo} alt={`Logo ${index + 1}`} className="logo" key={index} />
        ))}
      </div>
    </div>
  );
};

export default LogoBar;



