import { FC } from 'react';
import { configure as configureVVM, view, ViewModel } from '@yoskutik/react-vvm';
import { act, cleanup, render } from '@testing-library/react';
import { makeObservable, observable, configure as configureMobx, observe } from 'mobx';

configureMobx({
  enforceActions: 'never',
});

describe('Common use of ViewModel with reactions', () => {
  let vm: ViewModel;

  configureVVM({
    vmFactory: VM => vm = new VM() as any,
  });

  test('Props reactions', async () => {
    type ViewProps = { prop1: number, prop2: number };

    class SomeViewModel extends ViewModel<unknown, ViewProps> {
      protected onViewMounted() {
        this.reaction(() => this.viewProps, this.anyPropHasChanged);
        this.reaction(() => this.viewProps!.prop1, this.onePropHasChanged);
      }

      anyPropHasChanged = jest.fn();

      onePropHasChanged = jest.fn();
    }

    const View: FC<ViewProps> = view(SomeViewModel)(({ prop1, prop2 }) => (
      <div>{prop1 + prop2}</div>
    ));

    const { rerender } = render(<View prop1={0} prop2={0} />);
    const viewModel = vm as SomeViewModel;

    const checkCalls = (a: number, b: number, props?: ViewProps) => {
      props && rerender(<View {...props} />);
      expect(viewModel.onePropHasChanged).toBeCalledTimes(a);
      expect(viewModel.anyPropHasChanged).toBeCalledTimes(b);
    };

    checkCalls(0, 0);
    checkCalls(0, 1, { prop1: 0, prop2: 1 });
    checkCalls(1, 2, { prop1: 1, prop2: 1 });
    checkCalls(1, 2, { prop1: 1, prop2: 1 });
  });

  test('Reactions die on unmount', () => {
    class SomeViewModel extends ViewModel {
      @observable a = 0;

      constructor() {
        super();
        makeObservable(this);
        this.reaction(() => this.a, this.react);
        this.autorun(() => {
          this.a;
          this.run();
        });
        this.addDisposer(
          observe(this, 'a', this.observeFn),
        );
      }

      react = jest.fn();

      run = jest.fn();

      observeFn = jest.fn();
    }

    const View = view(SomeViewModel)(() => <div />);
    render(<View/>);
    const viewModel = vm as SomeViewModel;

    const checkCalls = (c: number, a?: number) => {
      a !== undefined && act(() => {
        viewModel.a = a;
      });
      expect(viewModel.react).toBeCalledTimes(c);
      expect(viewModel.observeFn).toBeCalledTimes(c);
      expect(viewModel.run).toBeCalledTimes(c + 1);
    };

    checkCalls(0);
    checkCalls(1, 1);
    checkCalls(1, 1);
    checkCalls(2, 2);
    cleanup();
    checkCalls(2, 3);
    checkCalls(2, 4);

    expect((viewModel as any).d).toHaveLength(0);
  });
});
