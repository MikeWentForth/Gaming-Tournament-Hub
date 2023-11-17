import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      player {
        _id
        username
      }
    }
  }
`;

export const ADD_PLAYER = gql`
  mutation addPlayer($username: String!, $email: String!, $password: String!) {
    addPlayer(username: $username, email: $email, password: $password) {
      player {
        _id
        email
        password
        username
      }
    }
  }
`;

export const ADD_TOURNAMENT = gql`
  mutation addThought($thoughtText: String!) {
    addThought(thoughtText: $thoughtText) {
      _id
      tournName
      tournamentHost
      createdAt
      
    }
  }
`;

