import { Box, Typography } from '@mui/material';
import { Code, Title } from '@components';
import { headings } from '../headings';
import { ExampleBlock } from '../ExampleBlock';
import typingExample from './Typing.example';
import childViewExample from './ChildView.example';
import optionsExample from './Options.example';
import forwardRefExample from './ForwardRef.example';
import ForwardRefStrictExample from './ForwardRefStrict.example';
import classExample from './ChildViewComponent.example';

export const ViewExample = () => (
  <Box sx={{ mt: 3 }}>
    <Title variant="h4" text="View and ChildView" id={headings.basic.view.main} />
    <Typography component="p" sx={{ mt: 2, mb: 4 }}>
      The interfaces of <Code>view</Code> and <Code>childView</Code> are pretty much the same. The only difference - the
      way the view model is typed.
    </Typography>

    <ExampleBlock
      title={<>Using <Code>childView</Code></>}
      id={headings.basic.view.childView}
      example={childViewExample}
    >
      The component which was created with <Code>childView</Code> must be used somewhere inside a view of the same view
      model.
    </ExampleBlock>

    <ExampleBlock title="Typing props" id={headings.basic.view.typings} example={typingExample}>
      By default, <Code>view</Code> and <Code>childView</Code> returns an <Code>FC</Code> component with no props. But
      you can type it using <Code>FC</Code> type.
    </ExampleBlock>

    <ExampleBlock title="Setting options" id={headings.basic.view.options} example={optionsExample}>
      By default, <Code>view</Code> and <Code>childView</Code> create a memoized observer component. You can make it
      non-observer or pass <Code>propsAreEqual</Code> function to the <Code>memo</Code> HOC.
    </ExampleBlock>

    <ExampleBlock
      title={<>Using <Code>forwardRef</Code></>}
      id={headings.basic.view.forwardRef}
      example={forwardRefExample}
    >
      If you want to use <Code>forwardRef</Code> HOC, you should switch from using <Code>FC</Code> type to {' '}
      <Code>ViewWithRef</Code> type from the library.
    </ExampleBlock>

    <ExampleBlock
      title={<>Using <Code>forwardRef</Code> in the strict mode</>}
      id={headings.basic.view.forwardRefStrict}
      example={ForwardRefStrictExample}
    >
      The example above will not work if you are using TypeScript in the strict mode. The only way to apply typing is
      using <Code>as</Code> keyword.
    </ExampleBlock>

    <ExampleBlock title="Using class components" id={headings.basic.view.classComponents} example={classExample}>
      We do not recommend writing new code with class-style components. However, we give you the opportunity to use the
      MVVM pattern for class components as well. A class component can&apos;t be a view, only a ChildView. However, you
      can additionally use the <Code>view</Code> function to wrap your ChildView to make it act as view.
    </ExampleBlock>
  </Box>
);
