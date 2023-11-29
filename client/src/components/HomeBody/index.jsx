import { Link } from "react-router-dom";
import "./index.css";
import TournamentResult from "../TournamentInfo";
import { useQuery } from "@apollo/client";
import { QUERY_TOURNAMENTS } from "../../utils/queries";

function HomeBody() {
  const { loading, data } = useQuery(QUERY_TOURNAMENTS);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="home-body">
      <div className="body-modal">
        <h1>TOURNAMENT HUB</h1>
        <div className="home-buttons">
          <Link to="/host">
            <button id="Host-BTN">Host</button>
          </Link>
          <Link to="/join">
            <button id="Join-BTN">Join</button>
          </Link>
        </div>
      </div>

      <div className="upcoming-events-modal">
        <h1>Upcoming Events:</h1>
      </div>
      <div className='tournament-result'>
          <h3><u>Tournament</u></h3>
          <h3><u>Game</u></h3>
          <h3><u>Current Size</u></h3>
          <h3></h3>
          <h3></h3>
        </div>

      <ul className="upcoming-tournaments">
        {data.tournaments.map((tournament) => (
          <li key={tournament._id} className="tournament-result">
            <TournamentResult
              tournamentId={tournament._id}
              tournamentName={tournament.tournName}
              game={tournament.gameName}
              onViewClick={() => {
                // Add your logic for handling view click if needed
                console.log(`Clicked on ${tournament.tournName}`);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeBody;
