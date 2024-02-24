/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: { input: any; output: any; }
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: { input: any; output: any; }
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: { input: any; output: any; }
  _Any: { input: any; output: any; }
  _FieldSet: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  hotelCollection?: Maybe<HotelCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsHotelCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/gyfunrv4a4ak/content_types/customer) */
export type Customer = Entry & {
  __typename?: 'Customer';
  contentfulMetadata: ContentfulMetadata;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<CustomerLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/gyfunrv4a4ak/content_types/customer) */
export type CustomerFirstNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gyfunrv4a4ak/content_types/customer) */
export type CustomerLastNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gyfunrv4a4ak/content_types/customer) */
export type CustomerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CustomerCollection = {
  __typename?: 'CustomerCollection';
  items: Array<Maybe<Customer>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CustomerFilter = {
  AND?: InputMaybe<Array<InputMaybe<CustomerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CustomerFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  firstName_contains?: InputMaybe<Scalars['String']['input']>;
  firstName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  firstName_not?: InputMaybe<Scalars['String']['input']>;
  firstName_not_contains?: InputMaybe<Scalars['String']['input']>;
  firstName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastName_contains?: InputMaybe<Scalars['String']['input']>;
  lastName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  lastName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lastName_not?: InputMaybe<Scalars['String']['input']>;
  lastName_not_contains?: InputMaybe<Scalars['String']['input']>;
  lastName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CustomerLinkingCollections = {
  __typename?: 'CustomerLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  reviewCollection?: Maybe<ReviewCollection>;
};


export type CustomerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CustomerLinkingCollectionsReviewCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CustomerLinkingCollectionsReviewCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CustomerLinkingCollectionsReviewCollectionOrder {
  FeedbackAsc = 'feedback_ASC',
  FeedbackDesc = 'feedback_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum CustomerOrder {
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/gyfunrv4a4ak/content_types/hotel) */
export type Hotel = Entry & {
  __typename?: 'Hotel';
  city?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  country?: Maybe<Scalars['String']['output']>;
  description?: Maybe<HotelDescription>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  imagesCollection?: Maybe<AssetCollection>;
  linkedFrom?: Maybe<HotelLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['JSON']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/gyfunrv4a4ak/content_types/hotel) */
export type HotelCityArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gyfunrv4a4ak/content_types/hotel) */
export type HotelCountryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gyfunrv4a4ak/content_types/hotel) */
export type HotelDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gyfunrv4a4ak/content_types/hotel) */
export type HotelEndDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gyfunrv4a4ak/content_types/hotel) */
export type HotelImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gyfunrv4a4ak/content_types/hotel) */
export type HotelLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/gyfunrv4a4ak/content_types/hotel) */
export type HotelNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gyfunrv4a4ak/content_types/hotel) */
export type HotelPriceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gyfunrv4a4ak/content_types/hotel) */
export type HotelRatingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gyfunrv4a4ak/content_types/hotel) */
export type HotelStartDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type HotelCollection = {
  __typename?: 'HotelCollection';
  items: Array<Maybe<Hotel>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HotelDescription = {
  __typename?: 'HotelDescription';
  json: Scalars['JSON']['output'];
  links: HotelDescriptionLinks;
};

export type HotelDescriptionAssets = {
  __typename?: 'HotelDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type HotelDescriptionEntries = {
  __typename?: 'HotelDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type HotelDescriptionLinks = {
  __typename?: 'HotelDescriptionLinks';
  assets: HotelDescriptionAssets;
  entries: HotelDescriptionEntries;
  resources: HotelDescriptionResources;
};

export type HotelDescriptionResources = {
  __typename?: 'HotelDescriptionResources';
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type HotelFilter = {
  AND?: InputMaybe<Array<InputMaybe<HotelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HotelFilter>>>;
  city?: InputMaybe<Scalars['String']['input']>;
  city_contains?: InputMaybe<Scalars['String']['input']>;
  city_exists?: InputMaybe<Scalars['Boolean']['input']>;
  city_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  city_not?: InputMaybe<Scalars['String']['input']>;
  city_not_contains?: InputMaybe<Scalars['String']['input']>;
  city_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  country?: InputMaybe<Scalars['String']['input']>;
  country_contains?: InputMaybe<Scalars['String']['input']>;
  country_exists?: InputMaybe<Scalars['Boolean']['input']>;
  country_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  country_not?: InputMaybe<Scalars['String']['input']>;
  country_not_contains?: InputMaybe<Scalars['String']['input']>;
  country_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  endDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  endDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  imagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price_exists?: InputMaybe<Scalars['Boolean']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  rating_exists?: InputMaybe<Scalars['Boolean']['input']>;
  rating_gt?: InputMaybe<Scalars['Int']['input']>;
  rating_gte?: InputMaybe<Scalars['Int']['input']>;
  rating_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  rating_lt?: InputMaybe<Scalars['Int']['input']>;
  rating_lte?: InputMaybe<Scalars['Int']['input']>;
  rating_not?: InputMaybe<Scalars['Int']['input']>;
  rating_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type HotelLinkingCollections = {
  __typename?: 'HotelLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  reviewCollection?: Maybe<ReviewCollection>;
};


export type HotelLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HotelLinkingCollectionsReviewCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HotelLinkingCollectionsReviewCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HotelLinkingCollectionsReviewCollectionOrder {
  FeedbackAsc = 'feedback_ASC',
  FeedbackDesc = 'feedback_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum HotelOrder {
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  CountryAsc = 'country_ASC',
  CountryDesc = 'country_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

export type Query = {
  __typename?: 'Query';
  _entities: Array<Maybe<_Entity>>;
  _node?: Maybe<_Node>;
  _service: _Service;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  customer?: Maybe<Customer>;
  customerCollection?: Maybe<CustomerCollection>;
  entryCollection?: Maybe<EntryCollection>;
  hotel?: Maybe<Hotel>;
  hotelCollection?: Maybe<HotelCollection>;
  review?: Maybe<Review>;
  reviewCollection?: Maybe<ReviewCollection>;
};


export type Query_EntitiesArgs = {
  representations: Array<Scalars['_Any']['input']>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryCustomerArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCustomerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CustomerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryHotelArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHotelCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HotelOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HotelFilter>;
};


export type QueryReviewArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryReviewCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ReviewOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReviewFilter>;
};

export type ResourceLink = {
  __typename?: 'ResourceLink';
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  type: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

/** [See type definition](https://app.contentful.com/spaces/gyfunrv4a4ak/content_types/review) */
export type Review = Entry & {
  __typename?: 'Review';
  comment?: Maybe<ReviewComment>;
  contentfulMetadata: ContentfulMetadata;
  customer?: Maybe<Customer>;
  feedback?: Maybe<Scalars['String']['output']>;
  hotel?: Maybe<Hotel>;
  linkedFrom?: Maybe<ReviewLinkingCollections>;
  rating?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/gyfunrv4a4ak/content_types/review) */
export type ReviewCommentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gyfunrv4a4ak/content_types/review) */
export type ReviewCustomerArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CustomerFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/gyfunrv4a4ak/content_types/review) */
export type ReviewFeedbackArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gyfunrv4a4ak/content_types/review) */
export type ReviewHotelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<HotelFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/gyfunrv4a4ak/content_types/review) */
export type ReviewLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/gyfunrv4a4ak/content_types/review) */
export type ReviewRatingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gyfunrv4a4ak/content_types/review) */
export type ReviewTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ReviewCollection = {
  __typename?: 'ReviewCollection';
  items: Array<Maybe<Review>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ReviewComment = {
  __typename?: 'ReviewComment';
  json: Scalars['JSON']['output'];
  links: ReviewCommentLinks;
};

export type ReviewCommentAssets = {
  __typename?: 'ReviewCommentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ReviewCommentEntries = {
  __typename?: 'ReviewCommentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ReviewCommentLinks = {
  __typename?: 'ReviewCommentLinks';
  assets: ReviewCommentAssets;
  entries: ReviewCommentEntries;
  resources: ReviewCommentResources;
};

export type ReviewCommentResources = {
  __typename?: 'ReviewCommentResources';
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type ReviewFilter = {
  AND?: InputMaybe<Array<InputMaybe<ReviewFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ReviewFilter>>>;
  comment_contains?: InputMaybe<Scalars['String']['input']>;
  comment_exists?: InputMaybe<Scalars['Boolean']['input']>;
  comment_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  customer?: InputMaybe<CfCustomerNestedFilter>;
  customer_exists?: InputMaybe<Scalars['Boolean']['input']>;
  feedback?: InputMaybe<Scalars['String']['input']>;
  feedback_contains?: InputMaybe<Scalars['String']['input']>;
  feedback_exists?: InputMaybe<Scalars['Boolean']['input']>;
  feedback_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  feedback_not?: InputMaybe<Scalars['String']['input']>;
  feedback_not_contains?: InputMaybe<Scalars['String']['input']>;
  feedback_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hotel?: InputMaybe<CfHotelNestedFilter>;
  hotel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  rating_exists?: InputMaybe<Scalars['Boolean']['input']>;
  rating_gt?: InputMaybe<Scalars['Int']['input']>;
  rating_gte?: InputMaybe<Scalars['Int']['input']>;
  rating_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  rating_lt?: InputMaybe<Scalars['Int']['input']>;
  rating_lte?: InputMaybe<Scalars['Int']['input']>;
  rating_not?: InputMaybe<Scalars['Int']['input']>;
  rating_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ReviewLinkingCollections = {
  __typename?: 'ReviewLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ReviewLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ReviewOrder {
  FeedbackAsc = 'feedback_ASC',
  FeedbackDesc = 'feedback_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  /** The locale that was requested - mainly used for Apollo Federation. */
  locale?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type _Entity = Customer | Hotel | Review;

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']['output']>;
};

export type CfCustomerNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCustomerNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfCustomerNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  firstName_contains?: InputMaybe<Scalars['String']['input']>;
  firstName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  firstName_not?: InputMaybe<Scalars['String']['input']>;
  firstName_not_contains?: InputMaybe<Scalars['String']['input']>;
  firstName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastName_contains?: InputMaybe<Scalars['String']['input']>;
  lastName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  lastName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lastName_not?: InputMaybe<Scalars['String']['input']>;
  lastName_not_contains?: InputMaybe<Scalars['String']['input']>;
  lastName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfHotelNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfHotelNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfHotelNestedFilter>>>;
  city?: InputMaybe<Scalars['String']['input']>;
  city_contains?: InputMaybe<Scalars['String']['input']>;
  city_exists?: InputMaybe<Scalars['Boolean']['input']>;
  city_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  city_not?: InputMaybe<Scalars['String']['input']>;
  city_not_contains?: InputMaybe<Scalars['String']['input']>;
  city_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  country?: InputMaybe<Scalars['String']['input']>;
  country_contains?: InputMaybe<Scalars['String']['input']>;
  country_exists?: InputMaybe<Scalars['Boolean']['input']>;
  country_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  country_not?: InputMaybe<Scalars['String']['input']>;
  country_not_contains?: InputMaybe<Scalars['String']['input']>;
  country_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  endDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  endDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  imagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price_exists?: InputMaybe<Scalars['Boolean']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  rating_exists?: InputMaybe<Scalars['Boolean']['input']>;
  rating_gt?: InputMaybe<Scalars['Int']['input']>;
  rating_gte?: InputMaybe<Scalars['Int']['input']>;
  rating_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  rating_lt?: InputMaybe<Scalars['Int']['input']>;
  rating_lte?: InputMaybe<Scalars['Int']['input']>;
  rating_not?: InputMaybe<Scalars['Int']['input']>;
  rating_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type GetHotelCollectionQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetHotelCollectionQuery = { __typename?: 'Query', hotelCollection?: { __typename?: 'HotelCollection', limit: number, skip: number, total: number, items: Array<{ __typename?: 'Hotel', country?: string | null, city?: string | null, endDate?: any | null, name?: string | null, price?: any | null, rating?: number | null, startDate?: any | null, description?: { __typename?: 'HotelDescription', json: any } | null, sys: { __typename?: 'Sys', id: string } } | null> } | null };


export const GetHotelCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHotelCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hotelCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"skip"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetHotelCollectionQuery, GetHotelCollectionQueryVariables>;