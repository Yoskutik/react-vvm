import { Box } from '@mui/material';
import { Code, Title } from '@components';
import { headings } from '../headings';
import { ExampleBlock } from '../ExampleBlock';
import typingExample from './Typing.example';
import optionsExample from './ViewProps.example';
import parentExample from './Parent.example';
import hooksExample from './Hooks.example';
import reactionsExample from './Reactions.example';

export const ViewModelExample = () => (
  <Box sx={{ mt: 3 }}>
    <Title variant="h4" text="ViewModel" id={headings.basic.viewModel.main} />

    <ExampleBlock
      title={<>Typing <Code>parent</Code> and <Code>viewProps</Code></>}
      id={headings.basic.viewModel.typings}
      example={typingExample}
    >
      View models have link to their parents and also have link to view&apos;s props. And you can type both of these
      fields.
    </ExampleBlock>

    <ExampleBlock
      title={<>Using <Code>parent</Code></>}
      id={headings.basic.viewModel.parent}
      example={parentExample}
    >
      If a view is located somewhere inside another view, inner view can use outer one&apos;s view model.
    </ExampleBlock>

    <ExampleBlock
      title={<>Observing <Code>viewProps</Code></>}
      id={headings.basic.viewModel.viewProps}
      example={optionsExample}
    >
      The <Code>viewProps</Code> field updates every time the view is rendered with new props. The view is memoized, so
      the amount of updates is minimized. But you need to keep in mind a few rules when you want to observe {' '}
      <Code>viewProps</Code>. If you are using <Code>viewProps</Code> inside an <Code>autorun</Code> or an observer
      component (<Code>observer</Code>, <Code>view</Code> or <Code>childView</Code>), when the reaction will be called
      every time the view is rendered with new props.
    </ExampleBlock>

    <ExampleBlock title="View lifecycle hooks" id={headings.basic.viewModel.hooks} example={hooksExample}>
      You add handle some of the view lifecycle state changes, such as mounting, unmounting and updating. There are 3
      methods for each hook in the <Code>ViewModel</Code>.
    </ExampleBlock>

    <ExampleBlock title="Creating reactions" id={headings.basic.viewModel.reactions} example={reactionsExample}>
      To observe anything in a view model, you <i>should</i> use ViewModel&apos;s <Code>reaction</Code>, {' '}
      <Code>autorun</Code> and <Code>addDisposer</Code> methods. These methods are added to automatically dispose
      reactions, when the view becomes unmounted. You can also not to use these methods, but in these case there can be
      a probability of a memory leak formation.
    </ExampleBlock>
  </Box>
);
