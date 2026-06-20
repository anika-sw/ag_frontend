import React, { useEffect, useRef } from 'react';
import './AudioVisualizer.css';

interface Props {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const BAR_COUNT = 64;

const AudioVisualizer: React.FC<Props> = ({ audioRef }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const contextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    const canvas = canvasRef.current;
    if (!audio || !canvas) return;

    const setupAnalyser = () => {
      if (contextRef.current) return;
      try {
        const context = new AudioContext();
        const analyser = context.createAnalyser();
        analyser.fftSize = BAR_COUNT * 2;
        analyser.smoothingTimeConstant = 0.8;
        const source = context.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(context.destination);
        contextRef.current = context;
        analyserRef.current = analyser;
      } catch (e) {
        // CORS or browser restriction — visualizer won't render
      }
    };

    const draw = () => {
      const analyser = analyserRef.current;
      const ctx = canvas.getContext('2d');
      if (!analyser || !ctx) return;

      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(dataArray);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const totalWidth = canvas.width;
      const barWidth = (totalWidth / BAR_COUNT) * 0.75;
      const gap = (totalWidth / BAR_COUNT) * 0.25;

      for (let i = 0; i < BAR_COUNT; i++) {
        const value = dataArray[i] / 255;
        const barHeight = value * canvas.height;
        const x = i * (barWidth + gap);
        const y = canvas.height - barHeight;

        const gradient = ctx.createLinearGradient(0, canvas.height, 0, 0);
        gradient.addColorStop(0, '#57e3e2');
        gradient.addColorStop(0.5, '#a469e5');
        gradient.addColorStop(1, '#e7165f');

        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth, barHeight);
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    const handlePlay = () => {
      setupAnalyser();
      if (contextRef.current?.state === 'suspended') {
        contextRef.current.resume();
      }
      draw();
    };

    const handlePause = () => {
      cancelAnimationFrame(animationRef.current);
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handlePause);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handlePause);
      cancelAnimationFrame(animationRef.current);
    };
  }, [audioRef]);

  return (
    <div className="audio-visualizer">
      <canvas ref={canvasRef} width={600} height={120} />
    </div>
  );
};

export default AudioVisualizer;
