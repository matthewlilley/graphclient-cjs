// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace ExchnageTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Exchange_BigDecimal: any;
  BigInt: any;
  Exchange_Bytes: any;
};

export type Exchange_BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Exchange_Block_height = {
  hash?: InputMaybe<Scalars['Exchange_Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Exchange_Bundle = {
  id: Scalars['ID'];
  ethPrice: Scalars['Exchange_BigDecimal'];
};

export type Exchange_Bundle_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  ethPrice?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  ethPrice_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  ethPrice_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  ethPrice_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  ethPrice_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  ethPrice_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  ethPrice_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  ethPrice_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Exchange_BlockChangedFilter>;
};

export type Exchange_Bundle_orderBy =
  | 'id'
  | 'ethPrice';

export type Exchange_Burn = {
  id: Scalars['ID'];
  transaction: Exchange_Transaction;
  timestamp: Scalars['BigInt'];
  pair: Exchange_Pair;
  liquidity: Scalars['Exchange_BigDecimal'];
  sender?: Maybe<Scalars['Exchange_Bytes']>;
  amount0?: Maybe<Scalars['Exchange_BigDecimal']>;
  amount1?: Maybe<Scalars['Exchange_BigDecimal']>;
  to?: Maybe<Scalars['Exchange_Bytes']>;
  logIndex?: Maybe<Scalars['BigInt']>;
  amountUSD?: Maybe<Scalars['Exchange_BigDecimal']>;
  complete: Scalars['Boolean'];
  feeTo?: Maybe<Scalars['Exchange_Bytes']>;
  feeLiquidity?: Maybe<Scalars['Exchange_BigDecimal']>;
};

export type Exchange_Burn_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Exchange_Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<Exchange_Pair_filter>;
  liquidity?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidity_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidity_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidity_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidity_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidity_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidity_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  sender?: InputMaybe<Scalars['Exchange_Bytes']>;
  sender_not?: InputMaybe<Scalars['Exchange_Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Exchange_Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Exchange_Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Exchange_Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Exchange_Bytes']>;
  amount0?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  amount1?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  to?: InputMaybe<Scalars['Exchange_Bytes']>;
  to_not?: InputMaybe<Scalars['Exchange_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Exchange_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Exchange_Bytes']>>;
  to_contains?: InputMaybe<Scalars['Exchange_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Exchange_Bytes']>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  complete?: InputMaybe<Scalars['Boolean']>;
  complete_not?: InputMaybe<Scalars['Boolean']>;
  complete_in?: InputMaybe<Array<Scalars['Boolean']>>;
  complete_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  feeTo?: InputMaybe<Scalars['Exchange_Bytes']>;
  feeTo_not?: InputMaybe<Scalars['Exchange_Bytes']>;
  feeTo_in?: InputMaybe<Array<Scalars['Exchange_Bytes']>>;
  feeTo_not_in?: InputMaybe<Array<Scalars['Exchange_Bytes']>>;
  feeTo_contains?: InputMaybe<Scalars['Exchange_Bytes']>;
  feeTo_not_contains?: InputMaybe<Scalars['Exchange_Bytes']>;
  feeLiquidity?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  feeLiquidity_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  feeLiquidity_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  feeLiquidity_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  feeLiquidity_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  feeLiquidity_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  feeLiquidity_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  feeLiquidity_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Exchange_BlockChangedFilter>;
};

export type Exchange_Burn_orderBy =
  | 'id'
  | 'transaction'
  | 'timestamp'
  | 'pair'
  | 'liquidity'
  | 'sender'
  | 'amount0'
  | 'amount1'
  | 'to'
  | 'logIndex'
  | 'amountUSD'
  | 'complete'
  | 'feeTo'
  | 'feeLiquidity';

export type Exchange_DayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  factory: Exchange_Factory;
  volumeETH: Scalars['Exchange_BigDecimal'];
  volumeUSD: Scalars['Exchange_BigDecimal'];
  untrackedVolume: Scalars['Exchange_BigDecimal'];
  liquidityETH: Scalars['Exchange_BigDecimal'];
  liquidityUSD: Scalars['Exchange_BigDecimal'];
  txCount: Scalars['BigInt'];
};

export type Exchange_DayData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  factory?: InputMaybe<Scalars['String']>;
  factory_not?: InputMaybe<Scalars['String']>;
  factory_gt?: InputMaybe<Scalars['String']>;
  factory_lt?: InputMaybe<Scalars['String']>;
  factory_gte?: InputMaybe<Scalars['String']>;
  factory_lte?: InputMaybe<Scalars['String']>;
  factory_in?: InputMaybe<Array<Scalars['String']>>;
  factory_not_in?: InputMaybe<Array<Scalars['String']>>;
  factory_contains?: InputMaybe<Scalars['String']>;
  factory_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_not_contains?: InputMaybe<Scalars['String']>;
  factory_not_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_starts_with?: InputMaybe<Scalars['String']>;
  factory_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_starts_with?: InputMaybe<Scalars['String']>;
  factory_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_ends_with?: InputMaybe<Scalars['String']>;
  factory_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_ends_with?: InputMaybe<Scalars['String']>;
  factory_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factory_?: InputMaybe<Exchange_Factory_filter>;
  volumeETH?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeETH_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeETH_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeETH_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeETH_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeETH_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeETH_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeETH_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  untrackedVolume?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  untrackedVolume_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  untrackedVolume_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  untrackedVolume_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  untrackedVolume_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  untrackedVolume_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  untrackedVolume_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  untrackedVolume_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  liquidityETH?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityETH_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityETH_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityETH_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityETH_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityETH_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityETH_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  liquidityETH_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  liquidityUSD?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityUSD_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityUSD_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityUSD_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityUSD_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityUSD_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Exchange_BlockChangedFilter>;
};

export type Exchange_DayData_orderBy =
  | 'id'
  | 'date'
  | 'factory'
  | 'volumeETH'
  | 'volumeUSD'
  | 'untrackedVolume'
  | 'liquidityETH'
  | 'liquidityUSD'
  | 'txCount';

export type Exchange_Factory = {
  id: Scalars['ID'];
  pairCount: Scalars['BigInt'];
  volumeUSD: Scalars['Exchange_BigDecimal'];
  volumeETH: Scalars['Exchange_BigDecimal'];
  untrackedVolumeUSD: Scalars['Exchange_BigDecimal'];
  liquidityUSD: Scalars['Exchange_BigDecimal'];
  liquidityETH: Scalars['Exchange_BigDecimal'];
  txCount: Scalars['BigInt'];
  tokenCount: Scalars['BigInt'];
  userCount: Scalars['BigInt'];
  pairs: Array<Exchange_Pair>;
  tokens: Array<Exchange_Token>;
  hourData: Array<Exchange_HourData>;
  dayData: Array<Exchange_DayData>;
};


export type Exchange_FactorypairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_Pair_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_Pair_filter>;
};


export type Exchange_FactorytokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_Token_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_Token_filter>;
};


export type Exchange_FactoryhourDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_HourData_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_HourData_filter>;
};


export type Exchange_FactorydayDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_DayData_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_DayData_filter>;
};

