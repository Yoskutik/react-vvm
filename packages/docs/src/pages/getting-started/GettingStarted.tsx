import { FC, memo, ReactNode } from 'react';
import { Box, Link, Typography } from '@mui/material';
import { Code, Highlighter } from '@components';
import preparationExample from './Preparation.example';
import webpackExample from './WebpackIgnoreWarning.example';

const Block: FC<{ children: ReactNode, mt?: number, title: string }> = ({ children, mt = 8, title }) => (
  <Box sx={{ mt }}>
    <Typography component="h4" variant="h4">
      {title}
    </Typography>
    {children}
  </Box>
);

const BashBlock: FC<{ title: string, code: string }> = ({ title, code }) => (
  <>
    <Typography component="h5" variant="h5" sx={{ mt: 4 }}>
      {title}
    </Typography>
    <Highlighter code={code} language="bash" sx={{ mt: 2 }} forceShowCopy />
  </>
);

const GettingStarted: FC = memo(() => (
  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    <Box sx={{ width: '1200px', maxWidth: '100%', p: 4 }}>
      <Block title="Installation" mt={0}>
        <Typography component="p" sx={{ mt: 2 }}>
          Run one of the following commands to add React VVM and all needed libraries:
        </Typography>
        <BashBlock title="npm" code="npm install @yoskutik/react-vvm mobx mobx-react reflect-metadata" />
        <BashBlock title="yarn" code="yarn add @yoskutik/react-vvm mobx mobx-react reflect-metadata" />
      </Block>

      <Block title="Preparation">
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
      </Block>

      <Block title="Usage">
        <Typography component="p" sx={{ mt: 2 }}>
          You can find examples of using this package in {' '}
          <Link href="#/examples">
            the examples section
          </Link>.
        </Typography>
      </Block>

      <Block title="Further read">
        <Typography component="p" sx={{ mt: 2 }}>
          Despite the fact that React VVM is an extremely small library, it can greatly affect the development process.
          For a better understanding of the beauty of this library, we advise you to read an article about MobX and
          MVVM: {' '}
          <Link
            rel="noreferrer"
            target="_blank"
            // eslint-disable-next-line max-len
            href="https://dev.to/yoskutik/mobx-with-mvvm-makes-frontend-developers-life-much-more-easier-than-redux-does-547j"
          >
            English
          </Link>.
        </Typography>
      </Block>
    </Box>
  </Box>
));

export default GettingStarted;
