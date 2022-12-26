import { Code, PageBlock } from '@components';
import { ExampleBlock } from '../ExampleBlock';
import vmFactoryExample from './VMFactory.example';
import wrapperExample from './Wrapper.example';

export const ConfigurationExample = () => (
  <PageBlock title="Configuration">
    <ExampleBlock
      title={<>Configuring <Code>vmFactory</Code></>}
      example={vmFactoryExample}
    >
      <Code>vmFactory</Code> tells to views how they should create an instance of a view model. You can configure this
      function to add debug information or a middleware.
    </ExampleBlock>

    <ExampleBlock title={<>Configuring <Code>Wrapper</Code></>} example={wrapperExample}>
      The <Code>Wrapper</Code> is used to wrap all the views and childViews. By default, the <Code>Wrapper</Code> is
      equal to <Code>React.Fragment</Code> so it doesn&apos;t really affect on your application. But you can set any
      component as wrapper to add debug information or a middleware.
    </ExampleBlock>
  </PageBlock>
);
