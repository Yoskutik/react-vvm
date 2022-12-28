import { Box, Button, Grid, Toolbar } from '@mui/material';
import { childView } from '@yoskutik/react-vvm';
import { PageWithNavigationViewModel } from './PageWithNavigationViewModel';

const Link = childView<PageWithNavigationViewModel>()<{ text: string, id: string }>(({ text, id, viewModel }) => (
  <Button
    color={viewModel.firstVisibleHeader === id ? 'primary' : 'inherit'}
    style={{
      backgroundColor: viewModel.firstVisibleHeader === id ? '#f0f7ff' : undefined,
      fontWeight: viewModel.firstVisibleHeader === id ? 'bold' : undefined,
    }}
    sx={{
      transitionProperty: 'font-weight, background-color',
      justifyContent: 'flex-start',
      fontSize: { sm: 13, md: 14 },
      textTransform: 'none',
      textAlign: 'initial',
      width: '100%',
    }}
    onClick={() => viewModel.scrollToHeading(id)}
  >
    {text}
  </Button>
));

export const AnchorNavigation = childView<PageWithNavigationViewModel>()(({ viewModel }) => (
  <Grid
    sx={{
      borderRight: '1px solid rgba(0, 0, 0, 0.12)',
      display: { xs: 'none', sm: 'block' },
      width: { sm: 200, md: 250 },
      backgroundColor: '#fff',
      maxHeight: '100vh',
      position: 'sticky',
      flexShrink: 0,
      top: 0,
      mt: -8,
    }}
  >
    <Toolbar />
    <Box sx={{ p: 1, overflow: 'auto', maxHeight: 'calc(100vh - 64px)' }}>
      {viewModel.headingsOrdered.map(({ id, level, text }) => (
        <Box sx={{ pl: level * 2.5 }} key={id}>
          <Link text={text} id={id} />
        </Box>
      ))}
    </Box>
  </Grid>
));
