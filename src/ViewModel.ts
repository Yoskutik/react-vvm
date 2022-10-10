/* eslint-disable prefer-rest-params,@typescript-eslint/no-unused-vars,prefer-spread */
import { autorun, makeObservable, observable, reaction } from 'mobx';

type TDisposer = () => void;

/** An abstract class for ViewModels */
export abstract class ViewModel<V extends ViewModel | unknown = unknown, P = unknown> {
  /** An array of disposers which are called after the view becomes unmounted */
  private d: TDisposer[] = [];

  /** Properties that were given to a View. This object is updated every time the View renders with the new props */
  readonly viewProps: Readonly<P> = undefined;

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
  readonly parent: V = undefined;

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
  protected reaction: typeof reaction;

  /**
   * Add-on function for MobX's autorun. The disposer of the autorun will be automatically called after the view
   * becomes unmounted.
   *
   * @link {@see autorun}
   */
  protected autorun: typeof autorun;

  /** A function for adding a disposer, that will be automatically called after the view becomes unmounted */
  protected addDisposer(disposer: TDisposer): void {
    this.d.push(disposer);
  }

  /** A function that is called after the View has become mounted. Calls in the useEffect hook */
  protected onViewMounted?(): void;

  /** A function that is called after the View has become mounted. Calls in the useLayoutEffect hooks */
  protected onViewMountedSync?(): void;

  /** A function that is called after the View has been rendered. Calls in the useEffect hook */
  protected onViewUpdated?(): void;

  /** A function that is called after the View has been rendered. Calls in the useLayoutEffect hook */
  protected onViewUpdatedSync?(): void;

  /** A function that is called after the View has become unmounted. Calls in the useEffect hook */
  protected onViewUnmounted?(): void;

  /** A function that is called after the View has become unmounted. Calls in the useLayoutEffect hook */
  protected onViewUnmountedSync?(): void;
}

// You may think that all the code below is a crutch. But it's actually not. All these lines are needed for
// optimisations.
//
// For example, you may ask why do reaction and autorun declared in this way. Well, these functions are add-on
// functions, which means they should have the same type as their alternatives from MobX. And it's actually a problem.
// Reaction has generics and the number of generics is not constant in different versions of MobX. So, the only way to
// type it is using typeof reaction. In this case I could declare these functions as class members, but in this way all
// view models start creating these functions during initialization. Which is not much, but will affect memory
// consumption. Therefore, I decided to declare the typing of these functions as a member of the class, but really
// declare it in the prototype of the class. In this case, only one function will be created for all view models.
//
// And why don't I use decorators instead of using Reflect? Because in this case there'll be a lot of code generated
// in the main file. Using decorators instead of Reflect brings extra 500 characters which is 25% of the whole package.

const prototype = ViewModel.prototype as any;

prototype.reaction = function () {
  return this.d[this.d.push(reaction.apply(null, arguments)) - 1];
};

prototype.autorun = function () {
  return this.d[this.d.push(autorun.apply(null, arguments)) - 1];
};

['viewProps', 'parent'].forEach(field => {
  (Reflect as any).decorate([
    observable.ref,
    (Reflect as any).metadata('design:type', Object),
  ], prototype, field, undefined);
});
