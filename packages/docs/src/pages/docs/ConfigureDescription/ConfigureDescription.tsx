import { Typography } from '@mui/material';
import { Highlighter, Code, PageBlock, TextLink } from '@components';
import { GridItem, Grid } from '../Grid';
import example from './Configure.example';

export const ConfigureDescription = () => (
  <PageBlock description="This library can be configured at the global level." title="Configuration">

    <PageBlock title="Usage">
      <Highlighter code="configure({ vmFactory, Wrapper })" />

      <Grid>
        <GridItem item="vmFactory">
          <Typography component="p">
            This function tells the view how to create an instance of a view model. By default, all view models are
            simply creating with a <Code>new</Code> keyword.
          </Typography>
          <Typography component="p">
            See configuring vmFactory:
            <TextLink id="basic-examples.configuration.configuring-vmfactory" />.
          </Typography>
        </GridItem>

        <GridItem item="Wrapper">
          <Typography component="p">
            A wrapper which is used in <Code>view</Code> and <Code>childView</Code>. By default, <Code>Wrapper</Code>
            {' '} is equal to <Code>React.Fragment</Code>. The wrapper is useful if you want to add an ErrorBoundary or
            for a debugging purposes.
          </Typography>
          <Typography component="p">
            See configuring the wrapper:
            <TextLink id="basic-examples.configuration.configuring-wrapper" text="Basic usage" />
            {','}
            <TextLink id="useful-examples.using-error-boundary" text="Error Boundary" />.
          </Typography>
        </GridItem>
      </Grid>

      <PageBlock title="Usage sample">
        <Highlighter code={example} />
      </PageBlock>
    </PageBlock>
  </PageBlock>
);
