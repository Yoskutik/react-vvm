import { Typography } from '@mui/material';
import { Code, PageBlock } from '@components';
import { ExampleBlock } from '../ExampleBlock';
import typingExample from './Typing.example';
import childViewExample from './ChildView.example';
import optionsExample from './Options.example';
import forwardRefExample from './ForwardRef.example';
import classExample from './ChildViewComponent.example';

export const ViewExample = () => (
  <PageBlock
    title="View and ChildView"
    description={(
      <Typography component="p">
        The interfaces of <Code>view</Code> and <Code>childView</Code> are pretty much the same. The only difference
        - the way the view model is typed.
      </Typography>
    )}
  >
    <ExampleBlock
      title={<>Using <Code>childView</Code></>}
      example={childViewExample}
    >
      The component which was created with <Code>childView</Code> must be used somewhere inside a view of the same view
      model.
    </ExampleBlock>

    <ExampleBlock title="Typing props" example={typingExample}>
      By default, <Code>view</Code> and <Code>childView</Code> returns an <Code>FC</Code> component with no props. But
      you can type it using <Code>FC</Code> type.
    </ExampleBlock>

    <ExampleBlock title="Setting options" example={optionsExample}>
      By default, <Code>view</Code> and <Code>childView</Code> create a memoized observer component. You can make it
      non-observer or pass <Code>propsAreEqual</Code> function to the <Code>memo</Code> HOC.
    </ExampleBlock>

    <ExampleBlock
      title={<>Using <Code>forwardRef</Code></>}
      example={forwardRefExample}
    >
      Of course, there&apos;s an opportunity to pass a ref via <Code>view</Code> and <Code>childView</Code>. You just
      need to apply <Code>forwardRef</Code> before applying these functions. Also, if you want to type the component,
      you have to use second generic.
    </ExampleBlock>

    <ExampleBlock title="Using class components" example={classExample}>
      We do not recommend writing new code with class-style components. However, we give you the opportunity to use the
      MVVM pattern for class components as well. A class component can&apos;t be a view, only a ChildView. However, you
      can additionally use the <Code>view</Code> function to wrap your ChildView to make it act as view.
    </ExampleBlock>
  </PageBlock>
);
