/* eslint-disable no-unexpected-multiline */
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import "./index.css";

import { useMutation } from "@apollo/client";

import { ADD_TOURNAMENT } from "../../utils/mutations";
import { QUERY_TOURNAMENTS, QUERY_ME } from "../../utils/queries";

import Auth from "../../utils/auth";

function HostBody() {
  const navigate = useNavigate();
  const [tournamentName, setTournamentName] = useState("");

  // const [addTournament, { error }] = useMutation(ADD_TOURNAMENT, {
  //   refetchQueries: [QUERY_TOURNAMENTS, "tournaments", QUERY_ME, "me"],
  // });
  const [addTournament, { error }] = useMutation(ADD_TOURNAMENT, {
    refetchQueries: [QUERY_TOURNAMENTS, "tournaments", QUERY_ME, "me"],
    onCompleted: (data) => {
      // Assuming the response from the mutation contains the ID of the created tournament
      const tournamentId = data.addTournament._id;
      // Navigate to the generated tournament page
      navigate(`/tournaments/${tournamentId}`);
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addTournament({
        variables: {
          tournamentName,
          gameName: searchValue,
          playerSize: sliderValue,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleTournamentNameChange = (e) => {
    setTournamentName(e.target.value);
  };

  const [suggestionsVisible, setSuggestionsVisible] = useState(false); // suggestions visible or not
  const [sliderValue, setSliderValue] = useState(4); // Initial value of the slider

  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if ([4, 8, 16].includes(value)) {
      setSliderValue(value);
    }
  };

  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const games = [
    "Valorant",
    "Rocket League",
    "League of Legends",
    "Mortal Combat",
  ];

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

  return (
    <div className="host-background">
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search for a game..."
            value={searchValue}
            onChange={handleSearchChange}
          />
          {suggestions.length > 0 && (
            <ul className="suggestions">
              {suggestions.map((game, index) => (
                <li key={index} onClick={() => handleSuggestionClick(game)}>
                  {game}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div
          className={`tournament-size-slider ${
            suggestionsVisible ? "suggestions-visible" : ""
          }`}
        >
          <h2>Tournament Size Slider</h2>
          <input
            type="range"
            min="4"
            max="16"
            value={sliderValue}
            onChange={handleSliderChange}
            step="4"
            list="allowedValues"
          />
          <p>Number of Players: {sliderValue}</p>
        </div>
        <div className="tournament-name">
          <input
            type="text"
            placeholder="Enter tournament name..."
            value={tournamentName}
            onChange={handleTournamentNameChange}
          />
        </div>
        <div className="generate-tournament-btn">
          <button type="submit">Generate Tournament</button>
        </div>
      </form>
    </div>
  );
}

export default HostBody;
