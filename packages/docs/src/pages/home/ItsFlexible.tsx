import { FC } from 'react';
import { Box, Link, Typography } from '@mui/material';
import { Code } from '@components';
import { Block } from './components';

export const ItsFlexible: FC = () => (
  <Block>
    <Box sx={{ width: '1000px', padding: 4, maxWidth: '100%' }}>
      <Typography component="h5" variant="h5">
        It&apos;s very flexible!
      </Typography>
      <Typography component="p" sx={{ mt: 2, fontSize: '1.2rem' }}>
        React VVM depends on several packages, but you are free to choose any recent version of these packages.
      </Typography>
      <Typography component="p" sx={{ mt: 2, fontSize: '1.2rem' }}>
        For <Code>react</Code> the available versions are <b>16, 17 and 18</b>.
      </Typography>
      <Typography component="p" sx={{ mt: 2, fontSize: '1.2rem' }}>
        For <Code>mobx-react</Code> the available versions are <b>6 and 7</b>.
      </Typography>
      <Typography component="p" sx={{ mt: 2, fontSize: '1.2rem' }}>
        For <Code>mobx</Code> the available versions are <b>4, 5 and 6</b>. But, please, see the {' '}
        <Link href="#/getting-started">
          Getting started
        </Link>
        {' '} section before using the 4<sup>th</sup> or 5<sup>th</sup> versions.
      </Typography>
    </Box>
  </Block>
);
