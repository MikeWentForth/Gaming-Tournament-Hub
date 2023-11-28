import { gql } from '@apollo/client';

export const QUERY_TOURNAMENTS = gql`
  query tournaments {
    tournaments {
      tournName
      gameName
      playerSize
      join
      full
      createdAt
    }
  }
`;

export const QUERY_USER_TOURNAMENTS = gql`
  query userTournaments {
    userTournaments(username: $username) {
      _id
      username
      email
      hostedTournaments {
        _id
        tournName
        gameName
        playerSize
        createdAt
      }
      joinedTournaments {
        _id
        tournName
        gameName
        playerSize
        createdAt
      }
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
      hostedTournaments {
        _id
        tournName
        gameName
        playerSize
        createdAt
      }
      joinedTournaments {
        _id
        tournName
        gameName
        playerSize
        createdAt
      }
    }
  }
`;
