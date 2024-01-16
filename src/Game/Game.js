import Board from "./Board"
import React from 'react';
import {useState} from 'react';
import aiMove from './ai'

export default function Game({mode}) {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
      setXIsNext(!xIsNext);
      //Ai move
      if (!calculateWinner(nextSquares) && (mode === 'singleFun') || (mode === 'singleDie'))
      { nextSquares[aiMove(nextSquares, nextHistory.length - 1, mode)] = "O"; 
        setHistory([...nextHistory.slice(), nextSquares])
        setCurrentMove(nextHistory.length - 1);
        setXIsNext(true)
      }
    }
      function jumpTo(nextMove) {
        setCurrentMove(nextMove);
        setXIsNext(nextMove % 2 === 0);
        if ((mode === 'singleFun') || (mode === 'singleDie')) setXIsNext(true)
        console.log(mode)
        }
      
      const moves = history.slice(0, currentMove).map((square, move) => {
        let description;
        if (move > 0) {
          description = 'Go to move #' + move;
        } else {
          description = "Go to game start";
        }
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{description}</button>
          </li>
        )
      })
      return (
        <div className="game">
          <table>
          <tr>
          <div className="game-board">
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} mode = {mode} setX = {setXIsNext} calculateWinner= {calculateWinner} />
            </div>
            <div>
            <ol>{moves}</ol>
            </div>
            </tr>
            </table>
        </div>
    )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i];
    }
  }
  return null;
}