import { FC, memo } from 'react';
import { Typography } from '@mui/material';
import { Code, Highlighter, PageBlock, PageWithNavigation, TextLink } from '@components';
import preparationExample from './Preparation.example';
import webpackExample from './WebpackIgnoreWarning.example';

const InstallBlock: FC<{ title: string, code: string }> = ({ title, code }) => (
  <PageBlock title={title}>
    <Highlighter
      code={`${code} @yoskutik/react-vvm mobx mobx-react reflect-metadata`}
      language="bash"
      forceShowCopy
    />
  </PageBlock>
);

const GettingStarted: FC = memo(() => (
  <PageWithNavigation hideNavigation>
    <PageBlock
      description="Run one of the following commands to add React VVM and all needed libraries:"
      title="Installation"
    >
      <InstallBlock title="NPM" code="npm install" />
      <InstallBlock title="Yarn" code="yarn add" />
    </PageBlock>
    <PageBlock
      title="Preparation"
      description={(
        <Typography component="p">
          You must import <Code>reflect-metadata</Code> in your main script file so that you can use the decorators.
          You can also configure this package, but this step is optional.
        </Typography>
      )}
    >
      <Highlighter code={preparationExample} />
      <Typography component="p">
        You can use <Code>mobx</Code> with versions <b>4, 5 or 6</b>. And it&apos;s recommended to use the
        6<sup>th</sup> one. In case you want to use versions 4 or 5 you should add the following code to your webpack
        configuration.
      </Typography>
      <Highlighter code={webpackExample} />
    </PageBlock>

    <PageBlock
      title="Usage"
      description={(
        <Typography component="p">
          You can find examples of using this package in
          <TextLink href="#/examples" text="the examples section" />.
        </Typography>
      )}
    />

    <PageBlock
      title="Further read"
      description={(
        <Typography component="p">
          Despite the fact that React VVM is an extremely small library, it can greatly affect the development process.
          For a better understanding of the beauty of this library, we advise you to read an
          <TextLink
            // eslint-disable-next-line max-len
            href="https://dev.to/yoskutik/mobx-with-mvvm-makes-frontend-developers-life-much-more-easier-than-redux-does-547j"
            text="article about MobX and MVVM"
          />.
        </Typography>
      )}
    />
  </PageWithNavigation>
));

export default GettingStarted;
