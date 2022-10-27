import { FC, memo } from 'react';
import { Box, Link, Typography } from '@mui/material';
import { Code, Highlighter } from '@components';
import preparationExample from './Preparation.example';
import webpackExample from './WebpackIgnoreWarning.example';

const GettingStarted: FC = memo(() => (
  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    <Box sx={{ width: '1200px', maxWidth: '100%', p: 4 }}>
      <Box>
        <Typography component="h4" variant="h4">
          Installation
        </Typography>
        <Typography component="p" sx={{ mt: 2 }}>
          Run one of the following commands to add React VVM and all needed libraries:
        </Typography>
        <Typography component="h5" variant="h5" sx={{ mt: 4 }}>
          npm
        </Typography>
        <Highlighter
          code="npm install @yoskutik/react-vvm mobx mobx-react reflect-metadata"
          language="bash"
          sx={{ mt: 2 }}
          forceShowCopy
        />
        <Typography component="h5" variant="h5" sx={{ mt: 2 }}>
          yarn
        </Typography>
        <Highlighter
          code="yarn add @yoskutik/react-vvm mobx mobx-react reflect-metadata"
          language="bash"
          sx={{ mt: 2 }}
          forceShowCopy
        />
      </Box>

      <Box sx={{ mt: 8 }}>
        <Typography component="h4" variant="h4">
          Preparation
        </Typography>
        <Typography component="p" sx={{ mt: 4 }}>
          You must import <Code>reflect-metadata</Code> in your main script file so that you can use the decorators.
          You can also configure this package, but this step is optional.
        </Typography>
        <Highlighter code={preparationExample} sx={{ mt: 2 }} />
        <Typography component="p" sx={{ mt: 4 }}>
          You can use <Code>mobx</Code> with versions <b>4, 5 or 6</b>. And it&apos;s recommended to use the
          6<sup>th</sup> one. In case you want to use versions 4 or 5 you should add the following code to your webpack
          configuration.
        </Typography>
        <Highlighter code={webpackExample} sx={{ mt: 2 }} />
      </Box>

      <Box sx={{ mt: 8 }}>
        <Typography component="h4" variant="h4">
          Usage
        </Typography>
        <Typography component="p" sx={{ mt: 2 }}>
          You can find examples of using this package in {' '}
          <Link href="#/examples">
            the examples section
          </Link>.
        </Typography>
      </Box>
    </Box>
  </Box>
));

export default GettingStarted;
