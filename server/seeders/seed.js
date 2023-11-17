const db = require('../config/connection');
const { Player, Tournament } = require('../models');
const playersSeeds = require('./playersSeeds.json');
const tournamentSeeds = require('./tournamentSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Tournament', 'tournaments');

    await cleanDB('Player', 'Players');

    await Player.create(playersSeeds);

    for (let i = 0; i < tournamentSeeds.length; i++) {
      const { _id, tournamentHost } = await Tournament.create(tournamentSeeds[i]);
      const player = await Player.findOneAndUpdate(
        { username:  tournamentHost},
        {
          $addToSet: {
            tournaments: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
