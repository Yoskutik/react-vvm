import { FC, memo } from 'react';
import { Box, Grid, SxProps, Typography } from '@mui/material';
import { TextLink } from '@components';
import { Features } from './Features';
import { Block, CodeExample } from './components';
import { ItsFlexible } from './ItsFlexible';
import contextExample from './InsteadContext.example';
import separatedExample from './SeparatedLogic.example';
import hooksExample from './Hooks.example';

const Badges: FC = () => (
  <Box sx={{ backgroundColor: 'rgba(0,0,0,0.03)' }}>
    <Grid justifyContent="center" gap={1} container sx={{ width: '1200px', m: '0 auto', p: 2, maxWidth: '100%' }}>
      <img src="https://img.shields.io/npm/v/@yoskutik/react-vvm" alt="NPM version" />
      <img src="https://img.shields.io/badge/EcmaScript-v.6-blue" alt="EcmaScript 6" />
      <img src="https://raw.githubusercontent.com/Yoskutik/react-vvm/master/badges/weight.svg" alt="Weight" />
      <img src="https://img.shields.io/npm/l/@yoskutik/react-vvm" alt="License" />
      <img
        src="https://img.shields.io/snyk/vulnerabilities/npm/@yoskutik/react-vvm?label=Vulnerabilities"
        alt="Vulnerabilities"
      />
      <img
        src="https://raw.githubusercontent.com/Yoskutik/react-vvm/master/badges/coverage-jest%20coverage.svg"
        alt="Coverage"
      />
      <img src="https://github.com/Yoskutik/react-vvm/actions/workflows/build.yml/badge.svg" alt="Build" />
    </Grid>
  </Box>
);

const Description: FC<{ children: string, sx?: SxProps }> = ({ children, sx }) => (
  <Typography component="p" sx={{ fontSize: '1.3rem', textIndent: '3rem', textAlign: 'justify', ...sx }}>
    {children}
  </Typography>
);

const Home: FC = memo(() => (
  <Box>
    <Badges />
    <Box>
      <Block style={{ height: '280px', alignItems: 'center', padding: '1rem 1rem 3.2rem' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h2" component="h1">
            React VVM
          </Typography>
          <Typography variant="h5" component="h2" sx={{ mt: 2 }}>
            An implementation of MVVM for React applications with MobX
          </Typography>
        </Box>
      </Block>

      <Block>
        <Box sx={{ width: '800px', padding: 4, maxWidth: '100%' }}>
          <Description>
            React VVM is a library which simplifies the usage of MobX with React by applying MVVM pattern. With this
            package you can create views and view models and keep the logic and presentation separately.
          </Description>
          <Description sx={{ mt: 2 }}>
            The library allows you to form a strict approach to development, as well as simplify the development
            process by taking into account the proposed approach.
          </Description>
        </Box>
      </Block>

      <Features />
      <CodeExample
        title="You can easily separate your business logic and user interface controls"
        code={separatedExample}
      />
      <CodeExample title="You can use it instead of React Context API" code={contextExample} />
      <CodeExample title="You can get rid of hooks" code={hooksExample} />
      <ItsFlexible />

      <Block>
        <Box sx={{ width: '1000px', padding: 4, maxWidth: '100%' }}>
          <Typography component="h5" variant="h5">
            And there&apos;s more!
          </Typography>
          <Typography component="p" sx={{ mt: 2, fontSize: '1.2rem' }}>
            You can check the
            <TextLink href="#/examples" text="examples page" />
            {' '}
            and see some other
            <TextLink id="useful-examples" text="useful cases" />!
          </Typography>
        </Box>
      </Block>
    </Box>
  </Box>
));

export default Home;
