import { memo } from 'react';
import { Typography } from '@mui/material';
import { PageBlock, PageWithNavigation, TextLink } from '@components';
import { ViewExample } from './ViewExample';
import { ConfigurationExample } from './ConfigurationExample';
import { ViewModelExample } from './ViewModelExample';
import { UsefulExamples } from './UsefullExamples';

const Examples = memo(() => (
  <PageWithNavigation>
    <PageBlock
      description="This section contains examples of basic usage of entities with all possible typings and variants."
      title="Basic examples"
    >
      <ViewExample />
      <ViewModelExample />
      <ConfigurationExample />
    </PageBlock>

    <PageBlock
      description="This section contains some tricks that can simplify you development process."
      title="Useful examples"
    >
      <UsefulExamples />
    </PageBlock>

    <PageBlock
      title="Complex examples"
      description={(
        <Typography component="p">
          And here&apos;s some complex examples of whole React applications with React VVM. You can find them here
          <TextLink
            href="https://github.com/Yoskutik/react-vvm/tree/master/examples"
            text="Github"
          />.
        </Typography>
      )}
    />
  </PageWithNavigation>
));

export default Examples;
