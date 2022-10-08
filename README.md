# React MVVM Framework

![Weight](https://img.shields.io/badge/Weight-2%20Kb-green)
![ES5](https://img.shields.io/badge/EcmaScript-v.5-blue)
[![Version](https://img.shields.io/npm/v/@yoskutik/react-vvm)](https://www.npmjs.com/package/@yoskutik/react-vvm)
[![license](https://img.shields.io/npm/l/@yoskutik/react-vvm)](https://www.npmjs.com/package/@yoskutik/react-vvm)
[![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@yoskutik/react-vvm?label=Vulnerabilities)](https://www.npmjs.com/package/@yoskutik/react-vvm)
![Jest coverage](https://raw.githubusercontent.com/Yoskutik/react-vvm/master/badges/coverage-jest%20coverage.svg)
[![Tests](https://github.com/Yoskutik/react-vvm/actions/workflows/tests.yml/badge.svg)](https://github.com/Yoskutik/react-vvm/actions/workflows/tests.yml)

React VVM is a library which simplifies the usage of MobX with React by applying MVVM pattern. With this
package you can create views and view models and keep the logic and presentation separately.

The library allows you to form a strict approach to development, as well as simplify the development
process by taking into account the proposed approach.

You can visit a [website version of documentation](https://yoskutik.github.io/react-vvm) for better
understanding how does it work!

## View

The `view` function creates an object that implements the view logic from the MVVM pattern. This means
that view should be responsible for displaying a component in your application.

A view takes a `vmFactory` from the `configuration` and call it to create an instance of a view model.
Also view is responsible for updating view model's fields `parent` and `viewProps` and for calling
view's lifecycle hooks in the instance of a view model.

By default, every view is an observer. But you can configure it.

> One of the issues that solves this package is the purity of the code. The fewer props your components
> have, the easier it will be to understand your code for others. And with this package you can minimize
> amount of props passed by observing view model's fields, its parent's fields and so on. For example, a
> ChildView can observe its View props.

**Every view is memoized**. And as it states below, the fewer props your view having, the faster your
application will work. Since the view uses `memo` function, you can also pass the `propsAreEqual`
function to it.

### Usage

```
view(SomeViewModel)(Component[, options])
```

#### Options

There are two options: `observer` and `propsAreEqual`. If `observer` is `false`, when view will be
created as non-observer component. And `propsAreEqual` is set, it will pass to a `memo` function.

See setting view options:
[Example](https://yoskutik.github.io/react-vvm#/examples?heading=basic.view.options).

### Usage sample

```typescript jsx
import React, { FC } from 'react';
import { view } from '@yoskutik/react-vvm';
import { SomeViewModel } from './path-to-view-model';

export type SomeViewProps = {
  prop1: number;
  prop2?: string;
};

export const SomeView: FC<SomeViewProps> = view(SomeViewModel)(({ viewModel, prop1, prop2 }) => (
  <div>
    {viewModel.field1}
    {prop1}
    {prop2}
  </div>
));
```


### ChildView

As the view, the childView function creates an object that also implements the view logic from the
MVVM pattern. But there's a big difference in these functions - ChildView does not call vmFactory
and uses a view's view model as own one.

By default, every view is an observer and is memoized. And you can change it. The options of
creating child view is same as creating view.

### Usage

```
childView()(Component[, options])
```

See using ChildView:
[Example](https://yoskutik.github.io/react-vvm#/examples?heading=basic.view.childView).

#### Options

See setting options:
[Example](https://yoskutik.github.io/react-vvm#/examples?heading=basic.view.options).

### Usage sample

```typescript jsx
import React, { FC } from 'react';
import { childView } from '@yoskutik/react-vvm';
import type { SomeViewModel } from './path-to-view-model';

export type SomeViewChildProps = {
  prop1: number;
  prop2?: string;
};

export const SomeViewChild: FC<SomeViewChildProps> = childView<SomeViewModel>()(({ viewModel, prop1, prop2 }) => (
  <div>
    {viewModel.field1}
    {prop1}
    {prop2}
  </div>
));
```

## ViewModel

The `ViewModel` class is an object that implements the view model logic from the MVVM pattern. In
general case, the `ViewModel` is designed to store observable fields, as well as logic for updating
them.

The `ViewModel` stores a reference to the props object with which the view was rendered with and
also a reference to the parent `ViewModel`. Also, `ViewModel` has a few view's lifecycle methods.

### What is `parent` for a ViewModel?

The assignment of the parent view model occurs according to the virtual DOM tree. If `View2` is
located somewhere inside `View1`, then `ViewModel1` will be considered the parent of `ViewModel2`.

### Description

#### Properties

`@observable.ref readonly parent`

A link to a parent view model. The parent view model is not defined in the constructor of a current
view model, but in some cases, you may need to hang a reaction on one of the fields of the parent
view of the model. This is a reason why `parent` is observable.

See typing and using parent view model:
[Example](https://yoskutik.github.io/react-vvm#/examples?heading=basic.viewModel.typings).

`@observable.ref readonly viewProps`

A link to a props the view has rendered with. Every time the view is renders it updates this field.
Every view is memoized, and this mean that this object will be updated only if at least 1 property
has been changed.

> Be careful observing `viewProps`. If some of yours observer components or reactions are using
> viewProps, they might update every time any prop has changed, even if the updated prop is not used
> directly. For better understanding of how you should observe the props, please, see the example.

See typing, using and observing `viewProps`:
[Example](https://yoskutik.github.io/react-vvm#/examples?heading=basic.viewModel.viewProps).

#### Methods

`protected onViewMounted?()`

A hook which is called after the view becomes mounted. The function is called in the `useEffect` hook.

`protected onViewMountedSync?()`

A hook which is called after the view becomes mounted. The function is called in the `useLayoutEffect`
hook.

`protected onViewUnmounted?()`

A hook which is called after the view becomes unmounted. The function is called in the
`useEffect` hook.

`protected onViewUnmountedSync?()`

A hook which is called after the view becomes unmounted. The function is called in the
`useLayoutEffect` hook.

`protected onViewUpdated?()`

A hook which is called after the view is rendered besides the first one. This function is also called
in the `useEffect` hook.

`protected onViewUpdatedSync?(newProps?)`

A hook which is called after the view is rendered besides the first one. In this function you can
get new props the view has been rendered with before these props are applied to a `viewProps`. This
function is also called in the `useLayoutEffect` hook.

See using view hooks:
[Example](https://yoskutik.github.io/react-vvm#/examples?heading=basic.viewModel.hooks).

`protected autorun(...args)`

An add-on function for an `autorun` from MobX. When view becomes unmounted, the disposer of this
function will be called automatically.

`protected reaction(...args)`

An add-on function for a `reaction` from MobX. When view becomes unmounted, the disposer of this
function will be called automatically.

`protected addDisposer(disposer)`

A function which adds a disposer that will be called after the view becomes unmounted.

> MobX states that **you should always dispose of reactions**. This is why `autorun`, `reaction` and
> `addDisposer` were added to a `ViewModel`. So, please, use it every time you want to create
> reactions *inside a view model*. Otherwise, you can create a memory leak.

See observing:
[Example](https://yoskutik.github.io/react-vvm#/examples?heading=basic.viewModel.reactions).

### Usage sample

```typescript jsx
import { ViewModel } from '@yoskutik/react-vvm';
import { action, observable, makeObservable } from 'mobx';
import type { ParentViewModel } from '../path-to-parent-view-model';
import type { SomeViewProps } from './path-to-view';

export class SomeViewModel extends ViewModel<ParentViewModel, SomeViewProps> {
  @observable field1 = 0;

  @observable field2 = 'field';

  constructor() {
    super();
    makeObservable(this);
  }

  protected onViewMounted(): void {
    // do something
  }

  @action doSomething = () => {
    // do something
  };
}
```

## Configuration

This library can be configured at the global level.

### Usage

```
configure({ vmFactory, Wrapper })
```

`vmFactory`

This function tells the view how to create an instance of a view model. By default, all view models
are simply creating with a `new` keyword.

See configuring vmFactory:
[Example](https://yoskutik.github.io/react-vvm#/examples?heading=basic.configuration.vmFactory).

`Wrapper`

A wrapper which is used in `view` and `childView`. By default, `Wrapper` is equal to `React.Fragment`.
The wrapper is useful if you want to add an ErrorBoundary or for a debugging purposes.

See configuring the wrapper:
[Basic usage](https://yoskutik.github.io/react-vvm#/examples?heading=basic.configuration.wrapper}),
[ErrorBoundary](https://yoskutik.github.io/react-vvm#/examples?heading=useful.errors).

### Usage sample

```typescript jsx
import { FC, ReactElement } from 'react';
import { configure } from '@yoskutik/react-vvm';

const CustomWrapper: FC<{ children: ReactElement }> = ({ children }) => {
  // do anything you want
  return (
    <div>
      You can also add JSX
      {children}
    </div>
  );
};

configure({
  vmFactory: VM => {
    const viewModel = new VM();
    // do anything you want
    return viewModel;
  },
  Wrapper: CustomWrapper,
});
```
