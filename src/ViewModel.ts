/* eslint-disable prefer-rest-params,@typescript-eslint/no-unused-vars */
import { autorun, IReactionDisposer, makeObservable, observable, reaction } from 'mobx';

type TDisposer = () => void;

/** An abstract class for ViewModels */
export abstract class ViewModel<T extends ViewModel | unknown = unknown, R extends Record<string, any> = unknown> {
  /** An array of disposers which are called after the view becomes unmounted */
  private d: TDisposer[] = [];

  /** Properties that were given to a View. This object is updated every time the View renders with the new props */
  readonly viewProps: Readonly<R> = undefined;

  /**
   * A ViewModel instance which is defined for the View which is the parent of the View of this ViewModel in the
   * virtual DOM.
   *
   * For example. Let's imagine React Virtual DOM. View2 is located somewhere inside View1. It doesn't have to be
   * a direct child.
   * @example
   * +-------------------------------------------------+
   * | View1 -> creates an instance of ViewModel1      |
   * |                                                 |
   * | +---------------------------------------------+ |
   * | | View2 -> creates and instance of ViewModel2 | |
   * | +---------------------------------------------+ |
   * +-------------------------------------------------+
   *
   * In this case an instance of ViewModel1 must be a parent for the instance of ViewModel2.
   */
  readonly parent: T = undefined;

  constructor() {
    // MobX 4 and MobX5 don't have makeObservable
    makeObservable && makeObservable(this);
  }

  /**
   * Add-on function for MobX's reaction. The disposer of the reaction will be automatically called after the view
   * becomes unmounted.
   *
   * @link {@see reaction}
   */
  protected reaction(...args: Parameters<typeof reaction>): IReactionDisposer {
    const disposer = reaction.apply(this, arguments);
    this.d.push(disposer);
    return disposer;
  }

  /**
   * Add-on function for MobX's autorun. The disposer of the autorun will be automatically called after the view
   * becomes unmounted.
   *
   * @link {@see autorun}
   */
  protected autorun(...args: Parameters<typeof autorun>): IReactionDisposer {
    const disposer = autorun.apply(this, arguments);
    this.d.push(disposer);
    return disposer;
  }

  /** A function for adding a disposer, that will be automatically called after the view becomes unmounted */
  protected addDisposer(disposer: TDisposer) {
    this.d.push(disposer);
  }

  /** A function that is called after the View has become mounted. Calls in the useEffect hook */
  protected onViewMounted?(): void | Promise<void>;

  /** A function that is called after the View has become mounted. Calls in the useLayoutEffect hooks */
  protected onViewMountedSync?(): void | Promise<void>;

  /**
   * A function that is called after the View has been rendered. Calls in the useEffect hook. It doesn't have props
   * argument, because by the time onViewUpdated is calling, viewProps are already updated.
   */
  protected onViewUpdated?(): void | Promise<void>;

  /**
   * A function that is called after the View has been rendered. Calls in the useLayoutEffect hook
   * @param newProps - View's properties which will be applied after updated. They're not equal to this.viewProps
   */
  protected onViewUpdatedSync?(newProps?: R): void | Promise<void>;

  /** A function that is called after the View has become unmounted. Calls in the useEffect hook */
  protected onViewUnmounted?(): void | Promise<void>;

  /** A function that is called after the View has become unmounted. Calls in the useLayoutEffect hook */
  protected onViewUnmountedSync?(): void | Promise<void>;
}

['viewProps', 'parent'].forEach(field => {
  (Reflect as any).decorate([
    observable.ref,
    (Reflect as any).metadata('design:type', Object),
  ], ViewModel.prototype, field, undefined);
});
