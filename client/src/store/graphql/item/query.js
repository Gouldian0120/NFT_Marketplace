import gql from "graphql-tag";

export const GET_ALL_ITEM = gql`
  query(
    $skip: Int
    $limit: Int
    $keySearch: String
    $keyName: String
    $order: String
    $sortBy: String
  ) {
    getAllItems(
      skip: $skip
      limit: $limit
      keySearch: $keySearch
      keyName: $keyName
      order: $order
      sortBy: $sortBy
    ) {
      _id
      token_id
      category_id
      collection_id
      name
      description
      external_link
      image
      preview
      total_quantity
      isPutOnMarket
      signature
      sellOrder
      minBid
      royalties
      creator
      owner
      created_at
      updated_at
    }
  }
`;
export const GET_ITEM_CATEGORY = gql`
  query(
    $skip: Int
    $limit: Int
    $keySearch: String
    $keyName: String
    $order: String
    $sortBy: String
  ) {
    getItemsByCategory(
      skip: $skip
      limit: $limit
      keySearch: $keySearch
      keyName: $keyName
      order: $order
      sortBy: $sortBy
    ) {
      _id
      token_id
      category_id
      collection_id
      name
      description
      external_link
      image
      preview
      total_quantity
      isPutOnMarket
      signature
      sellOrder
      minBid
      royalties
      creator
      owner
      created_at
      updated_at
    }
  }
`;
export const GET_ALL_ITEM_ON_SALE = gql`
  query(
    $skip: Int
    $limit: Int
    $keySearch: String
    $keyName: String
    $order: String
    $sortBy: String
  ) {
    getAllItemsOnSale(
      skip: $skip
      limit: $limit
      keySearch: $keySearch
      keyName: $keyName
      order: $order
      sortBy: $sortBy
    ) {
      _id
      token_id
      category_id
      collection_id
      name
      description
      external_link
      image
      preview
      total_quantity
      isPutOnMarket
      signature
      sellOrder
      minBid
      royalties
      creator
      owner
      created_at
      updated_at
    }
  }
`;

export const GET_ITEM_OF_USER = gql`
  query(
    $skip: Int
    $limit: Int
    $keySearch: String
    $keyName: String
    $order: String
    $sortBy: String
    $wallet_address: String!
  ) {
    getItemForUser(
      skip: $skip
      limit: $limit
      keySearch: $keySearch
      keyName: $keyName
      order: $order
      sortBy: $sortBy
      wallet_address: $wallet_address
    ) {
      _id
      token_id
      category_id
      collection_id
      name
      description
      external_link
      image
      preview
      total_quantity
      isPutOnMarket
      signature
      sellOrder
      minBid
      royalties
      creator
      owner
      created_at
      updated_at
    }
  }
`;
export const GET_ITEM_CREATED = gql`
  query(
    $skip: Int
    $limit: Int
    $keySearch: String
    $keyName: String
    $order: String
    $sortBy: String
    $wallet_address: String!
  ) {
    getItemCreated(
      skip: $skip
      limit: $limit
      keySearch: $keySearch
      keyName: $keyName
      order: $order
      sortBy: $sortBy
      wallet_address: $wallet_address
    ) {
      _id
      token_id
      category_id
      collection_id
      name
      description
      external_link
      image
      preview
      total_quantity
      isPutOnMarket
      sellOrder
      signature
      minBid
      royalties
      creator
      owner
      created_at
      updated_at
    }
  }
`;

export const GET_ITEM_DETAIL = gql`
  query($id: String!) {
    getDetailItem(id: $id) {
      _id
      token_id
      category_id
      collection_id
      name
      description
      external_link
      image
      preview
      total_quantity
      isPutOnMarket
      sellOrder
      mintTransactionHash
      signature
      minBid
      startBid
      expireBid
      royalties
      creator
      owner
      created_at
      updated_at
      updated_at
      collection
      category
    }
  }
`;
