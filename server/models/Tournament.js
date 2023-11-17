const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/auth');

const playerSchema = require('./Player');

const tournamentSchema = new Schema({
  tournName: {
    type: String,
    required: 'You joined this many tournaments',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  playerSize: {
    type: Number,
    required: true,
  },
  players: [playerSchema],
  join: {
    type: Boolean,
  },
  full: {
    type: Boolean,
  },
  tournamentHost: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  // comments: [
  //   {
  //     commentText: {
  //       type: String,
  //       required: true,
  //       minlength: 1,
  //       maxlength: 280,
  //     },
  //     commentAuthor: {
  //       type: String,
  //       required: true,
  //     },
  //     createdAt: {
  //       type: Date,
  //       default: Date.now,
  //       get: (timestamp) => dateFormat(timestamp),
  //     },
  //   },
  // ],
});

const Tournament = model('Tournament', tournamentSchema);

module.exports = Tournament;