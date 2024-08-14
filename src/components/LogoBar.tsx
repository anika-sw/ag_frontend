import React, { useEffect, useRef } from 'react';
import './LogoBar.css';

const LogoBar: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

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
    const slider = sliderRef.current;

    if (slider) {
      let currentScrollPos = 0;

      const scroll = () => {
        currentScrollPos += 1;
        if (currentScrollPos >= slider.scrollWidth / 2) {
          currentScrollPos = 0; // Reset scroll position to achieve the infinite loop effect
        }
        slider.scrollLeft = currentScrollPos;
        requestAnimationFrame(scroll);
      };

      scroll();
    }
  }, []);

  return (
    <div className="logo-container">
      <div className="logo-slider" ref={sliderRef}>
        {[...logos, ...logos].map((logo, index) => (
          <img src={logo} alt={`Logo ${index + 1}`} className="logo" key={index} />
        ))}
      </div>
    </div>
  );
};

export default LogoBar;