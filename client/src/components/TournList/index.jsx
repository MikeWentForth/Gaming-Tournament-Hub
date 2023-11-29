/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import { REMOVE_TOURNAMENT } from "../../utils/mutations";

import "./index.css";

const TournList = ({ hostedTournaments }) => {
  const [removeTournament, { error }] = useMutation(REMOVE_TOURNAMENT, {
    refetchQueries: [QUERY_ME, "me"],
  });

  const handleRemoveTournament = async (id) => {
    try {
      const { data } = await removeTournament({
        variables: { tournamentId: id },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!hostedTournaments.length) {
    return <h3>No Tournaments Yet</h3>;
  }

  return (
    <div>
      <h2 className="title">Tournaments Hosting:</h2>
      {hostedTournaments &&
        hostedTournaments.map((tournament) => (
          <div key={tournament._id} className="card mb-3">
            <div className="card-header header bg-primary text-light p-2 m-0">
              <span style={{ fontSize: "1rem" }}>{tournament.createdAt}</span>
              <button
                type="button"
                className="delete"
                onClick={() => handleRemoveTournament(tournament._id)}
              >
                X
              </button>
            </div>
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
