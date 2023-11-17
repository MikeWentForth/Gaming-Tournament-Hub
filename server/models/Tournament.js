const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/auth');

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
});


module.exports = tournamentSchema;