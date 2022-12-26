import { FC, memo } from 'react';
import { Alert, Typography } from '@mui/material';
import { Code, TextLink } from '@components';
import { Grid, GridDivider, GridItem, GridTitle } from '../Grid';

export const VMDescription: FC = memo(() => (
  <Grid>
    <GridTitle text="Properties" />
    <GridDivider />

    <GridItem item="@observable.ref readonly parent">
      <Typography component="p">
        A link to a parent view model.
      </Typography>
      <Typography component="p">
        See typing and using parent view model:
        <TextLink id="basic-examples.viewmodel.typing-parent-and-viewprops" />.
      </Typography>
    </GridItem>

    <GridItem item="@observable.ref readonly viewProps">
      <Typography component="p">
        A link to a props the view has rendered with. Every time the view is renders it updates this field. Every view
        is memoized, and this mean that this object will be updated only if at least 1 property has been changed.
      </Typography>
      <Alert severity="warning">
        Be careful observing <Code>viewProps</Code>. If some of yours observer components or reactions are using {' '}
        <Code>viewProps</Code>, they might update every time any prop has changed, even if the updated prop is not
        used directly. For better understanding of how you should observe the props, please, see the example.
      </Alert>
      <Typography component="p">
        See typing, using and observing <Code>viewProps</Code>:
        <TextLink id="basic-examples.viewmodel.observing-viewprops" />.
      </Typography>
    </GridItem>

    <GridDivider />

    <GridTitle text="Methods" />

    <GridDivider />

    <GridItem item="protected onViewMounted?()">
      <Typography component="p">
        A hook which is called after the view becomes mounted. The function is called in the {' '}
        <Code>useEffect</Code> hook.
      </Typography>
    </GridItem>

    <GridItem item="protected onViewUpdated?()">
      <Typography component="p">
        A hook which is called after the view is rendered besides the first render. This function is called in
        the <Code>useEffect</Code> hook.
      </Typography>
    </GridItem>

    <GridItem item="protected onViewUnmounted?()">
      <Typography component="p">
        A hook which is called after the view becomes unmounted. The function is called in the {' '}
        <Code>useEffect</Code> hook.
      </Typography>
    </GridItem>

    <GridDivider />

    <GridItem item="protected onViewMountedSync?()">
      <Typography component="p">
        A hook which is called after the view becomes mounted. The function is called in the {' '}
        <Code>useLayoutEffect</Code> hook.
      </Typography>
    </GridItem>

    <GridItem item="protected onViewUpdatedSync?()">
      <Typography component="p">
        A hook which is called after the view is rendered besides the first render. This function is called in
        the <Code>useLayoutEffect</Code> hook.
      </Typography>
    </GridItem>

    <GridItem item="protected onViewUnmountedSync?()">
      <Typography component="p">
        A hook which is called after the view becomes unmounted. The function is called in the {' '}
        <Code>useLayoutEffect</Code> hook.
      </Typography>
      <Typography component="p">
        See using view hooks:
        <TextLink id="basic-examples.viewmodel.view-lifecycle-hooks" />.
      </Typography>
    </GridItem>

    <GridDivider />

    <GridItem item="protected autorun(...args)">
      <Typography component="p">
        An add-on function for an <Code>autorun</Code> from MobX. When view becomes unmounted, the disposer of this
        function will be called automatically.
      </Typography>
    </GridItem>

    <GridItem item="protected reaction(...args)">
      <Typography component="p">
        An add-on function for a <Code>reaction</Code> from MobX. When view becomes unmounted, the disposer of this
        function will be called automatically.
      </Typography>
    </GridItem>

    <GridItem item="protected addDisposer(disposer)">
      <Typography component="p">
        A function which adds a disposer that will be called after the view becomes unmounted.
      </Typography>
      <Alert severity="warning">
        MobX states that <b>you should always dispose of reactions</b>. This is why <Code>autorun</Code>, {' '}
        <Code>reaction</Code> and <Code>addDisposer</Code> were added to a <Code>ViewModel</Code>. So, please, use it
        every time you want to create reactions <i>inside a view model</i>. Otherwise, you can create a memory leak.
      </Alert>
      <Typography component="p">
        See observing:
        <TextLink id="basic-examples.viewmodel.creating-reactions" />.
      </Typography>
    </GridItem>

    <GridDivider />
  </Grid>
));
