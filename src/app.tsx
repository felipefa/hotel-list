import * as React from 'react';

import { Button } from '@/components/button';
import { HotelList } from '@/components/hotelList';

export function App() {
  const [showHotels, setShowHotels] = React.useState(false);

  function handleShowHotels() {
    setShowHotels(true);
  }

  return (
    <main className="flex flex-1 flex-col items-center justify-center max-w-7xl min-h-screen mx-auto space-y-16 py-8">
      <Button onClick={handleShowHotels}>Load Hotels</Button>
      {showHotels && <HotelList />}
    </main>
  );
}
