import { Box, styled, Typography } from '@mui/material';
import { FC } from 'react';
import { Highlighter } from '@components';

export const Block = styled(Box)`
  background-color: rgba(0, 0, 0, 0.03);
  justify-content: center;
  display: flex;
  
  &:nth-of-type(2n) {
    background-color: rgba(0, 0, 0, 0.07);
  }
`;

export const CodeExample: FC<{ title: string, code: string }> = ({ title, code }) => (
  <Block>
    <Box sx={{ width: '1000px', padding: 4, maxWidth: '100%' }}>
      <Typography component="h5" variant="h5">
        {title}
      </Typography>
      <Highlighter code={code} sx={{ mt: 3 }} />
    </Box>
  </Block>
);
