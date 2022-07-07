import React from 'react';
import { AppBar, Button, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import { useCurrentUser } from '../hooks/useCurrentUser';
import PagesUriConstnts from '../constants/uriConstants';

export function Header() {
  const currentUser = useCurrentUser();
  const navigate = useNavigate();

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Button color="inherit" onClick={() => navigate(PagesUriConstnts.IndexUri)}>
          CC Market
        </Button>
        <Button color="inherit" onClick={async () => await authService.logout({ email: currentUser.email })}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}
