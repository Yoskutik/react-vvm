import { Box, Link, Typography } from '@mui/material';
import { Highlighter, Code, Title } from '@components';
import { headings as examplesHeadings } from '@pages/examples/headings';
import { GridItem, Grid } from '../Grid';
import { headings } from '../headings';
import example from './Configure.example';

export const ConfigureDescription = () => (
  <Box sx={{ mt: 8 }}>
    <Title variant="h3" text="Configuration" id={headings.configuration.main} />
    <Typography component="p" sx={{ mt: 2 }}>
      This library can be configured at the global level.
    </Typography>

    <Title variant="h4" text="Usage" id={headings.configuration.usage} sx={{ mt: 3 }} />
    <Highlighter code="configure({ vmFactory, Wrapper })" sx={{ mt: 2 }} />

    <Grid>
      <GridItem item="vmFactory">
        <Typography component="p">
          This function tells the view how to create an instance of a view model. By default, all view models are
          simply creating with a <Code>new</Code> keyword.
        </Typography>
        <Typography component="p" sx={{ mt: 2 }}>
          See configuring vmFactory: {' '}
          <Link href={`#/examples?heading=${examplesHeadings.basic.configuration.vmFactory}`}>
            Example
          </Link>.
        </Typography>
      </GridItem>

      <GridItem item="Wrapper">
        <Typography component="p">
          A wrapper which is used in <Code>view</Code> and <Code>childView</Code>. By default, <Code>Wrapper</Code> is
          equal to <Code>React.Fragment</Code>. The wrapper is useful if you want to add an ErrorBoundary or for a
          debugging purposes.
        </Typography>
        <Typography component="p" sx={{ mt: 2 }}>
          See configuring the wrapper:
          {' '}
          <Link href={`#/examples?heading=${examplesHeadings.basic.configuration.wrapper}`}>
            Basic usage
          </Link>
          {', '}
          <Link href={`#/examples?heading=${examplesHeadings.useful.errors}`}>
            ErrorBoundary
          </Link>.
        </Typography>
      </GridItem>
    </Grid>

    <Title variant="h4" text="Usage sample" id={headings.configuration.sample} sx={{ mt: 3 }} />
    <Highlighter sx={{ mt: 2 }} code={example} />
  </Box>
);
