import { memo } from 'react';
import { Box, Typography, Link } from '@mui/material';
import { AnchorNavigation, PageWithNavigation, ReturnButton, Title } from '@components';
import { headings } from './headings';
import { ViewExample } from './ViewExample';
import { ConfigurationExample } from './ConfigurationExample';
import { ViewModelExample } from './ViewModelExample';
import { UsefulExamples } from './UsefullExamples';

const Examples = memo(() => (
  <PageWithNavigation>
    <ReturnButton />
    <Box sx={{ display: 'flex', width: '100%' }}>
      <AnchorNavigation />
      <Box sx={{ justifyContent: 'center', padding: '2rem 3rem', display: 'flex', width: '100%', overflow: 'hidden' }}>
        <Box sx={{ maxWidth: '100%', width: '1200px' }}>
          <Title variant="h3" text="Basic examples" id={headings.basic.main} />
          <Typography component="p" sx={{ mt: 2 }}>
            This section contains examples of basic usage of entities with all possible typings and variants.
          </Typography>
          <ViewExample />
          <ViewModelExample />
          <ConfigurationExample />

          <UsefulExamples />

          <Box sx={{ mt: 7 }}>
            <Title variant="h3" text="Complex examples" id={headings.complex} />
            <Typography component="p" sx={{ mt: 2 }}>
              And here&apos;s some complex examples of whole React applications with React VVM. You can find them here
              {' '}
              <Link
                href="https://github.com/Yoskutik/react-vvm/tree/master/examples"
                target="_blank"
                rel="noreferer"
              >
                Github
              </Link>.
            </Typography>
          </Box>
          <div style={{ height: '2rem' }} />
        </Box>
      </Box>
    </Box>
  </PageWithNavigation>
));

export default Examples;
