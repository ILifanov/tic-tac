// Menu.js
import React from 'react';

export default function Menu({ setGameMode }) {
  const singlePlayerFunClick = () => {
    setGameMode('singleFun');
  };
  const singlePlayerDieClick = () => {
    setGameMode('singleDie')
  };

  const hotSeatClick = () => {
    setGameMode('hotSeat');
  };


  return (
    <>
      <h1>Tic-tac-toe game</h1>
      <br/>
      <h2>Choose mode:</h2>
      <button className="menuButton" onClick={() => singlePlayerFunClick('fun')}>Single-player: fun</button>
      <button className="menuButton" onClick={() => singlePlayerDieClick('die-hard')}>Single-player: die-hard</button>
      <button className="menuButton" onClick={hotSeatClick}>Multiplayer: Hotseat</button>
      <br/>
      <h2>How to play</h2>
    </>
  );
}