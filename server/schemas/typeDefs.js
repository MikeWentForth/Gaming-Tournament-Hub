const typeDefs = `
    type Tournament {
        _id: ID
        tournName: String
        gameName: String
        playerSize: Int
        join: Boolean
        full: Boolean
        createdAt: String 
    }

    type Player {
        _id: ID
        username: String
        email: String
        password: String
        hostedTournaments: [Tournament]
        joinedTournaments: [Tournament]
    }

    type TournamentPlayers {
        _id: ID
        tournament: Tournament
        tournamentHost: Player
        tournamentPlayers: [Player]
    }

    type Auth {
        token: ID!
        player: Player
    }
    
    type Query {
        tournament(tournamentId: ID): Tournament
        tournaments(username: String!): [Tournament]
        tournamentPlayers(tournamentId: ID): TournamentPlayers
        player(username: String!): Player
        players:[Player]
        hostedTournaments(username: String): [Tournament]
        joinedTournaments(username: String): [Tournament]
        me: Player
    }

    type Mutation {
        addPlayer(username: String!, email: String!, password: String!): Auth
        deletePlayer(playerId: ID!): Player
        login(email: String!, password: String!): Auth
        addTournament(tournamentName: String!, gameName: String!, playerSize: Int): Tournament
        removeTournament(tournamentId: ID!): Tournament
        joinTournament(playerId: ID!, tournamentId: ID!): Tournament 
        leaveTournament(playerId: ID!, tournamentId: ID!): Tournament   
    }

`;
module.exports = typeDefs;
