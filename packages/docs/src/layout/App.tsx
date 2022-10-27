import React, { FC } from 'react';
import { Box, CircularProgress, CssBaseline } from '@mui/material';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

const Home = React.lazy(() => import('@pages/home/Home'));
const Docs = React.lazy(() => import('@pages/docs/Docs'));
const Examples = React.lazy(() => import('@pages/examples/Examples'));
const GettingStarted = React.lazy(() => import('@pages/getting-started/GettingStarted'));

const LoadingMask: FC = () => (
  <Box
    sx={{
      justifyContent: 'center',
      backgroundColor: '#fff',
      alignItems: 'center',
      position: 'fixed',
      display: 'flex',
      zIndex: 10000,
      bottom: 0,
      right: 0,
      left: 0,
      top: 0,
    }}
  >
    <CircularProgress />
  </Box>
);

export const App: FC = () => (
  <HashRouter>
    <CssBaseline/>
    <Header/>

    <React.Suspense fallback={<LoadingMask />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/examples" element={<Examples />} />
      </Routes>
    </React.Suspense>

    <Footer />
  </HashRouter>
);
