import { useEffect, useMemo, useRef, useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import { createPortal } from 'react-dom';

export const ReturnButton = () => {
  const root = useMemo(() => document.querySelector('#root'), []);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.intersectionRatio === 0);
    });

    const el = ref.current;
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  const buttonPortal = createPortal(
    <Tooltip title={isVisible ? 'Scroll to top' : ''}>
      <IconButton
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ pointerEvents: isVisible ? undefined : 'none' }}
        sx={{
          transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          transform: 'rotate(-90deg)',
          backgroundColor: '#c2e0ff',
          opacity: isVisible ? 1 : 0,
          position: 'fixed',
          bottom: 20,
          right: 20,

          '&:hover': {
            backgroundColor: '#99ccf3',
          },
        }}
      >
        <ChevronRight />
      </IconButton>
    </Tooltip>,
    root,
  );

  return (
    <>
      <div ref={ref} />
      {buttonPortal}
    </>
  );
};
