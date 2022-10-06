import { configure, view, ViewModel } from '@yoskutik/react-vvm';
import { render } from '@testing-library/react';
import { container, injectable, singleton } from 'tsyringe';

@singleton()
class OtherSingleton {}

@injectable()
class OtherInjectable {}

@injectable()
class SomeViewModel extends ViewModel {
  constructor(
    public otherInjectable: OtherInjectable,
    public otherSingleton: OtherSingleton,
  ) {
    super();
  }
}

describe('Using ViewModel with DI pattern', () => {
  let vm: SomeViewModel;

  configure({
    vmFactory: VM => vm = container.resolve(VM) as any,
  });

  test('Dependencies inject', () => {
    const View = view(SomeViewModel)(() => <div/>);
    render(<View/>);

    expect(vm.otherSingleton).toEqual(container.resolve(OtherSingleton));
    expect(vm.otherInjectable).not.toBe(container.resolve(OtherInjectable));
    expect(vm.otherInjectable).toBeInstanceOf(OtherInjectable);
  });
});
