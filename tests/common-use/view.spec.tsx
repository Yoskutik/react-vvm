import { useRef, FC, forwardRef, createRef } from 'react';
import { viewChild, configure, view, ViewModel, ViewWithRef } from '@yoskutik/react-vvm';
import { act, render, screen } from '@testing-library/react';
import { configure as configureMobx, makeObservable, observable } from 'mobx';

configureMobx({
  enforceActions: 'never',
});

describe('Common use of View and ViewChild', () => {
  let vm: SomeViewModel;

  configure({
    vmFactory: VM => vm = new VM() as any,
  });

  class SomeViewModel extends ViewModel {
    @observable n = 0;

    constructor() {
      super();
      makeObservable(this);
    }
  }

  const testComponentObservability = (Component: FC, isObserver: boolean) => {
    render(<Component/>);

    const { n } = vm;
    Array(5).fill(null).forEach(() => {
      act(() => {
        vm.n++;
      });
      expect(screen.getByText((isObserver ? vm.n : n).toString())).toBeInTheDocument();
    });
  };

  type PropsEqualityViewProps = {
    a: number;
    b: number;
  };

  const propsAreEqual = (prevProps: PropsEqualityViewProps, nextProps: PropsEqualityViewProps) => (
    prevProps.a + prevProps.b === nextProps.a + nextProps.b
  );

  const testPropsEqualityMechanism = (Component: FC<PropsEqualityViewProps>) => {
    const { rerender } = render(<Component a={2} b={3} />);
    expect(screen.getByRole('spinbutton', { name: 'Render count' })).toHaveValue(1);

    [
      [2, 3, 1],
      [3, 2, 1],
      [2, 2, 2],
      [2, 2, 2],
      [1, 3, 2],
    ].forEach(([a, b, renderCount]) => {
      rerender(<Component a={a} b={b} />);
      expect(screen.getByRole('spinbutton', { name: 'Render count' })).toHaveValue(renderCount);
    });
  };

  describe('View', () => {
    describe('Observation', () => {
      test('Is observer', () => {
        const View = view(SomeViewModel)(({ viewModel }) => (
          <div>{viewModel.n}</div>
        ));

        testComponentObservability(View, true);
      });

      test('Is not observer', () => {
        const View = view(SomeViewModel)(({ viewModel }) => (
          <div>{viewModel.n}</div>
        ), { observer: false });

        testComponentObservability(View, false);
      });
    });

    test('Memo\'s propsAreEqual', () => {
      const View: FC<PropsEqualityViewProps> = view(SomeViewModel)(({ a, b }) => {
        const renderCount = useRef(0);
        renderCount.current++;

        return (
          <>
            <div>{a + b}</div>
            <input type="number" value={renderCount.current} aria-label="Render count" onChange={jest.fn} />
          </>
        );
      },  { propsAreEqual });

      testPropsEqualityMechanism(View);
    });

    test('ForwardRef', () => {
      const View: ViewWithRef<HTMLDivElement> = view(SomeViewModel)(
        forwardRef((_, ref) => (
          <div ref={ref}>
            Component
          </div>
        )),
      );

      const ref = createRef<HTMLDivElement>();
      render(<View ref={ref} />);

      expect(screen.getByText('Component')).toEqual(ref.current);
    });
  });

  describe('ViewChild', () => {
    describe('Observation', () => {
      test('Is observer', () => {
        const ViewChild = viewChild<SomeViewModel>()(({ viewModel }) => (
          <span>{viewModel.n}</span>
        ));

        const View = view(SomeViewModel)(() => <ViewChild/>);

        testComponentObservability(View, true);
      });

      test('Is not observer', () => {
        const ViewChild = viewChild<SomeViewModel>()(({ viewModel }) => (
          <div>{viewModel.n}</div>
        ), { observer: false });

        const View = view(SomeViewModel)(() => <ViewChild/>);

        testComponentObservability(View, false);
      });
    });

    test('Memo\'s propsAreEqual', () => {
      const ViewChild: FC<PropsEqualityViewProps> = viewChild<SomeViewModel>()(({ a, b }) => {
        const renderCount = useRef(0);
        renderCount.current++;

        return (
          <>
            <div>{a + b}</div>
            <input type="number" value={renderCount.current} aria-label="Render count" onChange={jest.fn} />
          </>
        );
      }, { propsAreEqual });

      const View: FC<PropsEqualityViewProps> = view(SomeViewModel)(({ a, b }) => (
        <ViewChild a={a} b={b}/>
      ));

      testPropsEqualityMechanism(View);
    });

    test('ForwardRef', () => {
      const ViewChild: ViewWithRef<HTMLDivElement> = viewChild<SomeViewModel>()(
        forwardRef((_, ref) => (
          <div ref={ref}>
            Component
          </div>
        )),
      );

      const View: ViewWithRef<HTMLDivElement> = view(SomeViewModel)(
        forwardRef((_, ref) => (
          <ViewChild ref={ref}/>
        )),
      );

      const ref = createRef<HTMLDivElement>();
      render(<View ref={ref} />);

      expect(screen.getByText('Component')).toEqual(ref.current);
    });
  });
});
