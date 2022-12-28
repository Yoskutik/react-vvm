import { Typography } from '@mui/material';
import { Highlighter, Code, PageBlock } from '@components';
import example from './ViewModel.example';
import { VMDescription } from '@pages/docs/ViewModelDescription/VMDescription';

export const ViewModelDescription = () => (
  <PageBlock
    title="ViewModel"
    description={(
      <>
        <Typography component="p">
          The <Code>ViewModel</Code> class is an object that implements the view model logic from the MVVM pattern. In
          general case, the <Code>ViewModel</Code> is designed to store observable fields, as well as logic for updating
          them.
        </Typography>
        <Typography component="p">
          The <Code>ViewModel</Code> stores a reference to the props object with which the view was rendered with and
          also a reference to the parent view model. Also, <Code>ViewModel</Code> has a few view&apos;s lifecycle
          methods.
        </Typography>
      </>
    )}
  >
    <PageBlock
      title={<>What is <Code>parent</Code> for a ViewModel?</>}
      description={(
        <Typography component="p">
          The assignment of the parent view model occurs according to the virtual DOM tree. If <Code>View2</Code> is
          located somewhere inside <Code>View1</Code>, then <Code>ViewModel1</Code> will be considered the parent
          of <Code>ViewModel2</Code>.
        </Typography>
      )}
    >
      <PageBlock title="Description">
        <VMDescription />
      </PageBlock>

      <PageBlock title="Usage sample">
        <Highlighter code={example} />
      </PageBlock>
    </PageBlock>
  </PageBlock>
);
