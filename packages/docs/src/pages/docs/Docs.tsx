import { memo } from 'react';
import { PageWithNavigation } from '@components';
import { ViewModelDescription } from './ViewModelDescription';
import { ViewDescription } from './ViewDescription';
import { ChildViewDescription } from './ChildViewDescription';
import { ConfigureDescription } from './ConfigureDescription';
import { ChildViewComponentDescription } from './ChildViewComponentDescription';

const Docs = memo(() => (
  <PageWithNavigation>
    <ViewDescription />
    <ChildViewDescription />
    <ChildViewComponentDescription />
    <ViewModelDescription />
    <ConfigureDescription />
  </PageWithNavigation>
));

export default Docs;
