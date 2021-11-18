import gql from "graphql-tag";

export const GET_ALL_COLLECTION = gql`
  query(
    $skip: Int
    $limit: Int
    $keySearch: String
    $keyName: String
    $order: String
    $sortBy: String
  ) {
    getListCollection(
      skip: $skip
      limit: $limit
      keySearch: $keySearch
      keyName: $keyName
      order: $order
      sortBy: $sortBy
    ) {
      _id
      category_id
      name
      description
      short_url
      socials
      image
      banner_img
      creator
      created_at
      updated_at
      user_info
    }
  }
`;
export const GET_DETAIL_COLLECTION = gql`
  query($id: String!) {
    getDetailCollection(id: $id) {
      _id
      category_id
      name
      description
      short_url
      socials
      image
      banner_img
      creator
      created_at
      updated_at
      user_info
      items
    }
  }
`;
export const GET_COLLECTION_FOR_USER = gql`
  query(
    $skip: Int
    $limit: Int
    $keySearch: String
    $keyName: String
    $order: String
    $sortBy: String
    $wallet_address: String!
  ) {
    getCollectionForUser(
      skip: $skip
      limit: $limit
      keySearch: $keySearch
      keyName: $keyName
      order: $order
      sortBy: $sortBy
      wallet_address: $wallet_address
    ) {
      _id
      category_id
      name
      description
      short_url
      socials
      image
      banner_img
      creator
      created_at
      updated_at
      user_info
    }
  }
`;
