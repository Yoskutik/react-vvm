import { ReactNode } from 'react';
import { Grid } from '@mui/material';
import { view } from '@yoskutik/react-vvm';
import { ReturnButton } from '../ReturnButton';
import { PageWithNavigationViewModel } from './PageWithNavigationViewModel';
import { QueryParamsWatcher } from './QueryParamsWatcher';
import { AnchorNavigation } from './AnchorNavigation';

type Props = {
  children: ReactNode;
  hideNavigation?: boolean;
};

export const PageWithNavigation = view(PageWithNavigationViewModel)<Props>(({ children, hideNavigation }) => (
  <>
    <QueryParamsWatcher/>
    <ReturnButton/>
    <Grid container wrap="nowrap">
      {!hideNavigation && <AnchorNavigation/>}
      <Grid justifyContent="center" sx={{ overflow: 'hidden', padding: '2rem 3rem', width: '100%' }}>
        <Grid container direction="column" gap={8} style={{ maxWidth: '100%', width: '1200px', margin: '0 auto' }}>
          {children}
        </Grid>
        <div style={{ height: '2rem' }} />
      </Grid>
    </Grid>
  </>
));
