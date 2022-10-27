import { FC } from 'react';
import { Box } from '@mui/material';

export const Footer: FC = () => (
  <Box sx={{ backgroundColor: '#1c1e21', color: '#aaa', display: 'flex', justifyContent: 'center' }}>
    <Box sx={{ width: '1200px', maxWidth: '100%', padding: '1rem 2rem', display: 'flex', flexWrap: 'wrap' }}>
      <span>Contributors are welcome! And God, I really need a designer.</span>
      <div style={{ flex: 1 }} />
      <span>Copyright © 2022 Yoskutik</span>
    </Box>
  </Box>
);
