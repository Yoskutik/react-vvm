import { memo } from 'react';
import { Box } from '@mui/material';
import { AnchorNavigation, PageWithNavigation, ReturnButton } from '@components';
import { ViewModelDescription } from './ViewModelDescription';
import { ViewDescription } from './ViewDescription';
import { ChildViewDescription } from './ChildViewDescription';
import { ConfigureDescription } from './ConfigureDescription';
import { ChildViewComponentDescription } from './ChildViewComponentDescription';

const Docs = memo(() => (
  <PageWithNavigation>
    <ReturnButton />
    <Box sx={{ display: 'flex', width: '100%' }}>
      <AnchorNavigation />
      <Box sx={{ justifyContent: 'center', padding: '2rem 3rem', display: 'flex', width: '100%', overflow: 'hidden' }}>
        <Box sx={{ maxWidth: '100%', width: '1200px' }}>
          <ViewDescription />
          <ChildViewDescription />
          <ChildViewComponentDescription />
          <ViewModelDescription />
          <ConfigureDescription />
          <div style={{ height: '2rem' }} />
        </Box>
      </Box>
    </Box>
  </PageWithNavigation>
));

export default Docs;
