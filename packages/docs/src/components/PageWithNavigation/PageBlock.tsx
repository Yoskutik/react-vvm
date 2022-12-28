import { FC, ReactNode, useRef } from 'react';
import { Grid, Typography } from '@mui/material';
import { TPageBlockContext, usePageBlockContext, PageBlockContextProvider } from './PageBlockContext';
import { Title } from './Title';

type Props = {
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  forcedLevel?: 1 | 2 | 3;
};

export const PageBlock: FC<Props> = ({ title, description, children, forcedLevel }) => {
  const { level, title: contextTitle } = usePageBlockContext(forcedLevel);
  const ref = useRef<HTMLDivElement>();

  const contextValue: TPageBlockContext = {
    level: (level + 1) as 1 | 2 | 3,
    title: {
      parent: contextTitle,
      ref,
    },
  };

  return (
    <Grid container gap={({ 1: 4, 2: 3, 3: 2 })[level]} direction="column">
      <Title variant={`h${level + 2}` as any} ref={ref}>
        {title}
      </Title>

      {description && (
        <Grid container gap={2} sx={{ mt: ({ 1: -2, 2: -1, 3: undefined })[level] }}>
          {typeof description === 'string' ? (
            <Typography component="p">
              {description}
            </Typography>
          ) : (
            description
          )}
        </Grid>
      )}

      <PageBlockContextProvider value={contextValue}>
        {children}
      </PageBlockContextProvider>
    </Grid>
  );
};
