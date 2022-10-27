import { FC, ReactNode, useLayoutEffect, useRef, useState } from 'react';
import { Box, Link, SxProps, Typography } from '@mui/material';
import { Highlighter, Title } from '@components';

type ExampleBlockProps = {
  title: ReactNode;
  example: string;
  id: string;
  children?: ReactNode;
  sx?: SxProps;
};

export const ExampleBlock: FC<ExampleBlockProps> = ({ example, title, id, children, sx }) => {
  const [codeMaxHeight, setCodeMaxHeight] = useState<number>();
  const [isExpanded, setIsExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const [isShown, setIsShown] = useState(true);
  const codeRef = useRef<HTMLDivElement>();

  useLayoutEffect(() => {
    setCodeMaxHeight(codeRef.current.scrollHeight);
    setIsShown(false);
  }, []);

  const toggleVisibility = () => {
    if (isExpanded) {
      setMaxHeight(0);
      setIsExpanded(false);
    } else {
      setMaxHeight(codeMaxHeight);
      setIsExpanded(true);
      setIsShown(true);
    }
  };

  const onTransitionEnd = () => !isExpanded && setIsShown(false);

  return (
    <Box sx={sx}>
      <Title variant="h5" id={id} sx={{ mt: 1 }}>
        {title}
      </Title>
      {children && (
        <Typography component="p" sx={{ mt: 2 }}>
          {children}
        </Typography>
      )}
      <Box sx={{ mt: 2 }}>
        <Link sx={{ cursor: 'pointer' }} onClick={() => toggleVisibility()}>
          {isExpanded ? 'Hide' : 'Show'} example
        </Link>
      </Box>
      <Box
        style={{ transitionDuration: `${codeMaxHeight * 0.8}ms`, maxHeight }}
        sx={{ transitionProperty: 'max-height', overflow: 'hidden', pt: 2 }}
        onTransitionEnd={onTransitionEnd}
        ref={codeRef}
      >
        {isShown && <Highlighter code={example} style={{ margin: 0 }} />}
      </Box>
    </Box>
  );
};
