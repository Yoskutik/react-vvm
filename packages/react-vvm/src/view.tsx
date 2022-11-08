import {
  createContext, memo, useContext, useState, FC, createElement, useLayoutEffect, useRef, forwardRef,
  ForwardedRef, ReactElement, useEffect, PureComponent,
} from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';
import { ViewModel } from './ViewModel';
import { Constructable } from './types';
import { configuration } from './configure';

declare const isDev: boolean;

const ViewModelContext = createContext<ViewModel | null>(null);

const createComponent = <P, V, R>(
  component: BaseComponent<P, V, R> & { $$typeof?: symbol },
  vmFactory: (props?: P) => ViewModel | null,
  options: TViewOptions<P> = {},
  vmName?: string,
) => {
  const isForwardRef = component.$$typeof === Symbol.for('react.forward_ref');

  let Component: any = (props: P, ref: R) => {
    const viewModel = vmFactory(props);

    let element: any = createElement(
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useState(() => (options.observer === false ? component : observer(component)))[0],
      Object.assign({}, props, { viewModel, ref: isForwardRef ? ref : undefined } as any),
    );

    if (vmName) {
      element = createElement(ViewModelContext.Provider, { value: viewModel }, element);
    }

    return createElement(configuration.Wrapper!, null, element);
  };

  if (isForwardRef) {
    Component = forwardRef(Component);
  }

  Component = memo(Component, options.propsAreEqual);

  if (isDev) {
    Component.displayName = `${!vmName ? 'Child' : ''}View${vmName ? `@${vmName}` : ''}`;
  }

  return Component;
};

type TViewOptions<T> = {
  observer?: boolean;
  propsAreEqual?: (prevProps: Readonly<T>, nextProps: Readonly<T>) => boolean;
};

type BaseComponent<P, V, R> = (props: P & { readonly viewModel: V }, ref: ForwardedRef<R>) => ReactElement | null;

const onViewMounted = 'onViewMounted';
const onViewUpdated = 'onViewUpdated';
const onViewUnmounted = 'onViewUnmounted';

const onViewMountedSync = 'onViewMountedSync';
const onViewUpdatedSync = 'onViewUpdatedSync';
const onViewUnmountedSync = 'onViewUnmountedSync';

const useLifeCycle = (
  hook: typeof useEffect,
  viewModel: any,
  onUpdated: string,
  onMounted: string,
  onUnmounted: string,
  updateCb: (() => void) | null,
  unmountCb?: () => void,
) => {
  const wasRendered = useRef(false);

  hook(() => {
    updateCb && updateCb();
    wasRendered.current && viewModel[onUpdated] && viewModel[onUpdated]();
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
 * HOC-function that creates an instance of View. The View creates an instance of the ViewModel; passes its parent;
 * updates viewProps every time the View is re-rendered. Views are memoized with {@link React.memo}.
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
  <P, R>(
    ViewComponent: BaseComponent<P, V, R>,
    options?: TViewOptions<P>,
  ): FC<P> => (
    createComponent(ViewComponent, props => {
      const viewModel: any = useState(() => configuration.vmFactory!(VM))[0];
      const parentViewModel = useContext(ViewModelContext);

      useLifeCycle(useEffect, viewModel, onViewUpdated, onViewMounted, onViewUnmounted, null, () => {
        viewModel.d = viewModel.d.filter((it: () => void) => {
          it();
        });
      });

      useLifeCycle(useLayoutEffect, viewModel, onViewUpdatedSync, onViewMountedSync, onViewUnmountedSync, action(() => {
        viewModel.viewProps = props;
        viewModel.parent = parentViewModel;
      }));

      return viewModel;
    }, options, VM.name || 'Anonymous')
  )
);

/**
 * HOC-function that creates an instance of ChildView. ChildView doesn't create or affect on the ViewModel, it only
 * uses one. ChildViews are memoized with {@link React.memo}.
 */
export const childView = <V extends ViewModel>() => (
  <P, R>(
    ChildViewComponent: BaseComponent<P, V, R>,
    options?: TViewOptions<P>,
  ): FC<P> => (
    createComponent(ChildViewComponent, () => useContext(ViewModelContext), options)
  )
);

/**
 * A class with which you can create a ChildView. The context of this class is equals to a view model. And also
 * there's a typed getter viewModel, which is just an alias of the context field.
 */
export class ChildViewComponent<V, P = unknown, S = unknown, SS = any> extends PureComponent<P, S, SS> {
  static contextType = ViewModelContext;

  get viewModel(): V {
    return this.context as V;
  }
}
