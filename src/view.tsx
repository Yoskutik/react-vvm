import {
  createContext, memo, useContext, useState, FC, createElement, useLayoutEffect, useRef, forwardRef, RefAttributes,
  ForwardedRef, ReactElement, useEffect,
} from 'react';
import { observer } from 'mobx-react';
import { runInAction } from 'mobx';
import { ViewModel } from './ViewModel';
import { Constructable } from './types';
import { configuration } from './configure';

const ViewModelContext = createContext<ViewModel>(null);

/**
 * React documentation says:
 * > You may rely on useMemo as a performance optimization, not as a semantic guarantee. In the future, React may choose
 * > to “forget” some previously memoized values and recalculate them on next render, e.g. to free memory for offscreen
 * > components. Write your code so that it still works without useMemo — and then add it to optimize performance.
 *
 * Which is why useState is used instead of useMemo
 */
const useValue = <T extends unknown>(state: () => T) => useState(state)[0];

const createComponent = (component: FC, isObserver: boolean, viewModel: ViewModel, props, ref) => (
  createElement(
    configuration.Wrapper,
    null,
    createElement(
      ViewModelContext.Provider,
      { value: viewModel },
      createElement(
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useValue(() => (isObserver === false ? component : observer(component))),
        Object.assign({}, props, { viewModel, ref }),
      ),
    ),
  )
);

const createComponentWithHOCs = (
  component: FC & { $$typeof?: symbol },
  vmFactory: (props?) => ViewModel,
  options: TViewOptions<any> = {},
) => {
  const isForwardRef = component.$$typeof === Symbol.for('react.forward_ref');

  let hoc = (props, ref) => (
    createComponent(component, options.observer, vmFactory(props), props, isForwardRef ? ref : undefined)
  );

  if (isForwardRef) {
    hoc = forwardRef(hoc);
  }

  return memo(hoc, options.propsAreEqual);
};

type TViewOptions<T> = {
  observer?: boolean;
  propsAreEqual?: (prevProps: Readonly<T>, nextProps: Readonly<T>) => boolean;
};

type BaseComponent<P, V, R> = (props: P & { viewModel: V }, ref: ForwardedRef<R>) => ReactElement | null;

const onViewMounted = 'onViewMounted';
const onViewMountedSync = 'onViewMountedSync';
const onViewUnmounted = 'onViewUnmounted';
const onViewUnmountedSync = 'onViewUnmountedSync';
const onViewUpdated = 'onViewUpdated';
const onViewUpdatedSync = 'onViewUpdatedSync';

const useLifeCycle = (hook, viewModel, onUpdated, onMounted, onUnmounted, updateCb, props, unmountCb?) => {
  const wasRendered = useRef(false);

  hook(() => {
    wasRendered.current && viewModel[onUpdated] && viewModel[onUpdated](props);
    updateCb && updateCb();
  });

  hook(() => {
    viewModel[onMounted] && viewModel[onMounted]();
    wasRendered.current = true;

    return () => {
      unmountCb && unmountCb();
      viewModel[onUnmounted] && viewModel[onUnmounted]();
    };
  }, []);
};

/**
 * HOC-function to create an instance of View.
 * The View:
 * * creates an instance of the ViewModel;
 * * pass for the created ViewModel its parent ViewModel;
 * * pass own props every time View updates.
 *
 * Views are memoized {@see memo}.
 * @param VM - ViewModel class.
 *
 * @example
 * type SomeViewProps = {
 *   prop1: number;
 *   prop2: string;
 * }
 *
 * const SomeView: FC<SomeViewProps> = view(SomeViewModel)(({ viewModel, prop1, prop2 }) => (
 *   JSX here
 * ));
 */
export const view = <V extends ViewModel>(VM: Constructable<V>) => (
  <P extends unknown = unknown, R = unknown>(
    ViewComponent: BaseComponent<P, V, R>,
    options?: TViewOptions<P>,
  ): FC<P> => (
    createComponentWithHOCs(ViewComponent, props => {
      const viewModel = useValue(() => configuration.vmFactory(VM)) as any;
      const parent = useContext(ViewModelContext);

      useLifeCycle(useEffect, viewModel, onViewUpdated, onViewMounted, onViewUnmounted, undefined, undefined, () => {
        viewModel.d = viewModel.d.filter(it => {
          it();
        });
      });

      useLifeCycle(useLayoutEffect, viewModel, onViewUpdatedSync, onViewMountedSync, onViewUnmountedSync, () => {
        runInAction(() => {
          viewModel.parent = parent;
          viewModel.viewProps = props;
        });
      }, props);

      return viewModel;
    }, options)
  )
);

/**
 * HOC-function to create an instance of ChildView. ChildView doesn't affect on the ViewModel.
 * ChildViews are memoized {@see memo}.
 */
export const childView = <V extends ViewModel>() => (
  <P extends unknown = unknown, R = unknown>(
    ChildViewComponent: BaseComponent<P, V, R>,
    options?: TViewOptions<P>,
  ): FC<P> => (
    createComponentWithHOCs(ChildViewComponent, () => useContext(ViewModelContext), options)
  )
);

export type ViewWithRef<T, R = unknown> = FC<R & RefAttributes<T>>;
