import { Button } from '@/components/button';

export function HotelCard() {
  return (
    <article className="border-2 border-accent-50 divide-x-2 grid grid-cols-3 rounded-md w-full">
      <img
        className="aspect-4/3 bg-accent-50 bg-origin-border col-span-1"
        src="https://placehold.co/533x400/F3E7F1/6A3460?font=open-sans&text=Image"
        alt="Hotel picture"
      />
      <div className="col-span-2 flex flex-col p-6 space-y-6">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h3 className="font-bold text-4xl text-accent-500">Hotel Name</h3>
            <p className="font-bold text-4xl tracking-widest">
              &#x1F7CA;&#x1F7CA;&#x1F7CA;&#x1F7CA;&#x1F7CA;
            </p>
          </div>
          <p>City - Country</p>
        </div>

        <div className="flex-1">
          <p className="line-clamp-3 overflow-hidden">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            iure recusandae sequi fuga doloribus eos hic dolor molestias quo
            ipsum placeat culpa pariatur sed, illum natus facilis delectus eum?
            Quisquam, quod. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Obcaecati iure recusandae sequi fuga doloribus eos hic dolor
            molestias quo ipsum placeat culpa pariatur sed, illum natus facilis
            delectus eum?
          </p>
        </div>

        <div className="flex justify-between">
          <Button>Show Reviews</Button>
          <div className="flex flex-col items-end">
            <p className="text-5xl">100 €</p>
            <p>
              <time>01.05.2024</time> - <time>05.05.2024</time>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
