import "./index.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const JoinTournament = () => {
    const [tournamentName, setTournamentName] = useState('');
  const [tournamentId, setTournamentId] = useState('');
  const [startDate, setStartDate] = useState('');
  return (
    <>
      {/* <div className="tournament-page">
      <div className="tournament-info">
        <h2>Tournament Information</h2>
        <input
          type="text"
          placeholder="Tournament Name"
          value={tournamentName}
          onChange={(e) => setTournamentName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tournament ID"
          value={tournamentId}
          onChange={(e) => setTournamentId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <button onClick={handleJoinClick}>Join</button>
      </div>
      <div className="tournament-bracket">
        <h2>Tournament Bracket</h2>
      </div>
    </div> */}
    </>
  );
};

export default JoinTournament;
