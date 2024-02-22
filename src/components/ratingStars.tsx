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
    <p className="font-bold text-4xl tracking-widest text-accent-50">
      {ratings.map((ratingItem) => (
        <span key={ratingItem.value} className={ratingItem.className}>
          &#x1F7CA;
        </span>
      ))}
    </p>
  );
}
