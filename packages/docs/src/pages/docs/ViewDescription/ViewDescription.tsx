import { Alert, Typography } from '@mui/material';
import { Highlighter, Code, PageBlock, TextLink } from '@components';
import example from './View.example';

export const ViewDescription = () => (
  <PageBlock
    title="View"
    description={(
      <>
        <Typography component="p">
          The <Code>view</Code> function creates an object that implements the view logic from the MVVM pattern. This
          means that view should be responsible for displaying a component in your application.
        </Typography>
        <Typography component="p">
          A view takes a <Code>vmFactory</Code> from the <Code>configuration</Code> and call it to create an instance of
          a view model. Also view is responsible for updating view model&apos;s fields <Code>parent</Code> and
          {' '} <Code>viewProps</Code> and for calling view&apos;s lifecycle hooks in the instance of a view model.
        </Typography>
        <Typography component="p">
          By default, every view is an observer. But you can configure it.
        </Typography>
        <Alert severity="info">
          One of the issues that solves this package is the purity of the code. The fewer props your components have,
          the easier it will be to understand your code for others. And with this package you can minimize amount of
          props passed by observing view model&apos;s fields, its parent&apos;s fields and so on. For example, a
          ChildView can observe its View props.
        </Alert>
        <Typography component="p">
          <b>Every view is memoized</b>. And as it states below, the fewer props your view having, the faster your
          application will work. Since the view uses <Code>memo</Code> function, you can also pass
          the <Code>propsAreEqual</Code> function to it.
        </Typography>
      </>
    )}
  >
    <PageBlock title="Usage">
      <Highlighter code="view(SomeViewModel)(Component[, options])" />

      <PageBlock
        title="Options"
        description={(
          <>
            <Typography component="p">
              There are two options: <Code>observer</Code> and <Code>propsAreEqual</Code>. If <Code>observer</Code> is
              {' '} <Code>false</Code>, when view will be created as non-observer component. And
              if <Code>propsAreEqual</Code> is set, it will be passed to a <Code>memo</Code> function (See
              <TextLink href="https://reactjs.org/docs/react-api.html#reactmemo" text="how memo works" /> for better
              understanding).
            </Typography>
            <Typography component="p">
              See setting view options:
              <TextLink id="basic-examples.view-and-childview.setting-options" />.
            </Typography>
          </>
        )}
      />
    </PageBlock>

    <PageBlock title="Usage sample">
      <Highlighter code={example} />
    </PageBlock>
  </PageBlock>
);
