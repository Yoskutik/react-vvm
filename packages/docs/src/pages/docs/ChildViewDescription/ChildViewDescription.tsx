import { Typography } from '@mui/material';
import { Highlighter, Code, PageBlock, TextLink } from '@components';
import example from './ChildView.example';

export const ChildViewDescription = () => (
  <PageBlock
    title="ChildView"
    description={(
      <>
        <Typography component="p">
          As the <Code>view</Code>, the <Code>childView</Code> function creates an object that also implements the view
          logic from the MVVM pattern. But there&apos;s a big difference in these functions - ChildView does not call
          {' '} <Code>vmFactory</Code> and uses a view&apos;s view model as own one.
        </Typography>
        <Typography component="p">
          By default, every child view is an observer and is memoized. And you can change it. The options of creating
          view child is same as for view.
        </Typography>
      </>
    )}
  >
    <PageBlock title="Usage">
      <Highlighter code="childView()(Component[, options])" />

      <Typography component="p">
        See using ChildView:
        <TextLink id="basic-examples.view-and-childview.using-childview" />.
      </Typography>

      <PageBlock
        title="Options"
        description={(
          <Typography component="p">
            See setting options:
            <TextLink id="basic-examples.view-and-childview.setting-options" />.
          </Typography>
        )}
      />
    </PageBlock>

    <PageBlock title="Usage sample">
      <Highlighter code={example} />
    </PageBlock>
  </PageBlock>
);
