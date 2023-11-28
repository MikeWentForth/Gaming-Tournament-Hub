import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import './index.css'

function HostBody() {
    const [tournamentName, setTournamentName] = useState('');

    const handleTournamentNameChange = (e) => {
        setTournamentName(e.target.value);
    };

    const [suggestionsVisible, setSuggestionsVisible] = useState(false) // suggestions visible or not
    const [sliderValue, setSliderValue] = useState(4); // Initial value of the slider

    const handleSliderChange = (e) => {
        const value = parseInt(e.target.value);
        setSliderValue(value);
    };

    const [searchValue, setSearchValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const games = ['Valorant', 'Rocket League', 'League of Legends', 'Mortal Combat'];

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);

        const filteredGames = games.filter((game) =>
            game.toLowerCase().includes(value.toLowerCase())
        );

        setSuggestions(value ? filteredGames : []);
        setSuggestionsVisible(value ? true : false);
    };

    const handleSuggestionClick = (game) => {
        setSearchValue(game);
        setSuggestions([]);
        setSuggestionsVisible(false);
    };

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (inputRef.current && !inputRef.current.contains(e.target)) {
                setSuggestions([]);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);
    return (
        <div className='host-background'>
            <div className='searchBar'>
                <input
                    type='text'
                    placeholder='Search for a game...'
                    value={searchValue}
                    onChange={handleSearchChange}
                />
                {suggestions.length > 0 && (
                    <ul className='suggestions'>
                        {suggestions.map((game, index) => (
                            <li key={index} onClick={() => handleSuggestionClick(game)}>
                                {game}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className={`tournament-size-slider ${suggestionsVisible ? 'suggestions-visible' : ''}`}>
                <h2>Tournament Size Slider</h2>
                <input
                    type="range"
                    min="4"
                    max="16"
                    value={sliderValue}
                    onChange={handleSliderChange}
                />
                <p>Number of Players: {sliderValue}</p>
            </div>
            <div className='tournament-name'>
                <input 
                    type="text"
                    placeholder='Enter tournament name...'
                    value={tournamentName}
                    onChange={handleTournamentNameChange} 
                />
            </div>
            <div className='generate-tournament-btn'>
                <button>Generate Tournament</button>
            </div>
        </div>
    )
}

export default HostBody;