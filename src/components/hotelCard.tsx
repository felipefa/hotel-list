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
      <div className="divide-accent-50 md:divide-x-2 divide-y-2 md:divide-y-0 grid grid-cols-3">
        <div className="col-span-3 md:col-span-1">
          <ImageCarousel imageAssets={imageAssets} />
        </div>

        <div className="col-span-3 md:col-span-2 flex flex-col p-4 md:p-6 space-y-6">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h3 className="font-bold line-clamp-1 lg:leading-normal text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-accent-500">
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

          <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-0 justify-end md:justify-between">
            <Button onClick={toggleShowReviews}>
              {toggleReviewsButtonLabel}
            </Button>
            <div className="flex flex-col md:items-end">
              <p className="text-3xl sm:text-4xl lg:text-5xl">
                {priceFormatted}
              </p>
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
