import { gql } from '@apollo/client';

export const QUERY_PLAYER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      tournaments {
        _id
        tournName
        createdAt
      }
    }
  }
`;

export const QUERY_TOURNAMENTS = gql`
  query getTournaments {
    tournaments {
      _id
      tournName
      tournamentHost
      createdAt
      playerSize
      join
      full
    }
  }
`;

export const QUERY_SINGLE_TOURNAMENT = gql`
  query getSingleTournament($tournamentId: ID!) {
    tournament(tournamentId: $tournamentId) {
      _id
      tournName
      tournamentHost
      createdAt
      playerSize
      join
      full
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      tournaments {
        _id
        tournName
        tournamentHost
        createdAt
      }
    }
  }
`;