export type Exchange_Factory_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pairCount?: InputMaybe<Scalars['BigInt']>;
  pairCount_not?: InputMaybe<Scalars['BigInt']>;
  pairCount_gt?: InputMaybe<Scalars['BigInt']>;
  pairCount_lt?: InputMaybe<Scalars['BigInt']>;
  pairCount_gte?: InputMaybe<Scalars['BigInt']>;
  pairCount_lte?: InputMaybe<Scalars['BigInt']>;
  pairCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pairCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volumeUSD?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeETH?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeETH_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeETH_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeETH_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeETH_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeETH_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeETH_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeETH_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  liquidityUSD?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityUSD_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityUSD_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityUSD_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityUSD_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityUSD_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  liquidityETH?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityETH_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityETH_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityETH_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityETH_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityETH_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityETH_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  liquidityETH_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenCount?: InputMaybe<Scalars['BigInt']>;
  tokenCount_not?: InputMaybe<Scalars['BigInt']>;
  tokenCount_gt?: InputMaybe<Scalars['BigInt']>;
  tokenCount_lt?: InputMaybe<Scalars['BigInt']>;
  tokenCount_gte?: InputMaybe<Scalars['BigInt']>;
  tokenCount_lte?: InputMaybe<Scalars['BigInt']>;
  tokenCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userCount?: InputMaybe<Scalars['BigInt']>;
  userCount_not?: InputMaybe<Scalars['BigInt']>;
  userCount_gt?: InputMaybe<Scalars['BigInt']>;
  userCount_lt?: InputMaybe<Scalars['BigInt']>;
  userCount_gte?: InputMaybe<Scalars['BigInt']>;
  userCount_lte?: InputMaybe<Scalars['BigInt']>;
  userCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pairs_?: InputMaybe<Exchange_Pair_filter>;
  tokens_?: InputMaybe<Exchange_Token_filter>;
  hourData_?: InputMaybe<Exchange_HourData_filter>;
  dayData_?: InputMaybe<Exchange_DayData_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Exchange_BlockChangedFilter>;
};

export type Exchange_Factory_orderBy =
  | 'id'
  | 'pairCount'
  | 'volumeUSD'
  | 'volumeETH'
  | 'untrackedVolumeUSD'
  | 'liquidityUSD'
  | 'liquidityETH'
  | 'txCount'
  | 'tokenCount'
  | 'userCount'
  | 'pairs'
  | 'tokens'
  | 'hourData'
  | 'dayData';

export type Exchange_HourData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  factory: Exchange_Factory;
  volumeETH: Scalars['Exchange_BigDecimal'];
  volumeUSD: Scalars['Exchange_BigDecimal'];
  untrackedVolume: Scalars['Exchange_BigDecimal'];
  liquidityETH: Scalars['Exchange_BigDecimal'];
  liquidityUSD: Scalars['Exchange_BigDecimal'];
  txCount: Scalars['BigInt'];
};

export type Exchange_HourData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  factory?: InputMaybe<Scalars['String']>;
  factory_not?: InputMaybe<Scalars['String']>;
  factory_gt?: InputMaybe<Scalars['String']>;
  factory_lt?: InputMaybe<Scalars['String']>;
  factory_gte?: InputMaybe<Scalars['String']>;
  factory_lte?: InputMaybe<Scalars['String']>;
  factory_in?: InputMaybe<Array<Scalars['String']>>;
  factory_not_in?: InputMaybe<Array<Scalars['String']>>;
  factory_contains?: InputMaybe<Scalars['String']>;
  factory_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_not_contains?: InputMaybe<Scalars['String']>;
  factory_not_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_starts_with?: InputMaybe<Scalars['String']>;
  factory_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_starts_with?: InputMaybe<Scalars['String']>;
  factory_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_ends_with?: InputMaybe<Scalars['String']>;
  factory_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_ends_with?: InputMaybe<Scalars['String']>;
  factory_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factory_?: InputMaybe<Exchange_Factory_filter>;
  volumeETH?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeETH_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeETH_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeETH_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeETH_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeETH_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeETH_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeETH_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  untrackedVolume?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  untrackedVolume_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  untrackedVolume_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  untrackedVolume_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  untrackedVolume_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  untrackedVolume_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  untrackedVolume_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  untrackedVolume_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  liquidityETH?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityETH_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityETH_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityETH_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityETH_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityETH_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityETH_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  liquidityETH_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  liquidityUSD?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityUSD_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityUSD_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityUSD_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityUSD_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityUSD_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Exchange_BlockChangedFilter>;
};

export type Exchange_HourData_orderBy =
  | 'id'
  | 'date'
  | 'factory'
  | 'volumeETH'
  | 'volumeUSD'
  | 'untrackedVolume'
  | 'liquidityETH'
  | 'liquidityUSD'
  | 'txCount';

export type Exchange_LiquidityPosition = {
  id: Scalars['ID'];
  user: Exchange_User;
  pair: Exchange_Pair;
  liquidityTokenBalance: Scalars['Exchange_BigDecimal'];
  snapshots: Array<Maybe<Exchange_LiquidityPositionSnapshot>>;
  block: Scalars['Int'];
  timestamp: Scalars['Int'];
};


export type Exchange_LiquidityPositionsnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_LiquidityPositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_LiquidityPositionSnapshot_filter>;
};

export type Exchange_LiquidityPositionSnapshot = {
  id: Scalars['ID'];
  liquidityPosition: Exchange_LiquidityPosition;
  timestamp: Scalars['Int'];
  block: Scalars['Int'];
  user: Exchange_User;
  pair: Exchange_Pair;
  token0PriceUSD: Scalars['Exchange_BigDecimal'];
  token1PriceUSD: Scalars['Exchange_BigDecimal'];
  reserve0: Scalars['Exchange_BigDecimal'];
  reserve1: Scalars['Exchange_BigDecimal'];
  reserveUSD: Scalars['Exchange_BigDecimal'];
  liquidityTokenTotalSupply: Scalars['Exchange_BigDecimal'];
  liquidityTokenBalance: Scalars['Exchange_BigDecimal'];
};

export type Exchange_LiquidityPositionSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  liquidityPosition?: InputMaybe<Scalars['String']>;
  liquidityPosition_not?: InputMaybe<Scalars['String']>;
  liquidityPosition_gt?: InputMaybe<Scalars['String']>;
  liquidityPosition_lt?: InputMaybe<Scalars['String']>;
  liquidityPosition_gte?: InputMaybe<Scalars['String']>;
  liquidityPosition_lte?: InputMaybe<Scalars['String']>;
  liquidityPosition_in?: InputMaybe<Array<Scalars['String']>>;
  liquidityPosition_not_in?: InputMaybe<Array<Scalars['String']>>;
  liquidityPosition_contains?: InputMaybe<Scalars['String']>;
  liquidityPosition_contains_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_contains?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_contains_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_starts_with?: InputMaybe<Scalars['String']>;
  liquidityPosition_starts_with_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_starts_with?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_ends_with?: InputMaybe<Scalars['String']>;
  liquidityPosition_ends_with_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_ends_with?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_?: InputMaybe<Exchange_LiquidityPosition_filter>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  block?: InputMaybe<Scalars['Int']>;
  block_not?: InputMaybe<Scalars['Int']>;
  block_gt?: InputMaybe<Scalars['Int']>;
  block_lt?: InputMaybe<Scalars['Int']>;
  block_gte?: InputMaybe<Scalars['Int']>;
  block_lte?: InputMaybe<Scalars['Int']>;
  block_in?: InputMaybe<Array<Scalars['Int']>>;
  block_not_in?: InputMaybe<Array<Scalars['Int']>>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<Exchange_User_filter>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<Exchange_Pair_filter>;
  token0PriceUSD?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  token0PriceUSD_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  token0PriceUSD_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  token0PriceUSD_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  token0PriceUSD_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  token0PriceUSD_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  token0PriceUSD_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  token0PriceUSD_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  token1PriceUSD?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  token1PriceUSD_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  token1PriceUSD_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  token1PriceUSD_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  token1PriceUSD_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  token1PriceUSD_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  token1PriceUSD_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  token1PriceUSD_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  reserve0?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve0_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve0_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve0_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve0_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve0_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve0_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  reserve0_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  reserve1?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve1_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve1_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve1_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve1_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve1_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve1_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  reserve1_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  reserveUSD?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserveUSD_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserveUSD_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserveUSD_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserveUSD_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserveUSD_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserveUSD_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  reserveUSD_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  liquidityTokenTotalSupply?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityTokenTotalSupply_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityTokenTotalSupply_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityTokenTotalSupply_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityTokenTotalSupply_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityTokenTotalSupply_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityTokenTotalSupply_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  liquidityTokenTotalSupply_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  liquidityTokenBalance?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityTokenBalance_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityTokenBalance_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityTokenBalance_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityTokenBalance_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityTokenBalance_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityTokenBalance_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  liquidityTokenBalance_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Exchange_BlockChangedFilter>;
};

