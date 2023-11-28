/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const TournList = ({ hostedTournaments }) => {
  if (!hostedTournaments.length) {
    return <h3>No Tournaments Yet</h3>;
  }

  return (
    <div>
      <h2 className="title">Tournaments Hosting:</h2>
      {hostedTournaments &&
        hostedTournaments.map((tournament) => (
          <div key={tournament._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              <span style={{ fontSize: "1rem" }}>{tournament.createdAt}</span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>
                <b>Tournament Name: </b>
                {tournament.tournName}
              </p>
              <p>
                <b>Game: </b>
                {tournament.gameName}
              </p>
              <p>
                <b>Player Size: </b>
                {tournament.playerSize}
              </p>
              <Link
                className="btn btn-primary btn-block btn-squared"
                to={`/tournaments/${tournament._id}`}
              >
                View more info
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TournList;
