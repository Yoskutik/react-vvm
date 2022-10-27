import 'reflect-metadata';
import { configure as configureMobx } from 'mobx';
import { configure as configureVVM } from '@yoskutik/react-vvm';
import { createRoot } from 'react-dom/client';
import { container } from 'tsyringe';
import { App } from './views/App';

configureMobx({
  enforceActions: 'never',
});

configureVVM({
  vmFactory: VM => container.resolve(VM),
});

createRoot(document.getElementById('root')).render(<App />);
