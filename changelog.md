# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.3] - 2022-11-15

### Changed

- Fields `parent` and `viewProps` now are not `undefined` during the first view render. 

## [1.2.0] - 2022-12-26

### Changed

- Fields `parent` and `viewProps` now are not `undefined` in the constructor of view model;
- Due to the fact above `parent` is no more observable;
- Field `parent` now can be typed as `null` in case there's no parent view model;
- Returned functions of `view` and `childView` now have 2 generics - for typing props and
forwarded ref. Now, it is better to use these generics rather explicitly typing props via `FC`:

```typescript jsx
// Before
const View: FC<Props> = view(SomeViewModel)(() => (
  <div />
));

// After
const View = view(SomeViewModel)<Props>(() => (
  <div />
));
```
- The README file is now consist of a minimal example. The documentation can be found on the
[website](https://yoskutik.github.io/react-vvm/).

### Removed

- Type `ViewWithRef` was removed. To type forwarded ref of view or child view you can now use
the second generic of these functions:

```typescript jsx
// Before
const View: ViewWithRef<HTMLDivElement, Props> = view(SomeViewModel)(() => (
  forwardRef(() => <div />)
));

// After
const View = view(SomeViewModel)<Props, HTMLDivElement>(() => (
  forwardRef(() => <div />)
));
```
- Removed an idle render of view components for initializing `parent` and `viewProps` fields.
