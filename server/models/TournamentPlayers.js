const { Schema, model } = require("mongoose");

const tournamentPlayersSchema = new Schema({
    // links to tournament Id
    _id: {
        type: Schema.Types.ObjectId,
        ref: 'Tournament'
    },
    tournamentHost: {
        type: Schema.Types.ObjectId,
        ref: 'Player',
    },
    tournamentPlayers: [{
        type: Schema.Types.ObjectId,
        ref: 'Player',
    }],
});
const TournamentPlayers = model("TournamentPlayers", tournamentPlayersSchema);

module.exports = TournamentPlayers;
