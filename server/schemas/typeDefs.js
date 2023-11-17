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
        name: String
    }

    type Query {
        tournament(_id: ID): Tournament
        tournaments:[Tournament]
        player(_id: ID): Player
    }

    

`
module.exports = typeDefs;

