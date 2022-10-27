import { memo } from 'react';
import { Box } from '@mui/material';
import { AnchorNavigation, AnchorNavigationItem, PageWithNavigation, ReturnButton } from '@components';
import { ViewModelDescription } from './ViewModelDescription';
import { ViewDescription } from './ViewDescription';
import { ChildViewDescription } from './ChildViewDescription';
import { ConfigureDescription } from './ConfigureDescription';
import { ChildViewComponentDescription } from './ChildViewComponentDescription';
import { headings } from './headings';

const AnchorLinks = memo(() => (
  <AnchorNavigation>
    <AnchorNavigationItem text="View" id={headings.view.main}>
      <AnchorNavigationItem text="Usage" id={headings.view.usage}>
        <AnchorNavigationItem text="Options" id={headings.view.options} />
      </AnchorNavigationItem>
      <AnchorNavigationItem text="Usage sample" id={headings.view.sample} />
    </AnchorNavigationItem>

    <AnchorNavigationItem text="ChildView" id={headings.childView.main}>
      <AnchorNavigationItem text="Usage" id={headings.childView.usage}>
        <AnchorNavigationItem text="Options" id={headings.childView.options} />
      </AnchorNavigationItem>
      <AnchorNavigationItem text="Usage sample" id={headings.childView.sample} />
    </AnchorNavigationItem>

    <AnchorNavigationItem text="ChildViewComponent" id={headings.childViewComponent.main}>
      <AnchorNavigationItem text="Usage sample" id={headings.childView.sample} />
    </AnchorNavigationItem>

    <AnchorNavigationItem text="ViewModel" id={headings.viewModel.main}>
      <AnchorNavigationItem text="What's a parent?" id={headings.viewModel.parent} />
      <AnchorNavigationItem text="Description" id={headings.viewModel.description.main}>
        <AnchorNavigationItem text="Properties" id={headings.viewModel.description.properties} />
        <AnchorNavigationItem text="Methods" id={headings.viewModel.description.methods} />
      </AnchorNavigationItem>
      <AnchorNavigationItem text="Usage sample" id={headings.viewModel.sample} />
    </AnchorNavigationItem>

    <AnchorNavigationItem text="Configuration" id={headings.configuration.main}>
      <AnchorNavigationItem text="Usage" id={headings.configuration.usage} />
      <AnchorNavigationItem text="Usage sample" id={headings.configuration.sample} />
    </AnchorNavigationItem>
  </AnchorNavigation>
));

const Docs = memo(() => (
  <PageWithNavigation>
    <ReturnButton />
    <Box sx={{ display: 'flex', width: '100%' }}>
      <AnchorLinks />
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
