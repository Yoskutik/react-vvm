import {
  createContext, memo, PropsWithChildren, useContext, useState, FC, createElement, useLayoutEffect, useRef, forwardRef,
  RefAttributes, ForwardedRef, ReactElement,
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

const createComponent = (component, isObserver, viewModel, props, ref) => (
  createElement(
    configuration.Wrapper,
    null,
    createElement(
      ViewModelContext.Provider,
      { value: viewModel },
      createElement(
        useValue(() => (isObserver === false ? component : observer(component))),
        Object.assign({}, props, { viewModel, ref }),
      ),
    ),
  )
);

const create = (component, vmFactory: (props?) => ViewModel, options: TViewOptions<any> = {}) => {
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
  propsAreEqual?: (prevProps: Readonly<PropsWithChildren<T>>, nextProps: Readonly<PropsWithChildren<T>>) => boolean;
};

type BaseComponent<T, R, Rf> = (props: T & { viewModel: R }, ref: ForwardedRef<Rf>) => ReactElement | null;

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
export const view = <R extends ViewModel>(VM: Constructable<R>) => (
  <T extends unknown = unknown, Rf extends unknown = unknown>(
    ViewComponent: BaseComponent<T, R, Rf>,
    options?: TViewOptions<T>,
  ): FC<T> => (
    create(ViewComponent, props => {
      const viewModel = useValue(() => configuration.vmFactory(VM)) as any;
      const hasBeenRendered = useRef(false);
      const parent = useContext(ViewModelContext);

      useLayoutEffect(() => runInAction(() => {
        hasBeenRendered.current && viewModel.onViewUpdated && viewModel.onViewUpdated(props);
        viewModel.parent = parent;
        viewModel.viewProps = props;
      }));

      useLayoutEffect(() => {
        viewModel.onViewMounted && viewModel.onViewMounted();
        hasBeenRendered.current = true;
        return () => viewModel.unmount();
      }, []);

      return viewModel;
    }, options)
  )
);

/**
 * HOC-function to create an instance of ViewChild. ViewChild doesn't affect on the ViewModel.
 * ChildViews are memoized {@see memo}.
 */
export const viewChild = <R extends ViewModel>() => (
  <T extends unknown = unknown, Rf extends unknown = unknown>(
    ChildViewComponent: BaseComponent<T, R, Rf>,
    options?: TViewOptions<T>,
  ): FC<T> => (
    create(ChildViewComponent, () => useContext(ViewModelContext), options)
  )
);

export type ViewWithRef<T, R = unknown> = FC<R & RefAttributes<T>>;
