import gql from "graphql-tag";

export const GET_ALL_USER = gql`
  query {
    getAllUsers {
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
    }
  }
`;

export const GET_INVITE_USER_QUERY = gql`
  query {
    getInviteUsers {
      total
      items {
        id
        email
        jobTitle
        permissionProfile {
          id
          name
        }
        confirm
        expiredAt
        createdAt
        updatedAt
        createdBy {
          id
          firstName
          lastName
        }
      }
    }
  }
`;

export const GET_EMPLOYEE_QUERY = gql`
  query($employeeId: String!) {
    getEmployee(employeeId: $employeeId) {
      id
      firstName
      lastName
      jobTitle
      phone
      address
      active
      user {
        id
        email
      }
      permissionProfiles {
        id
        name
      }
      groups {
        id
        name
      }
    }
  }
`;
