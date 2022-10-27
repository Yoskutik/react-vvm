import { Alert, Box, Link, Typography } from '@mui/material';
import { Highlighter, Code, Title } from '@components';
import example from './View.example';
import { headings as examplesHeadings } from '@pages/examples/headings';
import { headings } from '../headings';

export const ViewDescription = () => (
  <Box>
    <Title text="View" variant="h3" id={headings.view.main} />
    <Typography component="p" sx={{ mt: 2 }}>
      The <Code>view</Code> function creates an object that implements the view logic from the MVVM pattern. This
      means that view should be responsible for displaying a component in your application.
    </Typography>
    <Typography component="p" sx={{ mt: 2 }}>
      A view takes a <Code>vmFactory</Code> from the <Code>configuration</Code> and call it to create an instance of a
      view model. Also view is responsible for updating view model&apos;s fields <Code>parent</Code> and
      {' '} <Code>viewProps</Code> and for calling view&apos;s lifecycle hooks in the instance of a view model.
    </Typography>
    <Typography component="p" sx={{ mt: 2 }}>
      By default, every view is an observer. But you can configure it.
    </Typography>
    <Alert severity="info" sx={{ mt: 2 }}>
      One of the issues that solves this package is the purity of the code. The fewer props your components have, the
      easier it will be to understand your code for others. And with this package you can minimize amount of props
      passed by observing view model&apos;s fields, its parent&apos;s fields and so on. For example, a ChildView can
      observe its View props.
    </Alert>
    <Typography component="p" sx={{ mt: 2 }}>
      <b>Every view is memoized</b>. And as it states below, the fewer props your view having, the faster your
      application will work. Since the view uses <Code>memo</Code> function, you can also pass the {' '}
      <Code>propsAreEqual</Code> function to it.
    </Typography>

    <Title text="Usage" variant="h5" id={headings.view.usage} sx={{ mt: 3 }} />
    <Highlighter code="view(SomeViewModel)(Component[, options])" sx={{ mt: 2 }} />

    <Title text="Options" variant="h6" id={headings.view.options} sx={{ mt: 3 }} />
    <Typography component="p" sx={{ mt: 2 }}>
      There are two options: <Code>observer</Code> and <Code>propsAreEqual</Code>. If <Code>observer</Code> is
      {' '} <Code>false</Code>, when view will be created as non-observer component. And if <Code>propsAreEqual</Code>
      is set, it will be passed to a <Code>memo</Code> function (See {' '}
      <Link href="https://reactjs.org/docs/react-api.html#reactmemo" rel="noreferrer">
        how&apos;s memo work
      </Link>
      {' '} for better understanding).
    </Typography>
    <Typography component="p" sx={{ mt: 2 }}>
      See setting view options: {' '}
      <Link href={`#/examples?heading=${examplesHeadings.basic.view.options}`}>
        Example
      </Link>.
    </Typography>

    <Title text="Usage sample" variant="h5" id={headings.view.sample} sx={{ mt: 3 }} />
    <Highlighter sx={{ mt: 2 }} code={example} />
  </Box>
);
