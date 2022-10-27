import { FC, ReactNode } from 'react';
import { view } from '@yoskutik/react-vvm';
import { PageWithNavigationViewModel } from './PageWithNavigationViewModel';

export const PageWithNavigation: FC<{ children: ReactNode }> = view(PageWithNavigationViewModel)(({ children }) => (
  children as any
), { observer: false });
