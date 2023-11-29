/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./index.css";

import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_TOURNAMENT } from "../../utils/queries";

function TournamentResult({ tournamentId, tournamentName, game, onViewClick }) {
  const { loading, data } = useQuery(QUERY_SINGLE_TOURNAMENT, {
    variables: { tournamentId },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const maxSize = data.tournament.playerSize;

  const players = data.tournamentPlayers;

  const currentSize = players.tournamentPlayers.length;

  const remainingPlayers = maxSize - currentSize;

  // console.log(`THis is the KEY::: ${tournamentId}`);
  return (
    <div className="tournament-result">
      <p>{tournamentName}</p>
      <p>{game}</p>
      <p>
        {remainingPlayers} / {maxSize}
      </p>
      <Link to={`/tournaments/${tournamentId}`}>
        <button onClick={onViewClick}>View</button>
      </Link>
    </div>
  );
}

export default TournamentResult;
