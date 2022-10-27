import { FC } from 'react';
import { Box, Card, SxProps, Typography } from '@mui/material';
import { Block } from './components';

const FeatureCard: FC<{ title: string, children: string, sx?: SxProps }> = ({ title, children, sx }) => (
  <Card sx={{ p: 1.5, width: 'calc((1200px - 9 * 8px - 4rem) / 4)', ...sx }}>
    <Typography component="h5" variant="h5" sx={{ textDecoration: 'underline' }}>
      {title}
    </Typography>
    <Typography component="p" sx={{ mt: 2 }}>
      {children}
    </Typography>
  </Card>
);

export const Features: FC = () => (
  <Block>
    <Box
      sx={{
        justifyContent: 'center',
        maxWidth: '100%',
        flexWrap: 'wrap',
        display: 'flex',
        width: '1200px',
        padding: 4,
        gap: 3,
      }}
    >
      <FeatureCard title="Simple to use">
        There&apos;s literally 2 functions and 1 abstract class in this packages. So, it won&apos;t be difficult for
        you to learn it.
      </FeatureCard>
      <FeatureCard title="Well typed">
        The library not only can be easily used with TypeScript, it is actually recommended for use with TypeScript!
      </FeatureCard>
      <FeatureCard title="Lightweight">
        The size of the library is less than 2 Kb.
      </FeatureCard>
      <FeatureCard title="Easy to extend">
        The library allows you to create easily extensible and scalable applications.
      </FeatureCard>
    </Box>
  </Block>
);
