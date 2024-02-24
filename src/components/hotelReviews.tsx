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
    <ul className="bg-accent-100 divide-accent-50 divide-y-2 px-16 py-8 overflow-hidden text-accent-700">
      {fetching && <p className="text-center">Loading...</p>}

      {error && <p className="text-center">Oh no, something went wrong...</p>}

      {reviews?.length === 0 && <p className="text-center">No reviews yet.</p>}

      {Number(reviews?.length || 0) > 0 &&
        reviews?.map((review) => (
          <li className="flex py-12 gap-8" key={review.sys.id}>
            <p
              className="bg-accent-50 flex font-bold items-center justify-center mt-2 rounded-full size-16 text-xl"
              title={`${review.feedback} review`}
            >
              {review.feedback === 'positive' ? (
                <span>&#xFF0B;</span>
              ) : (
                <span>&#xFF0D;</span>
              )}
            </p>
            <div className="flex flex-1 flex-col space-y-4">
              <h4 className="font-bold text-xl">
                {review.customer?.firstName} {review.customer?.lastName}
              </h4>
              <p className="whitespace-pre-wrap">
                {documentToPlainTextString(review.comment?.json)}
              </p>
            </div>
          </li>
        ))}
    </ul>
  );
}