export type Exchange_LiquidityPositionSnapshot_orderBy =
  | 'id'
  | 'liquidityPosition'
  | 'timestamp'
  | 'block'
  | 'user'
  | 'pair'
  | 'token0PriceUSD'
  | 'token1PriceUSD'
  | 'reserve0'
  | 'reserve1'
  | 'reserveUSD'
  | 'liquidityTokenTotalSupply'
  | 'liquidityTokenBalance';

export type Exchange_LiquidityPosition_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<Exchange_User_filter>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<Exchange_Pair_filter>;
  liquidityTokenBalance?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityTokenBalance_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityTokenBalance_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityTokenBalance_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityTokenBalance_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityTokenBalance_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityTokenBalance_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  liquidityTokenBalance_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  snapshots_?: InputMaybe<Exchange_LiquidityPositionSnapshot_filter>;
  block?: InputMaybe<Scalars['Int']>;
  block_not?: InputMaybe<Scalars['Int']>;
  block_gt?: InputMaybe<Scalars['Int']>;
  block_lt?: InputMaybe<Scalars['Int']>;
  block_gte?: InputMaybe<Scalars['Int']>;
  block_lte?: InputMaybe<Scalars['Int']>;
  block_in?: InputMaybe<Array<Scalars['Int']>>;
  block_not_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Exchange_BlockChangedFilter>;
};

export type Exchange_LiquidityPosition_orderBy =
  | 'id'
  | 'user'
  | 'pair'
  | 'liquidityTokenBalance'
  | 'snapshots'
  | 'block'
  | 'timestamp';

export type Exchange_Mint = {
  id: Scalars['ID'];
  transaction: Exchange_Transaction;
  timestamp: Scalars['BigInt'];
  pair: Exchange_Pair;
  to: Scalars['Exchange_Bytes'];
  liquidity: Scalars['Exchange_BigDecimal'];
  sender?: Maybe<Scalars['Exchange_Bytes']>;
  amount0?: Maybe<Scalars['Exchange_BigDecimal']>;
  amount1?: Maybe<Scalars['Exchange_BigDecimal']>;
  logIndex?: Maybe<Scalars['BigInt']>;
  amountUSD?: Maybe<Scalars['Exchange_BigDecimal']>;
  feeTo?: Maybe<Scalars['Exchange_Bytes']>;
  feeLiquidity?: Maybe<Scalars['Exchange_BigDecimal']>;
};

export type Exchange_Mint_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Exchange_Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<Exchange_Pair_filter>;
  to?: InputMaybe<Scalars['Exchange_Bytes']>;
  to_not?: InputMaybe<Scalars['Exchange_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Exchange_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Exchange_Bytes']>>;
  to_contains?: InputMaybe<Scalars['Exchange_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Exchange_Bytes']>;
  liquidity?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidity_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidity_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidity_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidity_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidity_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidity_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  sender?: InputMaybe<Scalars['Exchange_Bytes']>;
  sender_not?: InputMaybe<Scalars['Exchange_Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Exchange_Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Exchange_Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Exchange_Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Exchange_Bytes']>;
  amount0?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  amount1?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  feeTo?: InputMaybe<Scalars['Exchange_Bytes']>;
  feeTo_not?: InputMaybe<Scalars['Exchange_Bytes']>;
  feeTo_in?: InputMaybe<Array<Scalars['Exchange_Bytes']>>;
  feeTo_not_in?: InputMaybe<Array<Scalars['Exchange_Bytes']>>;
  feeTo_contains?: InputMaybe<Scalars['Exchange_Bytes']>;
  feeTo_not_contains?: InputMaybe<Scalars['Exchange_Bytes']>;
  feeLiquidity?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  feeLiquidity_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  feeLiquidity_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  feeLiquidity_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  feeLiquidity_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  feeLiquidity_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  feeLiquidity_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  feeLiquidity_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Exchange_BlockChangedFilter>;
};

export type Exchange_Mint_orderBy =
  | 'id'
  | 'transaction'
  | 'timestamp'
  | 'pair'
  | 'to'
  | 'liquidity'
  | 'sender'
  | 'amount0'
  | 'amount1'
  | 'logIndex'
  | 'amountUSD'
  | 'feeTo'
  | 'feeLiquidity';

/** Defines the order direction, either ascending or descending */
export type Exchange_OrderDirection =
  | 'asc'
  | 'desc';

export type Exchange_Pair = {
  id: Scalars['ID'];
  factory: Exchange_Factory;
  name: Scalars['String'];
  token0: Exchange_Token;
  token1: Exchange_Token;
  reserve0: Scalars['Exchange_BigDecimal'];
  reserve1: Scalars['Exchange_BigDecimal'];
  totalSupply: Scalars['Exchange_BigDecimal'];
  reserveETH: Scalars['Exchange_BigDecimal'];
  reserveUSD: Scalars['Exchange_BigDecimal'];
  trackedReserveETH: Scalars['Exchange_BigDecimal'];
  token0Price: Scalars['Exchange_BigDecimal'];
  token1Price: Scalars['Exchange_BigDecimal'];
  volumeToken0: Scalars['Exchange_BigDecimal'];
  volumeToken1: Scalars['Exchange_BigDecimal'];
  volumeUSD: Scalars['Exchange_BigDecimal'];
  untrackedVolumeUSD: Scalars['Exchange_BigDecimal'];
  txCount: Scalars['BigInt'];
  liquidityProviderCount: Scalars['BigInt'];
  liquidityPositions: Array<Exchange_LiquidityPosition>;
  liquidityPositionSnapshots: Array<Exchange_LiquidityPositionSnapshot>;
  dayData: Array<Exchange_PairDayData>;
  hourData: Array<Exchange_PairHourData>;
  mints: Array<Exchange_Mint>;
  burns: Array<Exchange_Burn>;
  swaps: Array<Exchange_Swap>;
  timestamp: Scalars['BigInt'];
  block: Scalars['BigInt'];
};


export type Exchange_PairliquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_LiquidityPosition_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_LiquidityPosition_filter>;
};


export type Exchange_PairliquidityPositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_LiquidityPositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_LiquidityPositionSnapshot_filter>;
};


export type Exchange_PairdayDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_PairDayData_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_PairDayData_filter>;
};


export type Exchange_PairhourDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_PairHourData_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_PairHourData_filter>;
};


export type Exchange_PairmintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_Mint_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_Mint_filter>;
};


export type Exchange_PairburnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_Burn_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_Burn_filter>;
};


export type Exchange_PairswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_Swap_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_Swap_filter>;
};

