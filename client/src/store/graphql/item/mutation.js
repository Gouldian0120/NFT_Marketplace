import gql from "graphql-tag";

export const MINT_ITEM = gql`
  mutation($token_id: Float!) {
    requestMintSignature(token_id: $token_id)
  }
`;
export const BUY_ITEM = gql`
  mutation($token_id: Float!) {
    requestBuyAsset(token_id: $token_id)
  }
`;
export const CREATE_ITEM = gql`
  mutation(
    $token_id: Float
    $file: Upload
    $collection_id: String
    $category_id: String
    $name: String
    $description: String
    $external_link: String
    $total_quantity: Float
    $isMarketOption: Float
    $expireBid: Float
    $minBid: Float
    $royalties: Float
    $isPutOnMarket: Boolean
    $contract: String
    $startBid: DateTime
    $wallet_address: String!
  ) {
    createItem(
      token_id: $token_id
      file: $file
      collection_id: $collection_id
      category_id: $category_id
      name: $name
      description: $description
      external_link: $external_link
      total_quantity: $total_quantity
      isMarketOption: $isMarketOption
      expireBid: $expireBid
      minBid: $minBid
      royalties: $royalties
      isPutOnMarket: $isPutOnMarket
      contract: $contract
      creator: $wallet_address
      owner: $wallet_address
      startBid: $startBid
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
      contract
      minBid
      royalties
      creator
      owner
      created_at
      updated_at
      collection
      category
    }
  }
`;

export const UPDATE_OWNER_ITEM = gql`
  mutation($token_id: Float!, $wallet_address: String!) {
    updateOwner(token_id: $token_id, wallet_address: $wallet_address)
  }
`;
export const EDIT_ITEM = gql`
  mutation(
    $id: String!
    $collection_id: String
    $category_id: String
    $name: String
    $description: String
    $external_link: String
    $image: String
    $preview: String
    $total_quantity: Float
    $isMarketOption: Float
    $expireBid: Float
    $minBid: Float
    $royalties: Float
    $isPutOnMarket: Boolean
    $contract: String
    $startBid: DateTime
    $wallet_address: String!
    $sellOrder: String
    $signature: String
    $mintTransactionHash: String
  ) {
    updateItem(
      id: $id
      collection_id: $collection_id
      category_id: $category_id
      name: $name
      description: $description
      external_link: $external_link
      image: $image
      preview: $preview
      total_quantity: $total_quantity
      isMarketOption: $isMarketOption
      expireBid: $expireBid
      minBid: $minBid
      royalties: $royalties
      isPutOnMarket: $isPutOnMarket
      contract: $contract
      startBid: $startBid
      wallet_address: $wallet_address
      mintTransactionHash: $mintTransactionHash
      sellOrder: $sellOrder
      signature: $signature
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
      contract
      minBid
      startBid
      royalties
      creator
      created_at
      updated_at
      collection
      category
    }
  }
`;
