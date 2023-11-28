import React from 'react';

function TournamentResult({ tournamentName, game, onViewClick }) {
  return (
    <div className="tournament-result">
      <h3>{tournamentName}</h3>
      <p>Game: {game}</p>
      <button onClick={onViewClick}>View</button>
    </div>
  );
}

export default TournamentResult;