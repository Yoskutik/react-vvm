import { Box, Typography } from '@mui/material';
import { Code, Title } from '@components';
import { headings } from '../headings';
import { ExampleBlock } from '../ExampleBlock';
import makeObservableExample from './MakeObservable.example';
import diExample from './DI.example';
import errorsExample from './Errors.example';

export const UsefulExamples = () => (
  <Box sx={{ mt: 7 }}>
    <Title variant="h3" text="Useful examples" id={headings.useful.main} />
    <Typography component="p" sx={{ mt: 2 }}>
      This section contains some tricks that can simplify you development process.
    </Typography>

    <ExampleBlock
      title={<>Automatic <Code>makeObservable</Code></>}
      id={headings.useful.makeObservable}
      example={makeObservableExample}
      sx={{ mt: 2 }}
    >
      If you sure that most case your view models will contain observable fields you can make calling {' '}
      <Code>makeObservable</Code> automatic, so you don&apos;t need to call it for each ViewModel separately. But be
      aware, if you use this code, you should create your reactions in the <Code>onViewMounted</Code> hook instead of
      constructor due to the fact that view model will not be observable in it.
    </ExampleBlock>

    <ExampleBlock title="Enabling DI pattern" id={headings.useful.di} example={diExample}>
      I really like the DI pattern. And I highly recommend you to use this pattern if you application is big. This
      pattern can have a big impact on the ability to scale your application. With the DI you can create common MobX
      stores for whole application. Such Redux does, but with DI + MobX these stores can be logically separated, can
      contain methods and can be easily used at any part of your code, including both views and view models.
    </ExampleBlock>

    <ExampleBlock title="Using Error Boundary" id={headings.useful.errors} example={errorsExample}>
      React applications have a few problems. One of them is error handling. If some of your component throws an error
      and you don&apos;t handle it, all the virtual DOM tree will die. FaceBook recommends to use ErrorBoundary to
      handle such errors. But it can be inconvenient to use it - you should always think where to use it, and there can
      be a lot of repeating code of using the same error boundary. But with this package you can add error boundaries to
      all of your views and childViews, so you don&apos;t actually have to think about using it at all.
    </ExampleBlock>
  </Box>
);
