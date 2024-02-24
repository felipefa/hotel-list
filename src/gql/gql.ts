/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetHotelCollection($limit: Int!, $skip: Int) {\n    hotelCollection(limit: $limit, skip: $skip) {\n      limit\n      skip\n      total\n      items {\n        city\n        country\n        description {\n          json\n        }\n        endDate\n        imagesCollection {\n          items {\n            title\n            sys {\n              id\n            }\n            url\n          }\n        }\n        name\n        price\n        rating\n        startDate\n        sys {\n          id\n        }\n      }\n    }\n  }\n": types.GetHotelCollectionDocument,
    "\n  query GetHotelReviews($hotelId: String!) {\n    reviewCollection(where: { hotel: { sys: { id: $hotelId } } }) {\n      limit\n      skip\n      total\n      items {\n        comment {\n          json\n        }\n        customer {\n          firstName\n          lastName\n        }\n        feedback\n        rating\n        sys {\n          id\n        }\n        title\n      }\n    }\n  }\n": types.GetHotelReviewsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetHotelCollection($limit: Int!, $skip: Int) {\n    hotelCollection(limit: $limit, skip: $skip) {\n      limit\n      skip\n      total\n      items {\n        city\n        country\n        description {\n          json\n        }\n        endDate\n        imagesCollection {\n          items {\n            title\n            sys {\n              id\n            }\n            url\n          }\n        }\n        name\n        price\n        rating\n        startDate\n        sys {\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetHotelCollection($limit: Int!, $skip: Int) {\n    hotelCollection(limit: $limit, skip: $skip) {\n      limit\n      skip\n      total\n      items {\n        city\n        country\n        description {\n          json\n        }\n        endDate\n        imagesCollection {\n          items {\n            title\n            sys {\n              id\n            }\n            url\n          }\n        }\n        name\n        price\n        rating\n        startDate\n        sys {\n          id\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetHotelReviews($hotelId: String!) {\n    reviewCollection(where: { hotel: { sys: { id: $hotelId } } }) {\n      limit\n      skip\n      total\n      items {\n        comment {\n          json\n        }\n        customer {\n          firstName\n          lastName\n        }\n        feedback\n        rating\n        sys {\n          id\n        }\n        title\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetHotelReviews($hotelId: String!) {\n    reviewCollection(where: { hotel: { sys: { id: $hotelId } } }) {\n      limit\n      skip\n      total\n      items {\n        comment {\n          json\n        }\n        customer {\n          firstName\n          lastName\n        }\n        feedback\n        rating\n        sys {\n          id\n        }\n        title\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;