import { FC, ReactNode } from 'react';
import { Box, Button, Toolbar } from '@mui/material';
import { childView } from '@yoskutik/react-vvm';
import { PageWithNavigationViewModel } from './PageWithNavigationViewModel';

const Link: FC<{ text: string, id: string }> = childView<PageWithNavigationViewModel>()(({ text, id, viewModel }) => (
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

type TAnchorNavigationItem = {
  text: string;
  id: string;
  children?: ReactNode;
};

export const AnchorNavigationItem: FC<TAnchorNavigationItem> = ({ text, id, children }) => (
 <>
   <Link text={text} id={id} />
   {children && (
     <Box sx={{ pl: 2.5 }}>
       {children}
     </Box>
   )}
 </>
);

export const AnchorNavigation: FC<{ children: ReactNode }> = ({ children }) => (
  <Box
    sx={{
      borderRight: '1px solid rgba(0, 0, 0, 0.12)',
      display: { xs: 'none', sm: 'block' },
      width: { sm: 200, md: 250 },
      backgroundColor: '#fff',
      boxSizing: 'border-box',
      maxHeight: '100vh',
      position: 'sticky',
      flexShrink: 0,
      top: 0,
      mt: -8,
    }}
  >
    <Toolbar />
    <Box sx={{ p: 1 }}>
      {children}
    </Box>
  </Box>
);