export type Exchange_PairDayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  pair: Exchange_Pair;
  token0: Exchange_Token;
  token1: Exchange_Token;
  reserve0: Scalars['Exchange_BigDecimal'];
  reserve1: Scalars['Exchange_BigDecimal'];
  totalSupply: Scalars['Exchange_BigDecimal'];
  reserveUSD: Scalars['Exchange_BigDecimal'];
  volumeToken0: Scalars['Exchange_BigDecimal'];
  volumeToken1: Scalars['Exchange_BigDecimal'];
  volumeUSD: Scalars['Exchange_BigDecimal'];
  txCount: Scalars['BigInt'];
};

export type Exchange_PairDayData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<Exchange_Pair_filter>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_?: InputMaybe<Exchange_Token_filter>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_?: InputMaybe<Exchange_Token_filter>;
  reserve0?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve0_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve0_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve0_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve0_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve0_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve0_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  reserve0_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  reserve1?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve1_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve1_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve1_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve1_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve1_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve1_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  reserve1_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  totalSupply?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  totalSupply_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  totalSupply_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  totalSupply_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  totalSupply_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  totalSupply_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  totalSupply_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  reserveUSD?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserveUSD_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserveUSD_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserveUSD_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserveUSD_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserveUSD_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserveUSD_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  reserveUSD_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeToken0?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Exchange_BlockChangedFilter>;
};

export type Exchange_PairDayData_orderBy =
  | 'id'
  | 'date'
  | 'pair'
  | 'token0'
  | 'token1'
  | 'reserve0'
  | 'reserve1'
  | 'totalSupply'
  | 'reserveUSD'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'txCount';

export type Exchange_PairHourData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  pair: Exchange_Pair;
  reserve0: Scalars['Exchange_BigDecimal'];
  reserve1: Scalars['Exchange_BigDecimal'];
  reserveUSD: Scalars['Exchange_BigDecimal'];
  volumeToken0: Scalars['Exchange_BigDecimal'];
  volumeToken1: Scalars['Exchange_BigDecimal'];
  volumeUSD: Scalars['Exchange_BigDecimal'];
  txCount: Scalars['BigInt'];
};

export type Exchange_PairHourData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<Exchange_Pair_filter>;
  reserve0?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve0_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve0_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve0_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve0_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve0_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve0_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  reserve0_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  reserve1?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve1_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve1_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve1_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve1_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve1_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve1_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  reserve1_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  reserveUSD?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserveUSD_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserveUSD_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserveUSD_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserveUSD_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserveUSD_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserveUSD_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  reserveUSD_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeToken0?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Exchange_BlockChangedFilter>;
};

export type Exchange_PairHourData_orderBy =
  | 'id'
  | 'date'
  | 'pair'
  | 'reserve0'
  | 'reserve1'
  | 'reserveUSD'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'txCount';

export type Exchange_Pair_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  factory?: InputMaybe<Scalars['String']>;
  factory_not?: InputMaybe<Scalars['String']>;
  factory_gt?: InputMaybe<Scalars['String']>;
  factory_lt?: InputMaybe<Scalars['String']>;
  factory_gte?: InputMaybe<Scalars['String']>;
  factory_lte?: InputMaybe<Scalars['String']>;
  factory_in?: InputMaybe<Array<Scalars['String']>>;
  factory_not_in?: InputMaybe<Array<Scalars['String']>>;
  factory_contains?: InputMaybe<Scalars['String']>;
  factory_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_not_contains?: InputMaybe<Scalars['String']>;
  factory_not_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_starts_with?: InputMaybe<Scalars['String']>;
  factory_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_starts_with?: InputMaybe<Scalars['String']>;
  factory_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_ends_with?: InputMaybe<Scalars['String']>;
  factory_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_ends_with?: InputMaybe<Scalars['String']>;
  factory_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factory_?: InputMaybe<Exchange_Factory_filter>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_?: InputMaybe<Exchange_Token_filter>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_?: InputMaybe<Exchange_Token_filter>;
  reserve0?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve0_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve0_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve0_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve0_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve0_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve0_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  reserve0_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  reserve1?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve1_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve1_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve1_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve1_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve1_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserve1_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  reserve1_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  totalSupply?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  totalSupply_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  totalSupply_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  totalSupply_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  totalSupply_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  totalSupply_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  totalSupply_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  reserveETH?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserveETH_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserveETH_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserveETH_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserveETH_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserveETH_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserveETH_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  reserveETH_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  reserveUSD?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserveUSD_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserveUSD_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserveUSD_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserveUSD_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserveUSD_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  reserveUSD_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  reserveUSD_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  trackedReserveETH?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  trackedReserveETH_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  trackedReserveETH_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  trackedReserveETH_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  trackedReserveETH_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  trackedReserveETH_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  trackedReserveETH_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  trackedReserveETH_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  token0Price?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  token0Price_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  token0Price_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  token0Price_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  token0Price_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  token0Price_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  token0Price_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  token0Price_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  token1Price?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  token1Price_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  token1Price_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  token1Price_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  token1Price_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  token1Price_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  token1Price_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  token1Price_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeToken0?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityProviderCount?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_not?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityProviderCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityPositions_?: InputMaybe<Exchange_LiquidityPosition_filter>;
  liquidityPositionSnapshots_?: InputMaybe<Exchange_LiquidityPositionSnapshot_filter>;
  dayData_?: InputMaybe<Exchange_PairDayData_filter>;
  hourData_?: InputMaybe<Exchange_PairHourData_filter>;
  mints_?: InputMaybe<Exchange_Mint_filter>;
  burns_?: InputMaybe<Exchange_Burn_filter>;
  swaps_?: InputMaybe<Exchange_Swap_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Exchange_BlockChangedFilter>;
};

export type Exchange_Pair_orderBy =
  | 'id'
  | 'factory'
  | 'name'
  | 'token0'
  | 'token1'
  | 'reserve0'
  | 'reserve1'
  | 'totalSupply'
  | 'reserveETH'
  | 'reserveUSD'
  | 'trackedReserveETH'
  | 'token0Price'
  | 'token1Price'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'untrackedVolumeUSD'
  | 'txCount'
  | 'liquidityProviderCount'
  | 'liquidityPositions'
  | 'liquidityPositionSnapshots'
  | 'dayData'
  | 'hourData'
  | 'mints'
  | 'burns'
  | 'swaps'
  | 'timestamp'
  | 'block';

export type Query = {
  Exchange_user?: Maybe<Exchange_User>;
  Exchange_users: Array<Exchange_User>;
  Exchange_bundle?: Maybe<Exchange_Bundle>;
  Exchange_bundles: Array<Exchange_Bundle>;
  Exchange_factory?: Maybe<Exchange_Factory>;
  Exchange_factories: Array<Exchange_Factory>;
  Exchange_hourData?: Maybe<Exchange_HourData>;
  Exchange_hourDatas: Array<Exchange_HourData>;
  Exchange_dayData?: Maybe<Exchange_DayData>;
  Exchange_dayDatas: Array<Exchange_DayData>;
  Exchange_token?: Maybe<Exchange_Token>;
  Exchange_tokens: Array<Exchange_Token>;
  Exchange_tokenHourData?: Maybe<Exchange_TokenHourData>;
  Exchange_tokenHourDatas: Array<Exchange_TokenHourData>;
  Exchange_tokenDayData?: Maybe<Exchange_TokenDayData>;
  Exchange_tokenDayDatas: Array<Exchange_TokenDayData>;
  Exchange_pair?: Maybe<Exchange_Pair>;
  Exchange_pairs: Array<Exchange_Pair>;
  Exchange_pairHourData?: Maybe<Exchange_PairHourData>;
  Exchange_pairHourDatas: Array<Exchange_PairHourData>;
  Exchange_pairDayData?: Maybe<Exchange_PairDayData>;
  Exchange_pairDayDatas: Array<Exchange_PairDayData>;
  Exchange_liquidityPosition?: Maybe<Exchange_LiquidityPosition>;
  Exchange_liquidityPositions: Array<Exchange_LiquidityPosition>;
  Exchange_liquidityPositionSnapshot?: Maybe<Exchange_LiquidityPositionSnapshot>;
  Exchange_liquidityPositionSnapshots: Array<Exchange_LiquidityPositionSnapshot>;
  Exchange_transaction?: Maybe<Exchange_Transaction>;
  Exchange_transactions: Array<Exchange_Transaction>;
  Exchange_mint?: Maybe<Exchange_Mint>;
  Exchange_mints: Array<Exchange_Mint>;
  Exchange_burn?: Maybe<Exchange_Burn>;
  Exchange_burns: Array<Exchange_Burn>;
  Exchange_swap?: Maybe<Exchange_Swap>;
  Exchange_swaps: Array<Exchange_Swap>;
  Exchange_tokenSearch: Array<Exchange_Token>;
  Exchange_pairSearch: Array<Exchange_Pair>;
  Exchange_userSearch: Array<Exchange_User>;
  /** Access to subgraph metadata */
  Exchange__meta?: Maybe<Exchange__Meta_>;
};


