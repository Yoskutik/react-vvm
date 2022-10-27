import 'reflect-metadata';
import { StrictMode } from 'react';
import { makeObservable } from 'mobx';
import { createRoot } from 'react-dom/client';
import { PrismLight } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { App } from './layout';
import { configure } from '@yoskutik/react-vvm';

PrismLight.registerLanguage('tsx', tsx);

configure({
  vmFactory: VM => {
    const viewModel = new VM();
    makeObservable(viewModel);
    return viewModel;
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={responsiveFontSizes(createTheme())}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
