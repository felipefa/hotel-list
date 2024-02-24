import { Button } from '@/components/button';
import { RatingStars } from '@/components/ratingStars';
import { Hotel } from '@/gql/graphql';
import { formatDate } from '@/utils/formatDate';
import { formatPrice } from '@/utils/formatPrice';

interface HotelCardProps {
  hotel: Hotel;
}

export function HotelCard({ hotel }: HotelCardProps) {
  const image =
    hotel.imagesCollection?.items?.[0]?.url ||
    'https://placehold.co/533x400/F3E7F1/6A3460?font=open-sans&text=Image';
  const priceFormatted = formatPrice(hotel.price);
  const startDateFormatted = formatDate(hotel.startDate);
  const endDateFormatted = formatDate(hotel.endDate);

  return (
    <article className="border-2 border-accent-50 divide-x-2 grid grid-cols-3 rounded-md w-full">
      <img
        className="aspect-4/3 bg-accent-50 col-span-1 h-full object-cover self-center"
        src={image}
        alt="Hotel picture"
      />
      <div className="col-span-2 flex flex-col p-6 space-y-6">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h3 className="font-bold line-clamp-1 text-4xl text-accent-500">
              {hotel.name}
            </h3>
            <RatingStars rating={hotel.rating || 0} />
          </div>
          <p>
            {hotel.city} - {hotel.country}
          </p>
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
            <p className="text-5xl">{priceFormatted}</p>
            <p>
              <time dateTime={hotel.startDate}>{startDateFormatted}</time> -{' '}
              <time dateTime={hotel.endDate}>{endDateFormatted}</time>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
