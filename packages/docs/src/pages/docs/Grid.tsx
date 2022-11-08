import { FC, ReactElement, ReactNode } from 'react';
import { Box, Divider } from '@mui/material';
import { Code, Title } from '@components';

export const Grid: FC<{ children: ReactElement[] }> = ({ children }) => (
  <Box gap={2} sx={{ display: 'grid', mt: 2, gridTemplateColumns: { xs: 'auto', md: 'auto auto' } }}>
    {children}
  </Box>
);

export const GridItem: FC<{ item: string, children: ReactNode }> = ({ item, children }) => (
  <>
    <Box sx={{ mt: { xs: 2, md: 0 } }}>
      <Code>{item}</Code>
    </Box>
    <div>
      {children}
    </div>
  </>
);

export const GridDivider: FC = () => <Divider sx={{ gridColumn: { md: '1 / 3' } }} />;

export const GridTitle: FC<{ id: string, text: string }> = ({ id, text }) => (
  <Title id={id} sx={{ gridColumn: { md: '1 / 3' } }} text={text} variant="h5" />
);
