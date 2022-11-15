import { createHeadingIds } from '@utils';

export const headings = createHeadingIds({
  basic: createHeadingIds({
    view: createHeadingIds(undefined, [
      'childView',
      'typings',
      'options',
      'forwardRef',
      'forwardRefStrict',
      'classComponents',
    ]),

    viewModel: createHeadingIds(undefined, [
      'typings',
      'parent',
      'viewProps',
      'hooks',
      'reactions',
    ]),

    configuration: createHeadingIds(undefined, ['vmFactory', 'wrapper']),
  }),

  useful: createHeadingIds(undefined, ['makeObservable', 'di', 'errors']),

  complex: 'complex',
});
