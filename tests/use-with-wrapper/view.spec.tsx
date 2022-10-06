import { ReactNode, Component, FC } from 'react';
import { viewChild, configure, view, ViewModel } from '@yoskutik/react-vvm';
import { render, screen } from '@testing-library/react';

describe('Using View with Wrapper', () => {
  class SomeViewModel extends ViewModel {}

  describe('Error boundary', () => {
    let errorHandler: () => void;

    const onGlobalError = evt => evt.preventDefault();
    beforeAll(() => global.addEventListener('error', onGlobalError));
    afterAll(() => global.addEventListener('error', onGlobalError));

    class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
      state = { hasError: false };

      static getDerivedStateFromError = () => {
        errorHandler();
        return { hasError: true };
      };

      render = () => !this.state.hasError && this.props.children;
    }

    configure({ Wrapper: ErrorBoundary });

    test('View', () => {
      errorHandler = jest.fn();

      const View = view(SomeViewModel)(() => {
        throw new Error();
      });

      render(
        <div>
          <span>Some content</span>
          <View />
        </div>,
      );

      expect(screen.getByText('Some content')).toBeInTheDocument();
      expect(errorHandler).toBeCalled();
    });

    test('ViewChild', () => {
      errorHandler = jest.fn();

      const ViewChild = viewChild()(() => {
        throw new Error();
      });

      const View = view(SomeViewModel)(() => (
        <div>
          <span>Some content</span>
          <ViewChild />
        </div>
      ));

      render(<View />);

      expect(screen.getByText('Some content')).toBeInTheDocument();
      expect(errorHandler).toBeCalled();
    });
  });

  test('Functional Wrapper', () => {
    const Wrapper: FC<{ children: ReactNode }> = ({ children }) => (
      <>
        <span>Wrapper content</span>
        {children}
      </>
    );

    configure({ Wrapper });

    const View = view(SomeViewModel)(() => <div />);
    render(<View />);

    expect(screen.getByText('Wrapper content')).toBeInTheDocument();
  });
});
