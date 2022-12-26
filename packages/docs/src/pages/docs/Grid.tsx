import { FC, ReactElement, ReactNode } from 'react';
import { Box, Divider, Grid as MUIGrid } from '@mui/material';
import { Code, Title } from '@components';

export const Grid: FC<{ children: ReactElement[] }> = ({ children }) => (
  <Box gap={2} sx={{ display: 'grid', gridTemplateColumns: { xs: 'auto', md: 'auto auto' } }}>
    {children}
  </Box>
);

export const GridItem: FC<{ item: string, children: ReactNode }> = ({ item, children }) => (
  <>
    <Box sx={{ mt: { xs: 2, md: 0 } }}>
      <Code>{item}</Code>
    </Box>
    <MUIGrid container direction="column" gap={2}>
      {children}
    </MUIGrid>
  </>
);

export const GridDivider: FC = () => <Divider sx={{ gridColumn: { md: '1 / 3' } }} />;

export const GridTitle: FC<{ text: string }> = ({ text }) => (
  <Title sx={{ gridColumn: { md: '1 / 3' } }} text={text} variant="h5" />
);
