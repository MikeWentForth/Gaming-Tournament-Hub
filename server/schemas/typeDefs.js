const typeDefs = `
    type Tournament {
        _id: ID
        tournName: String
        playerSize: Int
        players: [Player]
        join : Boolean
        full : Boolean
    }

    type Player {
        _id: ID
        username: String
        email: String
        password: String
        tournament: [Tournament]!    
    }

    type Auth {
        token: ID!
        player: Player
      }
    
    type Query {
        tournament(tournamentid: ID): Tournament
        tournaments:[Tournament]
        player(username: String!): Player
        players:[Player]
        me: Player
    }

    type Mutation {
        addPlayer(username: String!, email: String!, password: String!): Auth
        deletePlayer(playerId: ID!)
        login(email: String!, password: String!): Auth
        addTournament(tournamentName: String!): Tournament
        removeTournament(tournamentId: ID!): Tournament
        joinTournament(playerId: ID!, tournamentId: ID!): Tournament 
        leaveTournament(playerId: ID!, tournamentId: ID!): Tournament   
    }

`
module.exports = typeDefs;

