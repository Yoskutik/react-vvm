import { FC, useState } from 'react';
import {
  AppBar, Box, Button, Toolbar, Typography, IconButton, Theme, Drawer, ListItem, ListItemText, List, ListItemButton,
} from '@mui/material';
import { GitHub, Menu, ChevronLeft } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

type LinkProps = {
  href: string;
  text: string;
};

const hoverSx = {
  '&:hover': {
    color: (theme: Theme) => theme.palette.primary.main,
  },
};

const Link: FC<LinkProps> = ({ href, text }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Button
      sx={{ textTransform: 'none', fontWeight: 'bold', fontSize: 16, ...hoverSx }}
      color={location.pathname === href ? 'primary' : 'inherit'}
      onClick={() => navigate(href)}
    >
      {text}
    </Button>
  );
};

const DrawerLink: FC<LinkProps & { onClick: () => void }> = ({ href, text, onClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const onButtonClick = () => {
    href.startsWith('http') ? window.open(href) : navigate(href);
    onClick();
  };

  return (
    <ListItem disablePadding>
      <ListItemButton
        style={{ backgroundColor: location.pathname === href ? '#f0f7ff' : undefined }}
        onClick={onButtonClick}
      >
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

const pages = [
  { href: '/', title: 'About' },
  { href: '/getting-started', title: 'Getting started' },
  { href: '/docs', title: 'Docs' },
  { href: '/examples', title: 'Examples' },
];

export const Header: FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <AppBar color="default" position="sticky" sx={{ zIndex: theme => theme.zIndex.drawer + 1, top: 0 }}>
        <Toolbar>
          <Box sx={{ display: { xs: 'block', sm: 'none' }, mr: 1 }}>
            <IconButton onClick={() => setIsDrawerOpen(v => !v)}>
              {isDrawerOpen ? <ChevronLeft /> : <Menu />}
            </IconButton>
          </Box>
          <Typography component="h1" variant="h5">
            React VVM
          </Typography>
          <div style={{ flex: 1 }} />

          <Box sx={{ gap: { sm: 0.5, md: 1 }, display: { xs: 'none', sm: 'flex' } }}>
            {pages.map(({ href, title }) => (
              <Link text={title} href={href} key={href} />
            ))}
            <IconButton
              href="https://github.com/yoskutik/react-vvm"
              target="_blank"
              color="inherit"
              rel="noreferer"
              size="medium"
              sx={hoverSx}
            >
              <GitHub />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} disableScrollLock>
        <Toolbar />
        <List sx={{ width: '200px' }}>
          {pages.map(({ href, title }) => (
            <DrawerLink text={title} href={href} key={href} onClick={() => setIsDrawerOpen(false)} />
          ))}
          <DrawerLink
            href="https://github.com/yoskutik/react-vvm"
            onClick={() => setIsDrawerOpen(false)}
            text="GitHub"
          />
        </List>
      </Drawer>
    </>
  );
};
