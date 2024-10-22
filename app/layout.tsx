import type { Metadata } from 'next';
import '@fontsource/inter';
import './globals.css';
import * as React from 'react';
import AppBar from '../components/appBar';

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
        <AppBar />
        {children}
      </body>
    </html>
  );
}


