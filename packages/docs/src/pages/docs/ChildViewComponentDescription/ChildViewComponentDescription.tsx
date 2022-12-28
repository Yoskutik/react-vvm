import { Alert, Typography } from '@mui/material';
import { Highlighter, Code, PageBlock, TextLink } from '@components';
import example from './ChildViewComponentDescription.example';

export const ChildViewComponentDescription = () => (
  <PageBlock
    title="ChildViewComponent"
    description={(
      <>
        <Typography component="p">
          We highly recommend use to use React VVM with functional style components. But to increase compatibility, we
          added a class <Code>ChildViewComponent</Code>, so you can create an instances of ChildView as class
          components.
        </Typography>
        <Alert severity="info">
          If you want to create an instance of View as class component, please, see the
          <TextLink id="basic-examples.view-and-childview.using-class-components" />.
        </Alert>
        <Typography component="p">
          The only difference between class-style ChildView and functional-style ChildView is that in the
          class-style <Code>viewModel</Code> field is part of class, while in the function-style it&apos;s a property.
          And since functional-style child views are declared with <Code>memo</Code>, <Code>ChildViewComponent</Code> is
          extended from <Code>PureComponent</Code>.
        </Typography>
      </>
    )}
  >
    <PageBlock title="Usage sample">
      <Highlighter code={example} />
    </PageBlock>
  </PageBlock>
);
