import { useEffect, useRef } from 'react';
import './FPSRate.scss';

export const FPSRate = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let startTime = Date.now();
    let frameCount = 0;
    let fps = 0;

    function draw() {
      ref.current!.textContent = `FPS: ${fps}`;

      frameCount++;
      const elapsed = Date.now() - startTime;
      if (elapsed >= 1000) {
        fps = frameCount;
        frameCount = 0;
        startTime = Date.now();
      }

      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <div className="fps-rate" ref={ref} />
  );
};

// export const FPSRate = () => {
//   const ref = useRef<HTMLDivElement>(null);
//
//   useEffect(() => {
//     let fps = 0;
//     let lastFrameTime = performance.now();
//
//     function updateFPS() {
//       const currentTime = performance.now();
//       const timeDiff = currentTime - lastFrameTime;
//       fps = Math.round(1000 / timeDiff);
//       lastFrameTime = currentTime;
//
//       ref.current!.textContent = fps.toString();
//       requestAnimationFrame(updateFPS);
//     }
//
//     requestAnimationFrame(updateFPS);
//   }, []);
//
//   return (
//     <div className="fps-rate" ref={ref} />
//   );
// };