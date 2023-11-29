import "./index.css";
import React, { useState } from "react";
import TournamentResult from "../TournamentInfo";
import { useQuery } from "@apollo/client";
import { QUERY_TOURNAMENTS } from "../../utils/queries";

function JoinBody() {
  const [tournamentResults, setTournamentResults] = useState([]); // State to store search results

  const { loading, data } = useQuery(QUERY_TOURNAMENTS);
  // Dummy data for demonstration
  const handleSearch = () => {
    // Implement your search logic here
    // For demonstration, setting dummy results on search button click
    setTournamentResults(tournamentResults);
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="join-background">
      <div className="tournamentId-search">
        <input type="text" placeholder="Enter Tournament ID" />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="tournament-results">
        <div className='tournament-result'>
          <h3><u>Tournament</u></h3>
          <h3><u>Game</u></h3>
          <h3><u>Current Size</u></h3>
          <h3></h3>
          <h3></h3>
        </div>
        {data.tournaments.map((tournament) => (
          <li key={tournament._id} className="tournament-result">
            <TournamentResult
              tournamentId={tournament._id}
              tournamentName={tournament.tournName}
              game={tournament.gameName}
              onViewClick={() => {
                // Handle the view button click here, e.g., navigate to tournament info page
                console.log(`Viewing tournament: ${tournament.tournName}`);
              }}
            />
          </li>
        ))}
      </div>
    </div>
  );
}

export default JoinBody;
