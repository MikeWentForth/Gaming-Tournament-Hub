import React from 'react';
import { Link } from 'react-router-dom';

function TournamentResult({ tournamentName, game, onViewClick }) {
  return (
    <div className="tournament-result">
      <h3>{tournamentName}</h3>
      <p>Game: {game}</p>
      {/* <Link to={`tournaments/${id}`}><button onClick={onViewClick}>View</button></Link> */}
    </div>
  );
}

export default TournamentResult;