import { FC, ReactNode, useLayoutEffect, useRef, useState, TransitionEvent } from 'react';
import { Box, Link, Typography } from '@mui/material';
import { Highlighter, PageBlock } from '@components';

type Props = {
  title: ReactNode;
  example: string;
  children?: ReactNode;
};

export const ExampleBlock: FC<Props> = ({ example, title, children }) => {
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

  const onTransitionEnd = (evt: TransitionEvent<HTMLDivElement>) => !isExpanded
    && evt.propertyName === 'max-height' && setIsShown(false);

  return (
    <PageBlock
      description={children && <Typography component="p">{children}</Typography>}
      forcedLevel={3}
      title={title}
    >
      <Link sx={{ cursor: 'pointer' }} onClick={() => toggleVisibility()}>
        {isExpanded ? 'Hide' : 'Show'} example
      </Link>
      <Box
        style={{ transitionDuration: `${codeMaxHeight * 0.8}ms`, maxHeight, marginBottom: isExpanded ? 0 : -16 }}
        onTransitionEnd={onTransitionEnd}
        ref={codeRef}
        sx={{
          transitionProperty: 'max-height, margin',
          borderRadius: '0.4rem',
          boxSizing: 'initial',
          overflow: 'hidden',
          maxWidth: '100%',
        }}
      >
        {isShown && <Highlighter code={example} style={{ margin: 0 }} forceShowCopy={isShown} />}
      </Box>
    </PageBlock>
  );
};
