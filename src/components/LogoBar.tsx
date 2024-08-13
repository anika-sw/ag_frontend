// solution Anika got from chatGPT to fix

// GPT explanation: Explanation:

// JavaScript-Driven Scrolling:

// Instead of using CSS keyframes, this approach uses JavaScript to control the scrolling behavior.
// The scroll function continuously increments the scrollLeft property of the slider to create a smooth scroll effect.
// Seamless Loop:

// When the scroll position reaches halfway through the total width of the content, it resets to 0. This ensures that as the first set of logos scrolls out of view, the scroll position is reset seamlessly to the beginning, creating the appearance of an infinite loop.
// Dynamic Content Handling:

// Only two sets of logos are rendered (no unnecessary duplicates), and the continuous scroll is handled by resetting the scroll position, eliminating the jump issue.
// Advantages:
// Truly Seamless Scroll: This approach prevents any visible jumps or breaks in the scrolling sequence.
// No Visible Duplication: The user doesn't see duplicated content in the visible area, just a smooth, continuous scroll.
// Consistent Speed: The scroll speed is consistent and can be adjusted by changing the increment in the scroll function.
// Final Note:
// This JavaScript-driven method is more reliable for achieving a perfect infinite scroll effect, especially when you want a seamless user experience without any jumps or content duplication.

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


// import React, { useEffect, useRef, useState } from 'react';
// import './LogoBar1.css';

// const LogoBar: React.FC = () => {
//   const sliderRef = useRef<HTMLDivElement | null>(null);
//   const [numRepetitions, setNumRepetitions] = useState<number>(1);

//   const logos: string[] = [
//     '/assets/youtube.svg',
//     '/assets/twitch.svg',
//     '/assets/tiktok.svg',
//     '/assets/spotify.svg',
//     '/assets/instagram.svg',
//     '/assets/soundcloud.svg',
//     '/assets/and_more.svg'
//   ];

//   useEffect(() => {
//     const slider = sliderRef.current;

//     if (slider) {
//       const logoElements = slider.querySelectorAll<HTMLImageElement>('img');

//       const handleImageLoad = () => {
//         const totalWidth = Array.from(logoElements).reduce(
//           (width, logo) => width + logo.offsetWidth,
//           0
//         );

//         if (totalWidth > 0) {
//           const repetitionsNeeded = Math.ceil(window.innerWidth / totalWidth) + 1;

//           // Only update if numRepetitions is different to prevent infinite loop
//           if (repetitionsNeeded !== numRepetitions) {
//             setNumRepetitions(repetitionsNeeded);

//             const animationDuration = (totalWidth * repetitionsNeeded) / 40;
//             slider.style.animationDuration = `${animationDuration}s`;
//           }
//         }
//       };

//       // Attach load event listener to each image
//       logoElements.forEach((img) => {
//         if (img.complete) {
//           handleImageLoad();
//         } else {
//           img.addEventListener('load', handleImageLoad);
//         }
//       });

//       // Cleanup event listeners on unmount
//       return () => {
//         logoElements.forEach((img) => {
//           img.removeEventListener('load', handleImageLoad);
//         });
//       };
//     }
//     // Remove numRepetitions from the dependency array to avoid infinite loop
//   }, [sliderRef]); // Only run when the component mounts or sliderRef changes

//   return (
//     <div className="logo-container">
//       <div className="logo-slider" ref={sliderRef}>
//         {Array(numRepetitions)
//           .fill(logos)
//           .flat()
//           .map((logo, index) => (
//             <img src={logo} alt={`Logo ${index + 1}`} className="logo" key={index} />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default LogoBar;


// import React, { useEffect, useRef } from 'react';
// import './LogoBar.css';

// const LogoBar: React.FC = () => {
//   const sliderRef = useRef<HTMLDivElement>(null);

//   const logos: string[] = [
//     '/assets/youtube.svg',
//     '/assets/twitch.svg',
//     '/assets/tiktok.svg',
//     '/assets/spotify.svg',
//     '/assets/instagram.svg',
//     '/assets/soundcloud.svg',
//     '/assets/and_more.svg'
//   ];

//   useEffect(() => {
//     if (sliderRef.current) {
//       const slider = sliderRef.current;
//       const logos = slider.querySelectorAll('img');
//       const totalWidth = Array.from(logos).reduce((width, logo) => width + (logo as HTMLImageElement).offsetWidth, 0);

//       // Adjust the animation duration based on total width of the logos
//       // Slower speed by increasing the divisor
//       const animationDuration = totalWidth / 20; // Increase divisor to slow down speed
//       slider.style.animationDuration = `${animationDuration}s`;
//     }
//   }, []);

//   return (
//     <div className="logo-container">
//       <div className="logo-slider" ref={sliderRef}>
//         {logos.concat(logos).concat(logos).map((logo, index) => (
//           <img src={logo} alt={`Logo ${index + 1}`} className="logo" key={index} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LogoBar;



