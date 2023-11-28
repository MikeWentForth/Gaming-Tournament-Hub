const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const tournamentSchema = new Schema({
  tournName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  gameName: {
    type: String,
    required: true
  },
  playerSize: {
    type: Number,
    required: true,
  },
  join: {
    type: Boolean,
    default: true
  },
  full: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});
const Tournament = model("Tournament", tournamentSchema);

module.exports = Tournament;
