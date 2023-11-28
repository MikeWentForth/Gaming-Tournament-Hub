import './index.css'
import React, { useState } from 'react';
import TournamentResult from '../TournamentInfo';
import { useQuery } from '@apollo/client';
import { QUERY_TOURNAMENTS } from '../../utils/queries';

function JoinBody() {

    const [tournamentResults, setTournamentResults] = useState([]); // State to store search results

    const {loading,data} = useQuery(QUERY_TOURNAMENTS,)
    // Dummy data for demonstration
    const dummyResults = [
        { id: 1, tournamentName: 'Tournament 1', game: 'Valorant' },
        { id: 2, tournamentName: 'Tournament 2', game: 'League of Legends' },
        // Add more dummy data as needed
    ];
    console.log(data)

    const handleSearch = () => {
        // Implement your search logic here
        // For demonstration, setting dummy results on search button click
        setTournamentResults(dummyResults);
    };

    return (
        <div className="join-background">
            <div className='tournamentId-search'>
                <input
                    type="text"
                    placeholder='Enter Tournament ID'
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            <div className="tournament-results">
                {tournamentResults.map((result) => (
                    <TournamentResult
                        key={result.id}
                        tournamentName={result.tournamentName}
                        game={result.game}
                        onViewClick={() => {
                            // Handle the view button click here, e.g., navigate to tournament info page
                            console.log(`Viewing tournament: ${result.tournamentName}`);
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default JoinBody;