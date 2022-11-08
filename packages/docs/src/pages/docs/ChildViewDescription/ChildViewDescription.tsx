import { Box, Link, Typography } from '@mui/material';
import { Highlighter, Code, Title } from '@components';
import example from './ChildView.example';
import { headings } from '../headings';
import { headings as examplesHeadings } from '@pages/examples/headings';

export const ChildViewDescription = () => (
  <Box sx={{ mt: 8 }}>
    <Title text="ChildView" variant="h3" id={headings.childView.main} />
    <Typography component="p" sx={{ mt: 2 }}>
      As the <Code>view</Code>, the <Code>childView</Code> function creates an object that also implements the view
      logic from the MVVM pattern. But there&apos;s a big difference in these functions - ChildView does not call {' '}
      <Code>vmFactory</Code> and uses a view&apos;s view model as own one.
    </Typography>
    <Typography component="p" sx={{ mt: 2 }}>
      By default, every child view is an observer and is memoized. And you can change it. The options of creating view
      child is same as for view.
    </Typography>

    <Title text="Usage" variant="h4" id={headings.childView.usage} sx={{ mt: 3 }} />
    <Highlighter code="childView()(Component[, options])" sx={{ mt: 2 }} />
    <Typography component="p" sx={{ mt: 2 }}>
      See using ChildView: {' '}
      <Link href={`#/examples?heading=${examplesHeadings.basic.view.childView}`}>
        Example
      </Link>.
    </Typography>

    <Title text="Options" variant="h5" id={headings.childView.options} sx={{ mt: 3 }} />
    <Typography component="p" sx={{ mt: 2 }}>
      See setting options: {' '}
      <Link href={`#/examples?heading=${examplesHeadings.basic.view.options}`}>
        Example
      </Link>.
    </Typography>

    <Title text="Usage sample" variant="h4" id={headings.childView.sample} sx={{ mt: 3 }} />
    <Highlighter sx={{ mt: 2 }} code={example} />
  </Box>
);
