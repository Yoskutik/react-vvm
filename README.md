# [React VVM](https://yoskutik.github.io/react-vvm/)
### An implementation of MVVM for React applications with MobX

[![Version](https://img.shields.io/npm/v/@yoskutik/react-vvm)](https://www.npmjs.com/package/@yoskutik/react-vvm)
[![ES6](https://img.shields.io/badge/EcmaScript-v.6-blue)](https://github.com/yoskutik/react-vvm)
[![Weight](https://raw.githubusercontent.com/Yoskutik/react-vvm/master/badges/weight.svg)](https://github.com/yoskutik/react-vvm)
[![license](https://img.shields.io/npm/l/@yoskutik/react-vvm)](https://www.npmjs.com/package/@yoskutik/react-vvm)
[![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@yoskutik/react-vvm?label=Vulnerabilities)](https://www.npmjs.com/package/@yoskutik/react-vvm)
![Jest coverage](https://raw.githubusercontent.com/Yoskutik/react-vvm/master/badges/coverage-jest%20coverage.svg)
[![Build](https://github.com/Yoskutik/react-vvm/actions/workflows/build.yml/badge.svg)](https://github.com/Yoskutik/react-vvm/actions/workflows/build.yml)

React VVM is a library which simplifies the usage of MobX with React by applying MVVM pattern. With this
package you can create views and view models and keep the logic and presentation separately.

The library allows you to form a strict approach to development, as well as simplify the development
process by taking into account the proposed approach.

## Documentation

You can find the React VVM documentation [on the website](https://yoskutik.github.io/react-vvm/).

The documentation is divided into several sections:

* [Getting Started](https://yoskutik.github.io/react-vvm#/getting-started)
* [API Description](https://yoskutik.github.io/react-vvm#/docs)
* [Examples](https://yoskutik.github.io/react-vvm#/examples)

## Examples

Here is a short example to get you started:

```typescript jsx
import { action, observable, makeObservable } from 'mobx';
import { view, ViewModel } from '@yoskutik/react-vvm';

class CounterViewModel extends ViewModel {
  @observable count = 0;

  constructor() {
    super();
    makeObservable(this);
  }

  @action increase = () => {
    this.count++;
  };
}

const Counter = view(CounterViewModel)(({ viewModel }) => (
  <div>
    <span>Counter: {viewModel.count}</span>
    <button onClick={() => viewModel.increase()}>increase</button>
  </div>
));
```

### Or even simpler

You don't need to call `makeObservable` in each ViewModel,
if you [configure](https://yoskutik.github.io/react-vvm/#/examples?heading=useful-examples.automatic-makeobservable)
this package.

```typescript jsx
import { action, observable, makeObservable } from 'mobx';
import { view, ViewModel } from '@yoskutik/react-vvm';

class CounterViewModel extends ViewModel {
  @observable count = 0;

  // By the way, this function is automatially memoized,
  //  so you down need to use useMemo or useCallback
  @action handleClick = () => {
    this.count++;
  };
}

const Counter = view(CounterViewModel)(({ viewModel }) => (
  <div>
    <span>Counter: {viewModel.count}</span>
    <button onClick={viewModel.handleClick}>increase</button>
  </div>
));
```

That's a basic counter example. The component consists of JSX code only. All the logic is declared
in the view model. This is a fairly short example. However, the larger the component becomes, the
better the benefits of the MVVM approach are seen.

We have several short examples [on the website](https://yoskutik.github.io/react-vvm#/examples). And
also there are several
[full-fledged examples](https://github.com/Yoskutik/react-vvm/tree/master/examples)
of applications with React VVM

### License

React VVM is [MIT licensed](https://github.com/Yoskutik/react-vvm/tree/master/LICENSE.txt).
