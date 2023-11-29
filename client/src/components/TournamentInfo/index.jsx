/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './index.css'

function TournamentResult({tournamentId, tournamentName, game, onViewClick }) {
  console.log(`THis is the KEY::: ${tournamentId}`);
  return (
    <div className='tournament-result'>
      <h3>{tournamentName}</h3>
      <p>Game: {game}</p>
      <Link to={`/tournaments/${tournamentId}`}><button onClick={onViewClick}>View</button></Link>
    </div>
  );
}

export default TournamentResult;