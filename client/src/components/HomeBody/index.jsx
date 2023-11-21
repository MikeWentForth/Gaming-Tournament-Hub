import './index.css'

function HomeBody () {
    return (
    <div className='home-body'>
        <div className='body-modal'>
            <h1>TOURNAMENT HUB</h1>
            <div className='home-buttons'>
                <button id='Host-BTN'>Host</button>
                <button id='Join-BTN'>Join</button>     
            </div>
        </div>

        <div className='upcoming-events-modal'>
            <h1>Upcoming Events:</h1>
        </div>

        <div className='upcoming-tournaments'>
            <p>this is where an upcoming tournaments component will go</p>
            <p>this is where an upcoming tournaments component will go</p>
            <p>this is where an upcoming tournaments component will go</p>
        </div>

    </div>)
   
}

export default HomeBody;