export type QueryExchange_userArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_usersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_User_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_User_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_bundleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_bundlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_Bundle_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_Bundle_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_factoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_factoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_Factory_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_Factory_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_hourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_hourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_HourData_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_HourData_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_dayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_dayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_DayData_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_DayData_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_tokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_tokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_Token_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_Token_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_tokenHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_tokenHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_TokenHourData_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_TokenHourData_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_tokenDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_tokenDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_TokenDayData_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_TokenDayData_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_pairArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_pairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_Pair_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_Pair_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_pairHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_pairHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_PairHourData_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_PairHourData_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_pairDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_pairDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_PairDayData_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_PairDayData_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_liquidityPositionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_liquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_LiquidityPosition_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_LiquidityPosition_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_liquidityPositionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_liquidityPositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_LiquidityPositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_LiquidityPositionSnapshot_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_transactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_transactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_Transaction_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_Transaction_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_mintArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_mintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_Mint_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_Mint_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_burnArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_burnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_Burn_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_Burn_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_swapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_swapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_Swap_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_Swap_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_tokenSearchArgs = {
  text: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_pairSearchArgs = {
  text: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange_userSearchArgs = {
  text: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type QueryExchange__metaArgs = {
  block?: InputMaybe<Exchange_Block_height>;
};

export type Subscription = {
  Exchange_user?: Maybe<Exchange_User>;
  Exchange_users: Array<Exchange_User>;
  Exchange_bundle?: Maybe<Exchange_Bundle>;
  Exchange_bundles: Array<Exchange_Bundle>;
  Exchange_factory?: Maybe<Exchange_Factory>;
  Exchange_factories: Array<Exchange_Factory>;
  Exchange_hourData?: Maybe<Exchange_HourData>;
  Exchange_hourDatas: Array<Exchange_HourData>;
  Exchange_dayData?: Maybe<Exchange_DayData>;
  Exchange_dayDatas: Array<Exchange_DayData>;
  Exchange_token?: Maybe<Exchange_Token>;
  Exchange_tokens: Array<Exchange_Token>;
  Exchange_tokenHourData?: Maybe<Exchange_TokenHourData>;
  Exchange_tokenHourDatas: Array<Exchange_TokenHourData>;
  Exchange_tokenDayData?: Maybe<Exchange_TokenDayData>;
  Exchange_tokenDayDatas: Array<Exchange_TokenDayData>;
  Exchange_pair?: Maybe<Exchange_Pair>;
  Exchange_pairs: Array<Exchange_Pair>;
  Exchange_pairHourData?: Maybe<Exchange_PairHourData>;
  Exchange_pairHourDatas: Array<Exchange_PairHourData>;
  Exchange_pairDayData?: Maybe<Exchange_PairDayData>;
  Exchange_pairDayDatas: Array<Exchange_PairDayData>;
  Exchange_liquidityPosition?: Maybe<Exchange_LiquidityPosition>;
  Exchange_liquidityPositions: Array<Exchange_LiquidityPosition>;
  Exchange_liquidityPositionSnapshot?: Maybe<Exchange_LiquidityPositionSnapshot>;
  Exchange_liquidityPositionSnapshots: Array<Exchange_LiquidityPositionSnapshot>;
  Exchange_transaction?: Maybe<Exchange_Transaction>;
  Exchange_transactions: Array<Exchange_Transaction>;
  Exchange_mint?: Maybe<Exchange_Mint>;
  Exchange_mints: Array<Exchange_Mint>;
  Exchange_burn?: Maybe<Exchange_Burn>;
  Exchange_burns: Array<Exchange_Burn>;
  Exchange_swap?: Maybe<Exchange_Swap>;
  Exchange_swaps: Array<Exchange_Swap>;
  /** Access to subgraph metadata */
  Exchange__meta?: Maybe<Exchange__Meta_>;
};


export type SubscriptionExchange_userArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_usersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_User_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_User_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_bundleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_bundlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_Bundle_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_Bundle_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_factoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_factoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_Factory_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_Factory_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_hourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_hourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_HourData_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_HourData_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_dayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_dayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_DayData_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_DayData_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_tokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_tokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_Token_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_Token_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_tokenHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_tokenHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_TokenHourData_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_TokenHourData_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_tokenDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_tokenDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_TokenDayData_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_TokenDayData_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_pairArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_pairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_Pair_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_Pair_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_pairHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_pairHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_PairHourData_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_PairHourData_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_pairDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_pairDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_PairDayData_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_PairDayData_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_liquidityPositionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_liquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_LiquidityPosition_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_LiquidityPosition_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_liquidityPositionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_liquidityPositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_LiquidityPositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_LiquidityPositionSnapshot_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_transactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_transactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_Transaction_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_Transaction_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_mintArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_mintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_Mint_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_Mint_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_burnArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_burnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_Burn_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_Burn_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_swapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange_swapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_Swap_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_Swap_filter>;
  block?: InputMaybe<Exchange_Block_height>;
  subgraphError?: Exchange__SubgraphErrorPolicy_;
};


export type SubscriptionExchange__metaArgs = {
  block?: InputMaybe<Exchange_Block_height>;
};

export type Exchange_Swap = {
  id: Scalars['ID'];
  transaction: Exchange_Transaction;
  timestamp: Scalars['BigInt'];
  pair: Exchange_Pair;
  sender: Scalars['Exchange_Bytes'];
  amount0In: Scalars['Exchange_BigDecimal'];
  amount1In: Scalars['Exchange_BigDecimal'];
  amount0Out: Scalars['Exchange_BigDecimal'];
  amount1Out: Scalars['Exchange_BigDecimal'];
  to: Scalars['Exchange_Bytes'];
  logIndex?: Maybe<Scalars['BigInt']>;
  amountUSD: Scalars['Exchange_BigDecimal'];
};

export type Exchange_Swap_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Exchange_Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<Exchange_Pair_filter>;
  sender?: InputMaybe<Scalars['Exchange_Bytes']>;
  sender_not?: InputMaybe<Scalars['Exchange_Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Exchange_Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Exchange_Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Exchange_Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Exchange_Bytes']>;
  amount0In?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount0In_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount0In_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount0In_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount0In_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount0In_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount0In_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  amount0In_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  amount1In?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount1In_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount1In_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount1In_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount1In_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount1In_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount1In_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  amount1In_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  amount0Out?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount0Out_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount0Out_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount0Out_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount0Out_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount0Out_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount0Out_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  amount0Out_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  amount1Out?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount1Out_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount1Out_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount1Out_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount1Out_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount1Out_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amount1Out_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  amount1Out_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  to?: InputMaybe<Scalars['Exchange_Bytes']>;
  to_not?: InputMaybe<Scalars['Exchange_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Exchange_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Exchange_Bytes']>>;
  to_contains?: InputMaybe<Scalars['Exchange_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Exchange_Bytes']>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Exchange_BlockChangedFilter>;
};

export type Exchange_Swap_orderBy =
  | 'id'
  | 'transaction'
  | 'timestamp'
  | 'pair'
  | 'sender'
  | 'amount0In'
  | 'amount1In'
  | 'amount0Out'
  | 'amount1Out'
  | 'to'
  | 'logIndex'
  | 'amountUSD';

export type Exchange_Token = {
  id: Scalars['ID'];
  factory: Exchange_Factory;
  symbol: Scalars['String'];
  name: Scalars['String'];
  decimals: Scalars['BigInt'];
  totalSupply: Scalars['BigInt'];
  volume: Scalars['Exchange_BigDecimal'];
  volumeUSD: Scalars['Exchange_BigDecimal'];
  untrackedVolumeUSD: Scalars['Exchange_BigDecimal'];
  txCount: Scalars['BigInt'];
  liquidity: Scalars['Exchange_BigDecimal'];
  derivedETH: Scalars['Exchange_BigDecimal'];
  hourData: Array<Exchange_TokenHourData>;
  dayData: Array<Exchange_TokenDayData>;
  basePairs: Array<Exchange_Pair>;
  quotePairs: Array<Exchange_Pair>;
  basePairsDayData: Array<Exchange_PairDayData>;
  quotePairsDayData: Array<Exchange_PairDayData>;
};


export type Exchange_TokenhourDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_TokenHourData_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_TokenHourData_filter>;
};


