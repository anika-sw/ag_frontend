import React, { useState, useEffect } from 'react';
import './MusicTechLoader.css';

const images = [
  '/assets/music_tech_boombox_by_zirconicusso_on_Magnific.png',
  '/assets/music_tech_cassette_by_freepik.png',
  '/assets/music_tech_cd_by_starline_on_Magnific.png',
  '/assets/music_tech_earpods_by_Xvect_intern_on_Magnific.png',
  '/assets/music_tech_headphones_by_xadartstudio_on_Magnific.png',
  '/assets/music_tech_mp3%20player%20by%20freepik.png',
  '/assets/music_tech_phonograph_by_tohamina_on_Magnific.png',
  '/assets/music_tech_record_by_xadartstudio_on_Magnific.png',
];

const HOLD_MS = 2000;
const FLIP_MS = 900;

const MusicTechLoader: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<'hold' | 'flip-out' | 'flip-in'>('hold');

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === 'hold') {
      timeout = setTimeout(() => setPhase('flip-out'), HOLD_MS);
    } else if (phase === 'flip-out') {
      timeout = setTimeout(() => {
        setIndex(i => (i + 1) % images.length);
        setPhase('flip-in');
      }, FLIP_MS);
    } else {
      timeout = setTimeout(() => setPhase('hold'), FLIP_MS);
    }

    return () => clearTimeout(timeout);
  }, [phase]);

  const imageName = images[index].split('/').pop() || '';

  return (
    <div className="music-tech-loader">
      <div className={`loader-card ${phase}`}>
        <img
          src={images[index]}
          alt="Loading..."
          className={imageName.includes('boombox') ? 'img-large' : ''}
        />
      </div>
    </div>
  );
};

export default MusicTechLoader;
