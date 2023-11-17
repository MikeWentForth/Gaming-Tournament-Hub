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
    }
}

module.exports = resolvers;

