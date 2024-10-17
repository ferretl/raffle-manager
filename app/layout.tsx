import type { Metadata } from 'next';
import '@fontsource/inter';
import './globals.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { IconButton, Toolbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Raffle Manager',
  description: 'Manage your raffles with ease',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {renderAppBar()}
        {children}
      </body>
    </html>
  );
}

const renderAppBar = () => (
  <AppBar
    position="static"
    sx={{
      bgcolor: '#1E1E1E',
      color: '#D9D9D9',
    }}
  >
    <Toolbar>
      <Link href="/">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <HomeIcon />
        </IconButton>
      </Link>
    </Toolbar>
  </AppBar>
);
