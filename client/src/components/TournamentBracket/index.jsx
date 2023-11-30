import "./index.css";
import { Link, useParams } from "react-router-dom";
import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_SINGLE_TOURNAMENT, QUERY_ME } from "../../utils/queries";
import { JOIN_TOURNAMENT } from "../../utils/mutations";

const TournamentBracket = () => {
  const { id } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_TOURNAMENT, {
    variables: { tournamentId: `${id}` },
  });

  const [joinTournament, { error }] = useMutation(JOIN_TOURNAMENT);

  const handleJoin = async () => {
    try {
      await joinTournament({
        variables: {
          tournamentId: `${id}`,
        },
      });
      window.location.reload(false);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const maxSize = data.tournament.playerSize;

  const players = data.tournamentPlayers;

  if (players.tournamentPlayers.includes())
  console.log(players.tournamentPlayers);

  const currentSize = players.tournamentPlayers.length;

  const remainingPlayers = maxSize - currentSize;

  return (
    <div className="tournament-info">
      <h1>{data.tournament.tournName}</h1>
      <h2>Game: {data.tournament.gameName}</h2>
      <h2>Host: {players.tournamentHost.username}</h2>
      <p>Start Date: {data.tournament.createdAt}</p>

      {data.tournament.full ? (
        <div>
          <p>Tournament Full</p>
        </div>
      ) : (
        <div>
          <p>
            {remainingPlayers} {remainingPlayers === 1 ? "player" : "players"}{" "}
            can still join
          </p>
          <button onClick={handleJoin}>Join Tournament</button>
        </div>
      )}
    </div>
  );
};

export default TournamentBracket;
