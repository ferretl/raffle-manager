'use client';

import * as React from 'react';
import gridItem from '../components/gridItem';
import { homeGridItems } from '../consts/homeGridItems';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl mb-10">Welcome to the Raffle Manager</h1>
        <div className="w-full h-[20vh] rounded-lg border-2 border-current p-4">
          <div className="grid grid-cols-2 gap-4">
            {homeGridItems.map(gridItem)}
          </div>
        </div>
      </div>
    </div>
  );
}

