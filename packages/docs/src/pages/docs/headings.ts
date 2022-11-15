import { createHeadingIds } from '@utils';

export const headings = createHeadingIds({
  view: createHeadingIds(undefined, ['usage', 'options', 'sample']),

  childView: createHeadingIds(undefined, ['usage', 'options', 'sample']),

  childViewComponent: createHeadingIds(undefined, ['sample']),

  viewModel: createHeadingIds({
    description: createHeadingIds(undefined, ['properties', 'methods']),
  }, ['parent', 'sample']),

  configuration: createHeadingIds(undefined, ['usage', 'sample']),
});
