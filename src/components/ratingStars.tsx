import { Star } from '@phosphor-icons/react';
import * as React from 'react';

interface RatingStarsProps {
  rating: number;
}

export function RatingStars({ rating }: RatingStarsProps) {
  const ratings = React.useMemo(
    () =>
      Array.from({ length: 5 }).map((_, index) => ({
        className: index < rating ? 'text-accent-500' : 'text-accent-50',
        value: index + 1,
      })),
    [rating]
  );

  return (
    <p
      className="flex font-bold lg:leading-normal text-xl sm:text-2xl lg:text-3xl xl:text-4xl md:tracking-widest text-accent-50"
      title={`${rating} stars rating`}
    >
      {ratings.map((ratingItem) => (
        <Star
          className={ratingItem.className}
          key={ratingItem.value}
          weight="fill"
        />
      ))}
    </p>
  );
}
