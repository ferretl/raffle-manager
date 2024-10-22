'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { IconButton, Toolbar, useTheme } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';

/**
 * A component representing the AppBar
 * @returns A JSX element representing the AppBar
 */
const AppBarComponent: React.FC = () => {
  const theme = useTheme();

  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: isDarkMode ? '#D9D9D9' : '#1e1e1e',
        color: isDarkMode ? '#1E1E1E' : '#D9D9D9',
      }}
    >
      <Toolbar>
        <Link href="/" passHref>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{ mr: 2 }}
          >
            <HomeIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;