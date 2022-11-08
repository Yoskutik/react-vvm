import { FC, ReactNode } from 'react';
import { view } from '@yoskutik/react-vvm';
import { PageWithNavigationViewModel } from './PageWithNavigationViewModel';
import { QueryParamsWatcher } from './QueryParamsWatcher';

export const PageWithNavigation: FC<{ children: ReactNode }> = view(PageWithNavigationViewModel)(({ children }) => (
  <>
    {children}
    <QueryParamsWatcher />
  </>
), { observer: false });
