import 'reflect-metadata';
import { makeObservable } from 'mobx';
import { createRoot } from 'react-dom/client';
import { PrismLight } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { configure } from '@yoskutik/react-vvm';
import { App } from './layout';

PrismLight.registerLanguage('tsx', tsx);

configure({
  vmFactory: VM => makeObservable(new VM()),
});

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={responsiveFontSizes(createTheme())}>
    <App />
  </ThemeProvider>,
);
