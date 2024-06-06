import { gql } from '@apollo/client';

export const AUTHENTICATE = gql`
  mutation Authenticate ( $credentials: AuthenticateInput ) { 
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation CreateReview( $review: CreateReviewInput ) {
    createReview(review: $review) {
      repositoryId
    }
  }
`

export const CREATE_USER = gql`
  mutation CreateUser($user: CreateUserInput) {
    createUser(user: $user) {
      id
      username
    }
  }
`