import { Box } from '@mui/material';
import { Code, Title } from '@components';
import { ExampleBlock } from '../ExampleBlock';
import { headings } from '../headings';
import vmFactoryExample from './VMFactory.example';
import wrapperExample from './Wrapper.example';

export const ConfigurationExample = () => (
  <Box sx={{ mt: 3 }}>
    <Title variant="h4" text="Configuration" id={headings.basic.configuration.main} />

    <ExampleBlock
      title={<>Configuring <Code>vmFactory</Code></>}
      id={headings.basic.configuration.vmFactory}
      example={vmFactoryExample}
    >
      <Code>vmFactory</Code> tells to views how they should create an instance of a view model. You can configure this
      function to add debug information or a middleware.
    </ExampleBlock>

    <ExampleBlock
      title={<>Configuring <Code>Wrapper</Code></>}
      id={headings.basic.configuration.wrapper}
      example={wrapperExample}
    >
      The <Code>Wrapper</Code> is used to wrap all the views and childViews. By default, the <Code>Wrapper</Code> is
      equal to <Code>React.Fragment</Code> so it doesn&apos;t really affect on your application. But you can set any
      component as wrapper to add debug information or a middleware.
    </ExampleBlock>
  </Box>
);
