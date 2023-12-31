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
      token
    }
  }
`;

export const ADD_TOURNAMENT = gql`
  mutation addTournament($tournamentName: String!, $gameName: String!, $playerSize: Int) {
    addTournament(tournamentName: $tournamentName, gameName: $gameName, playerSize: $playerSize) {
      _id
      tournName
      playerSize
      join
      full
      createdAt
    }
  }
`;

export const JOIN_TOURNAMENT = gql`
  mutation joinTournament($tournamentId: ID!) {
    joinTournament(tournamentId: $tournamentId) {
      _id
      username
    }
  }
`;

export const REMOVE_TOURNAMENT = gql`
  mutation removeTournament($tournamentId: ID!) {
    removeTournament(tournamentId: $tournamentId) {
      _id
      tournName
      playerSize
      join
      full
      createdAt
    }
  }
`;

