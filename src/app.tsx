import { Button } from '@/components/button';
import { HotelCard } from '@/components/hotelCard';

export function App() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center max-w-7xl min-h-screen mx-auto space-y-16 py-8">
      <Button>Load Hotels</Button>
      <HotelCard />
    </main>
  );
}
