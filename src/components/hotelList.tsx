import { gql, useQuery } from 'urql';

import { HotelCard } from '@/components/hotelCard';

const HotelCollectionQuery = gql`
  query GetHotelCollectionQuery($limit: Int!, $skip: Int) {
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
`;

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

  const hotels = data?.hotelCollection.items;
  console.log({ data, hotels });

  return (
    <>
      <HotelCard />
    </>
  );
}
