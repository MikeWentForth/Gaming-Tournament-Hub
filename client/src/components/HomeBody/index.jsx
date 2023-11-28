import { Link } from 'react-router-dom';
import './index.css'
import TournamentResult from '../TournamentInfo';

function HomeBody() {

    const upcomingTournaments = [
        { tournamentName: 'Tournament 1', game: 'Game 1' },
        { tournamentName: 'Tournament 2', game: 'Game 2' },
        { tournamentName: 'Tournament 3', game: 'Game 3' },
    ];

    return (
        <div className='home-body'>
            <div className='body-modal'>
                <h1>TOURNAMENT HUB</h1>
                <div className='home-buttons'>
                    <Link to="/host">
                        <button id='Host-BTN'>Host</button>
                    </Link>
                    <Link to="/join">
                        <button id='Join-BTN'>Join</button>
                    </Link>

                </div>
            </div>

            <div className='upcoming-events-modal'>
                <h1>Upcoming Events:</h1>
            </div>

            <div className='upcoming-tournaments'>
                {upcomingTournaments.map((tournament, index) => (
                    <TournamentResult
                        key={index}
                        tournamentName={tournament.tournamentName}
                        game={tournament.game}
                        onViewClick={() => {
                            // Add your logic for handling view click if needed
                            console.log(`Clicked on ${tournament.tournamentName}`);
                        }}
                    />
                ))}
            </div>

        </div>)

}

export default HomeBody;