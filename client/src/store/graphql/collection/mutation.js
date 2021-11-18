import gql from "graphql-tag";

export const CREATE_COLLECTION = gql`
  mutation(
    $fileBanner: Upload
    $file: Upload
    $category_id: String
    $name: String
    $description: String
    $short_url: String
    $socials: JSON
    $wallet_address: String!
  ) {
    createCollection(
      fileBanner: $fileBanner
      file: $file
      category_id: $category_id
      name: $name
      description: $description
      short_url: $short_url
      socials: $socials
      wallet_address: $wallet_address
      creator: $wallet_address
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
    }
  }
`;

export const EDIT_COLLECTION = gql`
  mutation(
    $fileBanner: Upload
    $file: Upload
    $category_id: String
    $name: String
    $description: String
    $short_url: String
    $socials: JSON
    $image: String
    $banner_img: String
    $wallet_address: String!
  ) {
    updateCollection(
      fileBanner: $fileBanner
      file: $file
      category_id: $category_id
      name: $name
      description: $description
      short_url: $short_url
      socials: $socials
      image: $image
      banner_img: $banner_img
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
    }
  }
`;
