import 'reflect-metadata';
import { render } from 'react-dom';
import { configure as configureMobx, makeObservable } from 'mobx';
import { configure as configureVVM } from '@yoskutik/react-vvm';
import { App } from './views/App';

configureMobx({
  enforceActions: 'never',
});

configureVVM({
  vmFactory: VM => {
    const viewModel = new VM();
    makeObservable(viewModel);
    return viewModel;
  },
});

render(<App />, document.getElementById('root'));
