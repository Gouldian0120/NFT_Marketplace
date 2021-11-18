import gql from "graphql-tag";

export const GET_CATEGORY = gql`
  query {
    getAllCategory {
      _id
      name
      description
      short_url
      image
      created_at
      updated_at
    }
  }
`;
