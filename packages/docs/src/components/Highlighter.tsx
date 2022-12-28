import { CSSProperties, FC, useState } from 'react';
import { PrismLight } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Alert, Box, IconButton, Snackbar, styled, SxProps } from '@mui/material';
import { CopyAll } from '@mui/icons-material';

const Block = styled(Box)`
  position: relative;
  
  &:hover .highlighter-copy-button {
    opacity: 1;
  }
`;

type Props = {
  code: string;
  forceShowCopy?: boolean;
  language?: string
  style?: CSSProperties;
  sx?: SxProps;
};

export const Highlighter: FC<Props> = ({ code, sx, style, forceShowCopy, language = 'tsx' }) => {
  const [showSnack, setShowSnack] = useState(false);

  const onCopyClick = () => {
    navigator.clipboard.writeText(code).then(() => setShowSnack(true));
  };

  return (
    <Block sx={sx}>
      <PrismLight
        customStyle={{ borderRadius: '0.4rem', boxShadow: '0 1px 4px 0 rgba(0,0,0,0.1)', margin: 0, ...style }}
        language={language}
        style={dracula}
      >
        {code}
      </PrismLight>
      {(forceShowCopy === undefined ? code.includes('\n') : forceShowCopy) && (
        <IconButton
          sx={{ position: 'absolute', top: 7, right: 7, opacity: 0, transitionProperty: 'opacity' }}
          className="highlighter-copy-button"
          onClick={onCopyClick}
        >
          <CopyAll sx={{ fill: '#e0e0e0' }} />
        </IconButton>
      )}
      <Snackbar open={showSnack} autoHideDuration={2000} onClose={() => setShowSnack(false)}>
        <Alert onClose={() => setShowSnack(false)} severity="info" sx={{ width: '100%' }}>
          The code was copied!
        </Alert>
      </Snackbar>
    </Block>
  );
};
