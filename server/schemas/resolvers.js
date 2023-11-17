const { User, Tournament } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        players: async () => {
            return User.find().populate('tournaments')
        },
        player: async (parent, { username }) => {
            return User.findOne({ username }).populate('tournaments');
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
                return User.findOne({ _id: context.user._id }).populate('tournaments');
            }
            throw AuthenticationError;
        },
    },

    Mutation: {
        addPlayer: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const player = await User.findOne({ email });
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
        addTournament: async (parent, { tournName }, context) => {
            if (context.user) {
                const tournament = await Tournament.create({
                    tournName,
                    tournamentHost: context.user.username,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { tournament: tournament._id } }
                );

                return tournament;
            }
            throw AuthenticationError;
            ('Sorry SCRUB but you need to be logged in!');
        },
        removeTournament: async (parent, { tournamentId }, context) => {
            if (context.user) {
              const tournament = await Tournament.findOneAndDelete({
                _id: tournamentId,
                tournamentHost: context.user.username,
              });
      
              await User.findOneAndUpdate(
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

