const { Player, Tournament } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        players: async () => {
            return Player.find().populate('tournaments')
        },
        player: async (parent, { username }) => {
            return Player.findOne({ username }).populate('tournaments');
        },
        tournament: async (parent, { tournamentId }) => {
            return Tournament.findOne({ _id: tournamentId });
        },
        tournaments: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Tournament.find(params).sort({ createdAt: -1 });
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return Player.findOne({ _id: context.user._id }).populate('tournaments');
            }
            throw AuthenticationError;
        },
    },

    Mutation: {
        addPlayer: async (parent, { username, email, password }) => {
            const player = await Player.create({ username, email, password });
            const token = signToken(player);
            return { token, player };
        },
        login: async (parent, { email, password }) => {
            const player = await Player.findOne({ email });
            if (!player) {
                throw AuthenticationError;
            }
            const correctPw = await player.isCorrectPassword(password);
            if (!correctPw) {
                throw AuthenticationError;
            }
            const token = signToken(player);
            return { token, player };
        },
        addTournament: async (parent, { tournamentName, playerSize }, context) => {
            if (context.user) {
                console.log(context.user);
                const tournament = await Tournament.create({
                    tournName: tournamentName,
                    tournamentHost: context.user.username,
                    playerSize
                });

                await Player.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { tournament: tournament._id } }
                );

                return tournament;
            }
        },
        removeTournament: async (parent, { tournamentId }, context) => {
            if (context.user) {
              const tournament = await Tournament.findOneAndDelete({
                _id: tournamentId,
                tournamentHost: context.user.username,
              });
      
              await Player.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { tournament: tournament._id } }
              );
      
              return tournament;
            }
            throw AuthenticationError;
          },
          
    }
}

module.exports = resolvers;

