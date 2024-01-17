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
      <h1> <i>Tic-tac-toe game </i></h1>
      <br/>
      <h3> <i>choose mode: </i></h3>
      <button className="menuButton" onClick={() => singlePlayerFunClick('fun')}>Single-player: fun</button>
      <button className="menuButton" onClick={() => singlePlayerDieClick('die-hard')}>Single-player: die-hard</button>
      <button className="menuButton" onClick={hotSeatClick}>Multiplayer: Hotseat</button>
      <br/>

      <p></p>
      <h3> <i>how to play:</i></h3>
      <div className = 'rules'>
      <details>

    <summary>RULES</summary>
    <div className = 'rulesText'>The game is played on a 3x3 grid. Two players take turns marking an empty cell with their assigned symbol (either "X" or "O").
The first player uses "X," and the second "O." Put your symbol on the empty cell. The player filling a full row, column or diagonal with their symbols wins.
 </div>
    </details>
    <p></p>
    <details>
    <summary>SINGLE-PLAYER: FUN</summary>
    <div className = 'rulesText'>A simple mode to play with computer, relax and practise
 </div>
    </details>
    <p></p>
    <details>
    <summary>SINGLE-PLAYER: DIE-HARD</summary>
    <div className = 'rulesText'>You think you can defeat the computer? Give it a try  =)
 </div>
    </details>
    <p></p>
    <details>
    <summary>MULTIPLAYER: HOTSEAT</summary>
    <div className = 'rulesText'>Want to play with a friend? No problems. Just invite them for a pint and have fun together. The game occurs in one browser window on one device
 </div>
    </details>
    <p></p>
    <details>
    <summary>AUTHOR</summary>
    <div className = 'rulesText'>Created by <i>Ivan Lifanov</i> based on react tic-tac-toe tutorial and dev passion
 </div>
    </details>
</div>
    </>
  );
}