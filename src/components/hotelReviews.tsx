import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { useQuery } from 'urql';

import { graphql } from '@/gql';
import { Hotel, Review } from '@/gql/graphql';

const HotelReviewsQuery = graphql(`
  query GetHotelReviews($hotelId: String!) {
    reviewCollection(where: { hotel: { sys: { id: $hotelId } } }) {
      limit
      skip
      total
      items {
        comment {
          json
        }
        customer {
          firstName
          lastName
        }
        feedback
        rating
        sys {
          id
        }
        title
      }
    }
  }
`);

interface HotelReviewsProps {
  hotel: Hotel;
}

export function HotelReviews({ hotel }: HotelReviewsProps) {
  const [HotelReviewsQueryResult] = useQuery({
    query: HotelReviewsQuery,
    variables: {
      hotelId: hotel.sys.id,
    },
  });

  const { data, fetching, error } = HotelReviewsQueryResult;

  const reviews = data?.reviewCollection?.items as Review[] | undefined;

  return (
    <ul className="bg-accent-100 divide-accent-50 divide-y-2 px-8 sm:px-12 md:px-16 py-4 md:py-8 overflow-hidden text-accent-700">
      {fetching && <p className="text-center">Loading...</p>}

      {error && <p className="text-center">Oh no, something went wrong...</p>}

      {reviews?.length === 0 && <p className="text-center">No reviews yet.</p>}

      {Number(reviews?.length || 0) > 0 &&
        reviews?.map((review) => (
          <li className="flex py-8 md:py-12 gap-4 md:gap-8" key={review.sys.id}>
            <p
              className="bg-accent-50 flex font-bold items-center justify-center mt-2 rounded-full size-8 sm:size-12 md:size-16 sm:text-lg md:text-xl xl:text-2xl"
              title={`${review.feedback} review`}
            >
              {review.feedback === 'positive' ? (
                <span className="text-emerald-600">&#xFF0B;</span>
              ) : (
                <span className="text-red-700">&#xFF0D;</span>
              )}
            </p>
            <div className="flex flex-1 flex-col space-y-4">
              <h4 className="font-bold text-lg md:text-xl">
                {review.customer?.firstName} {review.customer?.lastName}
              </h4>
              <p className="text-sm md:text-base whitespace-pre-wrap">
                {documentToPlainTextString(review.comment?.json)}
              </p>
            </div>
          </li>
        ))}
    </ul>
  );
}
