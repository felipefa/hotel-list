import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import React from 'react';

import { Hotel } from '@/gql/graphql';

interface HotelDescriptionProps {
  hotel: Hotel;
}

export function HotelDescription({ hotel }: HotelDescriptionProps) {
  const [showFullDescription, handleToggleFullDescription] = React.useReducer(
    (state) => !state,
    false
  );

  const hotelDescriptionClassName = React.useMemo(
    () =>
      `${
        showFullDescription ? '' : 'line-clamp-3'
      } overflow-hidden text-sm md:text-base whitespace-pre-wrap`,
    [showFullDescription]
  );

  const hotelDescriptionFormatted = React.useMemo(
    () => documentToPlainTextString(hotel.description?.json),
    [hotel.description?.json]
  );

  const toggleDescriptionButtonLabel = showFullDescription
    ? 'Hide'
    : 'Read more...';

  return (
    <>
      <p className={hotelDescriptionClassName}>{hotelDescriptionFormatted}</p>
      <button
        className="font-bold text-accent-500 text-sm md:text-base hover:underline"
        onClick={handleToggleFullDescription}
      >
        {toggleDescriptionButtonLabel}
      </button>
    </>
  );
}