export type Exchange_TokendayDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_TokenDayData_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_TokenDayData_filter>;
};


export type Exchange_TokenbasePairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_Pair_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_Pair_filter>;
};


export type Exchange_TokenquotePairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_Pair_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_Pair_filter>;
};


export type Exchange_TokenbasePairsDayDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_PairDayData_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_PairDayData_filter>;
};


export type Exchange_TokenquotePairsDayDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_PairDayData_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_PairDayData_filter>;
};

export type Exchange_TokenDayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  token: Exchange_Token;
  volume: Scalars['Exchange_BigDecimal'];
  volumeETH: Scalars['Exchange_BigDecimal'];
  volumeUSD: Scalars['Exchange_BigDecimal'];
  txCount: Scalars['BigInt'];
  liquidity: Scalars['Exchange_BigDecimal'];
  liquidityETH: Scalars['Exchange_BigDecimal'];
  liquidityUSD: Scalars['Exchange_BigDecimal'];
  priceUSD: Scalars['Exchange_BigDecimal'];
};

export type Exchange_TokenDayData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Exchange_Token_filter>;
  volume?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volume_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeETH?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeETH_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeETH_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeETH_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeETH_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeETH_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeETH_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeETH_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidity_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidity_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidity_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidity_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidity_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidity_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  liquidityETH?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityETH_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityETH_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityETH_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityETH_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityETH_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityETH_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  liquidityETH_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  liquidityUSD?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityUSD_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityUSD_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityUSD_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityUSD_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityUSD_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  priceUSD?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  priceUSD_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  priceUSD_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  priceUSD_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  priceUSD_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  priceUSD_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  priceUSD_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  priceUSD_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Exchange_BlockChangedFilter>;
};

export type Exchange_TokenDayData_orderBy =
  | 'id'
  | 'date'
  | 'token'
  | 'volume'
  | 'volumeETH'
  | 'volumeUSD'
  | 'txCount'
  | 'liquidity'
  | 'liquidityETH'
  | 'liquidityUSD'
  | 'priceUSD';

export type Exchange_TokenHourData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  token: Exchange_Token;
  volume: Scalars['Exchange_BigDecimal'];
  volumeETH: Scalars['Exchange_BigDecimal'];
  volumeUSD: Scalars['Exchange_BigDecimal'];
  txCount: Scalars['BigInt'];
  liquidity: Scalars['Exchange_BigDecimal'];
  liquidityETH: Scalars['Exchange_BigDecimal'];
  liquidityUSD: Scalars['Exchange_BigDecimal'];
  priceUSD: Scalars['Exchange_BigDecimal'];
};

export type Exchange_TokenHourData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Exchange_Token_filter>;
  volume?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volume_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeETH?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeETH_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeETH_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeETH_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeETH_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeETH_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeETH_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeETH_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidity_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidity_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidity_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidity_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidity_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidity_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  liquidityETH?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityETH_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityETH_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityETH_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityETH_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityETH_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityETH_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  liquidityETH_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  liquidityUSD?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityUSD_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityUSD_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityUSD_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityUSD_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityUSD_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  priceUSD?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  priceUSD_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  priceUSD_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  priceUSD_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  priceUSD_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  priceUSD_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  priceUSD_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  priceUSD_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Exchange_BlockChangedFilter>;
};

export type Exchange_TokenHourData_orderBy =
  | 'id'
  | 'date'
  | 'token'
  | 'volume'
  | 'volumeETH'
  | 'volumeUSD'
  | 'txCount'
  | 'liquidity'
  | 'liquidityETH'
  | 'liquidityUSD'
  | 'priceUSD';

export type Exchange_Token_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  factory?: InputMaybe<Scalars['String']>;
  factory_not?: InputMaybe<Scalars['String']>;
  factory_gt?: InputMaybe<Scalars['String']>;
  factory_lt?: InputMaybe<Scalars['String']>;
  factory_gte?: InputMaybe<Scalars['String']>;
  factory_lte?: InputMaybe<Scalars['String']>;
  factory_in?: InputMaybe<Array<Scalars['String']>>;
  factory_not_in?: InputMaybe<Array<Scalars['String']>>;
  factory_contains?: InputMaybe<Scalars['String']>;
  factory_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_not_contains?: InputMaybe<Scalars['String']>;
  factory_not_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_starts_with?: InputMaybe<Scalars['String']>;
  factory_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_starts_with?: InputMaybe<Scalars['String']>;
  factory_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_ends_with?: InputMaybe<Scalars['String']>;
  factory_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_ends_with?: InputMaybe<Scalars['String']>;
  factory_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factory_?: InputMaybe<Exchange_Factory_filter>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  decimals?: InputMaybe<Scalars['BigInt']>;
  decimals_not?: InputMaybe<Scalars['BigInt']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']>;
  decimals_lt?: InputMaybe<Scalars['BigInt']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volume_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidity_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidity_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidity_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidity_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidity_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  liquidity_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  derivedETH?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  derivedETH_not?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  derivedETH_gt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  derivedETH_lt?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  derivedETH_gte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  derivedETH_lte?: InputMaybe<Scalars['Exchange_BigDecimal']>;
  derivedETH_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  derivedETH_not_in?: InputMaybe<Array<Scalars['Exchange_BigDecimal']>>;
  hourData_?: InputMaybe<Exchange_TokenHourData_filter>;
  dayData_?: InputMaybe<Exchange_TokenDayData_filter>;
  basePairs_?: InputMaybe<Exchange_Pair_filter>;
  quotePairs_?: InputMaybe<Exchange_Pair_filter>;
  basePairsDayData_?: InputMaybe<Exchange_PairDayData_filter>;
  quotePairsDayData_?: InputMaybe<Exchange_PairDayData_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Exchange_BlockChangedFilter>;
};

