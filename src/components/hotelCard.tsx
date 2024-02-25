import React from 'react';

import { Button } from '@/components/button';
import { HotelDescription } from '@/components/hotelDescription';
import { HotelReviews } from '@/components/hotelReviews';
import { ImageCarousel } from '@/components/imageCarousel';
import { RatingStars } from '@/components/ratingStars';
import { Asset, Hotel } from '@/gql/graphql';
import { formatDate } from '@/utils/formatDate';
import { formatPrice } from '@/utils/formatPrice';

interface HotelCardProps {
  hotel: Hotel;
}

export function HotelCard({ hotel }: HotelCardProps) {
  const [showReviews, toggleShowReviews] = React.useReducer(
    (state) => !state,
    false
  );

  const imageAssets = (hotel.imagesCollection?.items || []) as Asset[];
  const priceFormatted = formatPrice(hotel.price);
  const startDateFormatted = formatDate(hotel.startDate);
  const endDateFormatted = formatDate(hotel.endDate);
  const toggleReviewsButtonLabel = showReviews
    ? 'Hide reviews'
    : 'Show reviews';

  return (
    <article className="border-2 border-accent-50 divide-accent-50 divide-y-2 overflow-hidden rounded-md w-full">
      <div className="divide-accent-50 divide-x-2 grid grid-cols-3">
        <ImageCarousel imageAssets={imageAssets} />

        <div className="col-span-2 flex flex-col p-6 space-y-6">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h3 className="font-bold line-clamp-1 leading-normal text-4xl text-accent-500">
                {hotel.name}
              </h3>
              <RatingStars rating={hotel.rating || 0} />
            </div>
            <p>
              {hotel.city} - {hotel.country}
            </p>
          </div>

          <div className="flex-1">
            <HotelDescription hotel={hotel} />
          </div>

          <div className="flex justify-between">
            <Button onClick={toggleShowReviews}>
              {toggleReviewsButtonLabel}
            </Button>
            <div className="flex flex-col items-end">
              <p className="text-5xl">{priceFormatted}</p>
              <p>
                <time dateTime={hotel.startDate}>{startDateFormatted}</time> -{' '}
                <time dateTime={hotel.endDate}>{endDateFormatted}</time>
              </p>
            </div>
          </div>
        </div>
      </div>

      {showReviews && <HotelReviews hotel={hotel} />}
    </article>
  );
}
