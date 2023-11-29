import "./index.css";
import { Link, useParams} from "react-router-dom";
import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_TOURNAMENT, QUERY_TOURNAMENT_PLAYERS } from "../../utils/queries";

const TournamentBracket = () => {
  const {id} = useParams();
  
  const { loading, data: data } = useQuery(QUERY_SINGLE_TOURNAMENT, {
    variables: { tournamentId: `${id}` }
  });

  const players = useQuery(QUERY_TOURNAMENT_PLAYERS, {
    variables: { tournamentId: `${id}` }
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  

  return (
    <div className="tournament-info">
      <h1>{data.tournament.tournName}</h1>
      <h2>Game: {data.tournament.gameName}</h2>
      <p>Start Date: {data.tournament.createdAt}</p>

      {data.tournament.full ? (
        <div>
          <p>Tournament Full</p>
        </div>
      ) : (
        <div>
          {/* <p>{remainingPlayers} {remainingPlayers === 1 ? 'player' : 'players'} can still join</p> */}
          <button>Join Tournament</button>
        </div>
      )}

    </div>
  );
};

export default TournamentBracket;
