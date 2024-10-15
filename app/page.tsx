'use client';

import * as React from 'react';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import { homeGridItems, HomeGridItem } from '../consts/homeGridItems';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl mb-10">Welcome to the Raffle Manager</h1>
        <div className="w-[70vw] h-[20vh] rounded-lg border-2 border-current p-4">
          <div className="grid grid-cols-2 gap-4">
            {homeGridItems.map(renderGridItem)}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 *
 * @param item A HomeGridItem to render
 * @param index The index of the HomeGridItem in the homeGridItems array
 * @returns A JSX element representing the HomeGridItem
 */
const renderGridItem = (item: HomeGridItem, index: number) => (
  <div key={index} className="m-4">
    <Button
      startDecorator={<item.icon />}
      variant="plain"
      size="lg"
      sx={{
        height: '36px',
        width: '300px',
        justifyContent: 'flex-start',
        bgcolor: '#D9D9D9',
        color: '#1e1e1e',
        fontSize: '1.75rem',
        '&:hover': {
          textDecoration: 'underline',
          bgcolor: '#D9D9D9',
        },
      }}
    >
      {item.title}
    </Button>
  </div>
);
