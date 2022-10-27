import { memo } from 'react';
import { Box, Typography, Link } from '@mui/material';
import { AnchorNavigation, AnchorNavigationItem, PageWithNavigation, ReturnButton, Title } from '@components';
import { headings } from './headings';
import { ViewExample } from './ViewExample';
import { ConfigurationExample } from './ConfigurationExample';
import { ViewModelExample } from './ViewModelExample';
import { UsefulExamples } from './UsefullExamples';
import { QueryParamsWatcher } from './QueryParamsWatcher';

const AnchorLinks = memo(() => (
  <AnchorNavigation>
    <AnchorNavigationItem text="Basic examples" id={headings.basic.main}>
      <AnchorNavigationItem text="View and ChildView" id={headings.basic.view.main}>
        <AnchorNavigationItem text="Using ChildView" id={headings.basic.view.childView} />
        <AnchorNavigationItem text="Typing props" id={headings.basic.view.typings} />
        <AnchorNavigationItem text="Setting options" id={headings.basic.view.options} />
        <AnchorNavigationItem text="Using with forwardRef" id={headings.basic.view.forwardRef} />
      </AnchorNavigationItem>

      <AnchorNavigationItem text="ViewModel" id={headings.basic.viewModel.main}>
        <AnchorNavigationItem text="Typing" id={headings.basic.viewModel.typings} />
        <AnchorNavigationItem text="Observing viewProps" id={headings.basic.viewModel.viewProps} />
        <AnchorNavigationItem text="View lifecycle hooks" id={headings.basic.viewModel.hooks} />
        <AnchorNavigationItem text="Creating reactions" id={headings.basic.viewModel.reactions} />
      </AnchorNavigationItem>

      <AnchorNavigationItem text="Configuration" id={headings.basic.configuration.main}>
        <AnchorNavigationItem text="Configuring vmFactory" id={headings.basic.configuration.vmFactory} />
        <AnchorNavigationItem text="Configuring Wrapper" id={headings.basic.configuration.wrapper} />
      </AnchorNavigationItem>
    </AnchorNavigationItem>

    <AnchorNavigationItem text="Useful examples" id={headings.useful.main}>
      <AnchorNavigationItem text="Automatic makeObservable" id={headings.useful.makeObservable} />
      <AnchorNavigationItem text="Enabling DI pattern" id={headings.useful.di} />
      <AnchorNavigationItem text="Using Error Boundary" id={headings.useful.errors} />
    </AnchorNavigationItem>

    <AnchorNavigationItem text="Complex examples" id={headings.complex} />
  </AnchorNavigation>
));

const Examples = memo(() => (
  <PageWithNavigation>
    <ReturnButton />
    <Box sx={{ display: 'flex', width: '100%' }}>
      <AnchorLinks />
      <Box sx={{ justifyContent: 'center', padding: '2rem 3rem', display: 'flex', width: '100%', overflow: 'hidden' }}>
        <Box sx={{ maxWidth: '100%', width: '1200px' }}>
          <Title variant="h3" text="Basic examples" id={headings.basic.main} />
          <Typography component="p" sx={{ mt: 2 }}>
            This section contains examples of basic usage of entities with all possible typings and variants.
          </Typography>
          <ViewExample />
          <ViewModelExample />
          <ConfigurationExample />

          <UsefulExamples />

          <Box sx={{ mt: 7 }}>
            <Title variant="h3" text="Complex examples" id={headings.complex} />
            <Typography component="p" sx={{ mt: 2 }}>
              And here&apos;s some complex examples of whole React applications with React VVM. You can find them here
              {' '}
              <Link
                href="https://github.com/Yoskutik/react-vvm/tree/master/examples"
                target="_blank"
                rel="noreferer"
              >
                Github
              </Link>.
            </Typography>
          </Box>
          <div style={{ height: '2rem' }} />
        </Box>
      </Box>
    </Box>
    <QueryParamsWatcher />
  </PageWithNavigation>
));

export default Examples;
