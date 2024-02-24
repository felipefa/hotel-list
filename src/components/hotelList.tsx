import { useQuery } from 'urql';

import { HotelCard } from '@/components/hotelCard';
import { graphql } from '@/gql';
import { Hotel } from '@/gql/graphql';

const HotelCollectionQuery = graphql(`
  query GetHotelCollection($limit: Int!, $skip: Int) {
    hotelCollection(limit: $limit, skip: $skip) {
      limit
      skip
      total
      items {
        name
        rating
        price
        country
        city
        startDate
        endDate
        sys {
          id
        }
      }
    }
  }
`);

export function HotelList() {
  const [HotelCollectionQueryResult] = useQuery({
    query: HotelCollectionQuery,
    variables: {
      limit: 5,
      skip: 0,
    },
  });

  const { data, fetching, error } = HotelCollectionQueryResult;

  if (fetching) return <p>Loading...</p>;

  if (error) return <p>Oh no... {error.message}</p>;

  const hotels = data?.hotelCollection?.items as Hotel[];

  return (
    <>
      {hotels?.map((hotel) => (
        <HotelCard key={hotel?.sys.id} hotel={hotel} />
      ))}
    </>
  );
}