export type Exchange_Token_orderBy =
  | 'id'
  | 'factory'
  | 'symbol'
  | 'name'
  | 'decimals'
  | 'totalSupply'
  | 'volume'
  | 'volumeUSD'
  | 'untrackedVolumeUSD'
  | 'txCount'
  | 'liquidity'
  | 'derivedETH'
  | 'hourData'
  | 'dayData'
  | 'basePairs'
  | 'quotePairs'
  | 'basePairsDayData'
  | 'quotePairsDayData';

export type Exchange_Transaction = {
  id: Scalars['ID'];
  blockNumber: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  mints: Array<Maybe<Exchange_Mint>>;
  burns: Array<Maybe<Exchange_Burn>>;
  swaps: Array<Maybe<Exchange_Swap>>;
};


export type Exchange_TransactionmintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_Mint_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_Mint_filter>;
};


export type Exchange_TransactionburnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_Burn_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_Burn_filter>;
};


export type Exchange_TransactionswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_Swap_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_Swap_filter>;
};

export type Exchange_Transaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mints?: InputMaybe<Array<Scalars['String']>>;
  mints_not?: InputMaybe<Array<Scalars['String']>>;
  mints_contains?: InputMaybe<Array<Scalars['String']>>;
  mints_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mints_not_contains?: InputMaybe<Array<Scalars['String']>>;
  mints_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mints_?: InputMaybe<Exchange_Mint_filter>;
  burns?: InputMaybe<Array<Scalars['String']>>;
  burns_not?: InputMaybe<Array<Scalars['String']>>;
  burns_contains?: InputMaybe<Array<Scalars['String']>>;
  burns_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  burns_not_contains?: InputMaybe<Array<Scalars['String']>>;
  burns_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  burns_?: InputMaybe<Exchange_Burn_filter>;
  swaps?: InputMaybe<Array<Scalars['String']>>;
  swaps_not?: InputMaybe<Array<Scalars['String']>>;
  swaps_contains?: InputMaybe<Array<Scalars['String']>>;
  swaps_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  swaps_not_contains?: InputMaybe<Array<Scalars['String']>>;
  swaps_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  swaps_?: InputMaybe<Exchange_Swap_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Exchange_BlockChangedFilter>;
};

export type Exchange_Transaction_orderBy =
  | 'id'
  | 'blockNumber'
  | 'timestamp'
  | 'mints'
  | 'burns'
  | 'swaps';

export type Exchange_User = {
  id: Scalars['ID'];
  liquidityPositions: Array<Exchange_LiquidityPosition>;
};


export type Exchange_UserliquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Exchange_LiquidityPosition_orderBy>;
  orderDirection?: InputMaybe<Exchange_OrderDirection>;
  where?: InputMaybe<Exchange_LiquidityPosition_filter>;
};

export type Exchange_User_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  liquidityPositions_?: InputMaybe<Exchange_LiquidityPosition_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Exchange_BlockChangedFilter>;
};

export type Exchange_User_orderBy =
  | 'id'
  | 'liquidityPositions';

