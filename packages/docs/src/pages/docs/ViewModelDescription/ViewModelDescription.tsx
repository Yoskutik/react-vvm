import { Box, Typography } from '@mui/material';
import { Highlighter, Code, Title } from '@components';
import example from './ViewModel.example';
import { headings } from '../headings';
import { VMDescription } from '@pages/docs/ViewModelDescription/VMDescription';

export const ViewModelDescription = () => (
  <Box sx={{ mt: 8 }}>
    <Title text="ViewModel" variant="h3" id={headings.viewModel.main} />
    <Typography component="p" sx={{ mt: 2 }}>
      The <Code>ViewModel</Code> class is an object that implements the view model logic from the MVVM pattern. In
      general case, the <Code>ViewModel</Code> is designed to store observable fields, as well as logic for updating
      them.
    </Typography>
    <Typography component="p" sx={{ mt: 2 }}>
      The <Code>ViewModel</Code> stores a reference to the props object with which the view was rendered with and also a
      reference to the parent view model. Also, <Code>ViewModel</Code> has a few view&apos;s lifecycle methods.
    </Typography>

    <Title variant="h5" id={headings.viewModel.parent} sx={{ mt: 3 }}>
      What is <Code>parent</Code> for a ViewModel?
    </Title>
    <Typography component="p" sx={{ mt: 2 }}>
      The assignment of the parent view model occurs according to the virtual DOM tree. If <Code>View2</Code> is
      located somewhere inside <Code>View1</Code>, then <Code>ViewModel1</Code> will be considered the parent of
      {' '}
      <Code>ViewModel2</Code>.
    </Typography>

    <Title text="Description" variant="h5" id={headings.viewModel.description.main} sx={{ mt: 3 }} />
    <VMDescription />

    <Title text="Usage sample" variant="h5" id={headings.viewModel.sample} sx={{ mt: 3 }} />
    <Highlighter sx={{ mt: 2 }} code={example} />
  </Box>
);
