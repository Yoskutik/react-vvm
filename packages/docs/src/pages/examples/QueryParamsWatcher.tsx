import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { childView } from '@yoskutik/react-vvm';
import { PageWithNavigationViewModel } from '@components';

export const QueryParamsWatcher = childView<PageWithNavigationViewModel>()(({ viewModel }) => {
  const searchParam = useSearchParams()[0];
  const heading = searchParam.get('heading');

  useEffect(() => {
    heading && viewModel.scrollToHeading(heading);
  }, [heading, viewModel]);

  return null;
});
