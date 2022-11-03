import { Alert, Box, Link, Typography } from '@mui/material';
import { Highlighter, Code, Title } from '@components';
import { headings as examplesHeadings } from '@pages/examples/headings';
import { headings } from '../headings';
import example from './ChildViewComponentDescription.example';

export const ChildViewComponentDescription = () => (
  <Box>
    <Title text="ChildViewComponent" variant="h3" id={headings.childViewComponent.main} />
    <Typography component="p" sx={{ mt: 2 }}>
      We highly recommend use to use React VVM with functional style components. But to increase compatibility, we added
      a class <Code>ChildViewComponent</Code>, so you can create an instances of ChildView as class components.
    </Typography>
    <Alert severity="info" sx={{ mt: 2 }}>
      If you want to create an instance of View as class component, please, see the {' '}
      <Link href={`#/examples?heading=${examplesHeadings.basic.view.classComponents}`}>
        example
      </Link>.
    </Alert>
    <Typography component="p" sx={{ mt: 2 }}>
      The only difference between class-style ChildView and functional-style ChildView is that in the class-style {' '}
      <Code>viewModel</Code> field is part of class, while in the function-style it&apos;s a property. And since
      functional-style child views are declared with <Code>memo</Code>, <Code>ChildViewComponent</Code> is extended
      from <Code>PureComponent</Code>.
    </Typography>

    <Title text="Usage sample" variant="h5" id={headings.view.sample} sx={{ mt: 3 }} />
    <Highlighter sx={{ mt: 2 }} code={example} />
  </Box>
);
