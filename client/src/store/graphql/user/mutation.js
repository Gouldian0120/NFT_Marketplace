import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation($wallet_address: String!) {
    checkExistUser(wallet_address: $wallet_address) {
      _id
      wallet_address
      wallet_name
      email
      full_name
      bio
      custom_url
      avatar
      banner_img
      socials
      created_at
      updated_at
      list_collections
    }
  }
`;

export const EDIT_USER = gql`
  mutation(
    $wallet_address: String!
    $email: String
    $full_name: String
    $bio: String
    $custom_url: String
    $socials: JSON
    $fileAvatar: Upload
    $fileBanner: Upload
  ) {
    updateProfile(
      wallet_address: $wallet_address
      email: $email
      full_name: $full_name
      bio: $bio
      custom_url: $custom_url
      socials: $socials
      fileAvatar: $fileAvatar
      fileBanner: $fileBanner
    ) {
      _id
      wallet_address
      wallet_name
      email
      full_name
      bio
      custom_url
      avatar
      banner_img
      created_at
      updated_at
      list_collections
      socials
    }
  }
`;