export type Exchange__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Exchange_Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type Exchange__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: Exchange__Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type Exchange__SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  Exchange_user: InContextSdkMethod<Query['Exchange_user'], QueryExchange_userArgs, MeshContext>,
  /** null **/
  Exchange_users: InContextSdkMethod<Query['Exchange_users'], QueryExchange_usersArgs, MeshContext>,
  /** null **/
  Exchange_bundle: InContextSdkMethod<Query['Exchange_bundle'], QueryExchange_bundleArgs, MeshContext>,
  /** null **/
  Exchange_bundles: InContextSdkMethod<Query['Exchange_bundles'], QueryExchange_bundlesArgs, MeshContext>,
  /** null **/
  Exchange_factory: InContextSdkMethod<Query['Exchange_factory'], QueryExchange_factoryArgs, MeshContext>,
  /** null **/
  Exchange_factories: InContextSdkMethod<Query['Exchange_factories'], QueryExchange_factoriesArgs, MeshContext>,
  /** null **/
  Exchange_hourData: InContextSdkMethod<Query['Exchange_hourData'], QueryExchange_hourDataArgs, MeshContext>,
  /** null **/
  Exchange_hourDatas: InContextSdkMethod<Query['Exchange_hourDatas'], QueryExchange_hourDatasArgs, MeshContext>,
  /** null **/
  Exchange_dayData: InContextSdkMethod<Query['Exchange_dayData'], QueryExchange_dayDataArgs, MeshContext>,
  /** null **/
  Exchange_dayDatas: InContextSdkMethod<Query['Exchange_dayDatas'], QueryExchange_dayDatasArgs, MeshContext>,
  /** null **/
  Exchange_token: InContextSdkMethod<Query['Exchange_token'], QueryExchange_tokenArgs, MeshContext>,
  /** null **/
  Exchange_tokens: InContextSdkMethod<Query['Exchange_tokens'], QueryExchange_tokensArgs, MeshContext>,
  /** null **/
  Exchange_tokenHourData: InContextSdkMethod<Query['Exchange_tokenHourData'], QueryExchange_tokenHourDataArgs, MeshContext>,
  /** null **/
  Exchange_tokenHourDatas: InContextSdkMethod<Query['Exchange_tokenHourDatas'], QueryExchange_tokenHourDatasArgs, MeshContext>,
  /** null **/
  Exchange_tokenDayData: InContextSdkMethod<Query['Exchange_tokenDayData'], QueryExchange_tokenDayDataArgs, MeshContext>,
  /** null **/
  Exchange_tokenDayDatas: InContextSdkMethod<Query['Exchange_tokenDayDatas'], QueryExchange_tokenDayDatasArgs, MeshContext>,
  /** null **/
  Exchange_pair: InContextSdkMethod<Query['Exchange_pair'], QueryExchange_pairArgs, MeshContext>,
  /** null **/
  Exchange_pairs: InContextSdkMethod<Query['Exchange_pairs'], QueryExchange_pairsArgs, MeshContext>,
  /** null **/
  Exchange_pairHourData: InContextSdkMethod<Query['Exchange_pairHourData'], QueryExchange_pairHourDataArgs, MeshContext>,
  /** null **/
  Exchange_pairHourDatas: InContextSdkMethod<Query['Exchange_pairHourDatas'], QueryExchange_pairHourDatasArgs, MeshContext>,
  /** null **/
  Exchange_pairDayData: InContextSdkMethod<Query['Exchange_pairDayData'], QueryExchange_pairDayDataArgs, MeshContext>,
  /** null **/
  Exchange_pairDayDatas: InContextSdkMethod<Query['Exchange_pairDayDatas'], QueryExchange_pairDayDatasArgs, MeshContext>,
  /** null **/
  Exchange_liquidityPosition: InContextSdkMethod<Query['Exchange_liquidityPosition'], QueryExchange_liquidityPositionArgs, MeshContext>,
  /** null **/
  Exchange_liquidityPositions: InContextSdkMethod<Query['Exchange_liquidityPositions'], QueryExchange_liquidityPositionsArgs, MeshContext>,
  /** null **/
  Exchange_liquidityPositionSnapshot: InContextSdkMethod<Query['Exchange_liquidityPositionSnapshot'], QueryExchange_liquidityPositionSnapshotArgs, MeshContext>,
  /** null **/
  Exchange_liquidityPositionSnapshots: InContextSdkMethod<Query['Exchange_liquidityPositionSnapshots'], QueryExchange_liquidityPositionSnapshotsArgs, MeshContext>,
  /** null **/
  Exchange_transaction: InContextSdkMethod<Query['Exchange_transaction'], QueryExchange_transactionArgs, MeshContext>,
  /** null **/
  Exchange_transactions: InContextSdkMethod<Query['Exchange_transactions'], QueryExchange_transactionsArgs, MeshContext>,
  /** null **/
  Exchange_mint: InContextSdkMethod<Query['Exchange_mint'], QueryExchange_mintArgs, MeshContext>,
  /** null **/
  Exchange_mints: InContextSdkMethod<Query['Exchange_mints'], QueryExchange_mintsArgs, MeshContext>,
  /** null **/
  Exchange_burn: InContextSdkMethod<Query['Exchange_burn'], QueryExchange_burnArgs, MeshContext>,
  /** null **/
  Exchange_burns: InContextSdkMethod<Query['Exchange_burns'], QueryExchange_burnsArgs, MeshContext>,
  /** null **/
  Exchange_swap: InContextSdkMethod<Query['Exchange_swap'], QueryExchange_swapArgs, MeshContext>,
  /** null **/
  Exchange_swaps: InContextSdkMethod<Query['Exchange_swaps'], QueryExchange_swapsArgs, MeshContext>,
  /** null **/
  Exchange_tokenSearch: InContextSdkMethod<Query['Exchange_tokenSearch'], QueryExchange_tokenSearchArgs, MeshContext>,
  /** null **/
  Exchange_pairSearch: InContextSdkMethod<Query['Exchange_pairSearch'], QueryExchange_pairSearchArgs, MeshContext>,
  /** null **/
  Exchange_userSearch: InContextSdkMethod<Query['Exchange_userSearch'], QueryExchange_userSearchArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Exchange__meta: InContextSdkMethod<Query['Exchange__meta'], QueryExchange__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  Exchange_user: InContextSdkMethod<Subscription['Exchange_user'], SubscriptionExchange_userArgs, MeshContext>,
  /** null **/
  Exchange_users: InContextSdkMethod<Subscription['Exchange_users'], SubscriptionExchange_usersArgs, MeshContext>,
  /** null **/
  Exchange_bundle: InContextSdkMethod<Subscription['Exchange_bundle'], SubscriptionExchange_bundleArgs, MeshContext>,
  /** null **/
  Exchange_bundles: InContextSdkMethod<Subscription['Exchange_bundles'], SubscriptionExchange_bundlesArgs, MeshContext>,
  /** null **/
  Exchange_factory: InContextSdkMethod<Subscription['Exchange_factory'], SubscriptionExchange_factoryArgs, MeshContext>,
  /** null **/
  Exchange_factories: InContextSdkMethod<Subscription['Exchange_factories'], SubscriptionExchange_factoriesArgs, MeshContext>,
  /** null **/
  Exchange_hourData: InContextSdkMethod<Subscription['Exchange_hourData'], SubscriptionExchange_hourDataArgs, MeshContext>,
  /** null **/
  Exchange_hourDatas: InContextSdkMethod<Subscription['Exchange_hourDatas'], SubscriptionExchange_hourDatasArgs, MeshContext>,
  /** null **/
  Exchange_dayData: InContextSdkMethod<Subscription['Exchange_dayData'], SubscriptionExchange_dayDataArgs, MeshContext>,
  /** null **/
  Exchange_dayDatas: InContextSdkMethod<Subscription['Exchange_dayDatas'], SubscriptionExchange_dayDatasArgs, MeshContext>,
  /** null **/
  Exchange_token: InContextSdkMethod<Subscription['Exchange_token'], SubscriptionExchange_tokenArgs, MeshContext>,
  /** null **/
  Exchange_tokens: InContextSdkMethod<Subscription['Exchange_tokens'], SubscriptionExchange_tokensArgs, MeshContext>,
  /** null **/
  Exchange_tokenHourData: InContextSdkMethod<Subscription['Exchange_tokenHourData'], SubscriptionExchange_tokenHourDataArgs, MeshContext>,
  /** null **/
  Exchange_tokenHourDatas: InContextSdkMethod<Subscription['Exchange_tokenHourDatas'], SubscriptionExchange_tokenHourDatasArgs, MeshContext>,
  /** null **/
  Exchange_tokenDayData: InContextSdkMethod<Subscription['Exchange_tokenDayData'], SubscriptionExchange_tokenDayDataArgs, MeshContext>,
  /** null **/
  Exchange_tokenDayDatas: InContextSdkMethod<Subscription['Exchange_tokenDayDatas'], SubscriptionExchange_tokenDayDatasArgs, MeshContext>,
  /** null **/
  Exchange_pair: InContextSdkMethod<Subscription['Exchange_pair'], SubscriptionExchange_pairArgs, MeshContext>,
  /** null **/
  Exchange_pairs: InContextSdkMethod<Subscription['Exchange_pairs'], SubscriptionExchange_pairsArgs, MeshContext>,
  /** null **/
  Exchange_pairHourData: InContextSdkMethod<Subscription['Exchange_pairHourData'], SubscriptionExchange_pairHourDataArgs, MeshContext>,
  /** null **/
  Exchange_pairHourDatas: InContextSdkMethod<Subscription['Exchange_pairHourDatas'], SubscriptionExchange_pairHourDatasArgs, MeshContext>,
  /** null **/
  Exchange_pairDayData: InContextSdkMethod<Subscription['Exchange_pairDayData'], SubscriptionExchange_pairDayDataArgs, MeshContext>,
  /** null **/
  Exchange_pairDayDatas: InContextSdkMethod<Subscription['Exchange_pairDayDatas'], SubscriptionExchange_pairDayDatasArgs, MeshContext>,
  /** null **/
  Exchange_liquidityPosition: InContextSdkMethod<Subscription['Exchange_liquidityPosition'], SubscriptionExchange_liquidityPositionArgs, MeshContext>,
  /** null **/
  Exchange_liquidityPositions: InContextSdkMethod<Subscription['Exchange_liquidityPositions'], SubscriptionExchange_liquidityPositionsArgs, MeshContext>,
  /** null **/
  Exchange_liquidityPositionSnapshot: InContextSdkMethod<Subscription['Exchange_liquidityPositionSnapshot'], SubscriptionExchange_liquidityPositionSnapshotArgs, MeshContext>,
  /** null **/
  Exchange_liquidityPositionSnapshots: InContextSdkMethod<Subscription['Exchange_liquidityPositionSnapshots'], SubscriptionExchange_liquidityPositionSnapshotsArgs, MeshContext>,
  /** null **/
  Exchange_transaction: InContextSdkMethod<Subscription['Exchange_transaction'], SubscriptionExchange_transactionArgs, MeshContext>,
  /** null **/
  Exchange_transactions: InContextSdkMethod<Subscription['Exchange_transactions'], SubscriptionExchange_transactionsArgs, MeshContext>,
  /** null **/
  Exchange_mint: InContextSdkMethod<Subscription['Exchange_mint'], SubscriptionExchange_mintArgs, MeshContext>,
  /** null **/
  Exchange_mints: InContextSdkMethod<Subscription['Exchange_mints'], SubscriptionExchange_mintsArgs, MeshContext>,
  /** null **/
  Exchange_burn: InContextSdkMethod<Subscription['Exchange_burn'], SubscriptionExchange_burnArgs, MeshContext>,
  /** null **/
  Exchange_burns: InContextSdkMethod<Subscription['Exchange_burns'], SubscriptionExchange_burnsArgs, MeshContext>,
  /** null **/
  Exchange_swap: InContextSdkMethod<Subscription['Exchange_swap'], SubscriptionExchange_swapArgs, MeshContext>,
  /** null **/
  Exchange_swaps: InContextSdkMethod<Subscription['Exchange_swaps'], SubscriptionExchange_swapsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Exchange__meta: InContextSdkMethod<Subscription['Exchange__meta'], SubscriptionExchange__metaArgs, MeshContext>
  };

  export type Context = {
      ["Exchnage"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
