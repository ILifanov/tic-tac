
import React from 'react';
import {useState} from 'react';


export function Board({ xIsNext, squares, onPlay, calculateWinner}) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

const winnerLine = calculateWinner(squares);
let winner = null;
let squareColors = Array(9).fill("white");
if (winnerLine) 
{winner = squares[winnerLine[0]]
 winnerLine.forEach((square) => squareColors[square] = 'grey')};

    let status;
    if (winner) {status = "Winner: " + winner + "       ";} 
    else {{status = "Next player: " + (xIsNext?"X":"O")}}
    if (squares.find((square) => {return (square === null)}) === undefined) {status = 'Draw'}
  return (
    <div className='gameHeader'>
      <div>
    <h1> <i>{status}</i></h1>
      </div>
      <div>
    <table className='gameBoard'>
    <tr>
    <Square value={squares[0]} squareColor={squareColors[0]} onSquareClick={() => handleClick(0)}/>
    <Square value={squares[1]} squareColor={squareColors[1]} onSquareClick={() => handleClick(1)}/>
    <Square value={squares[2]} squareColor={squareColors[2]} onSquareClick={() => handleClick(2)}/>
    </tr>
    <tr>
    <Square value={squares[3]} squareColor={squareColors[3]} onSquareClick={() => handleClick(3)}/>
    <Square value={squares[4]} squareColor={squareColors[4]} onSquareClick={() => handleClick(4)}/>
    <Square value={squares[5]} squareColor={squareColors[5]} onSquareClick={() => handleClick(5)}/>
    </tr>
    <tr>
    <Square value={squares[6]} squareColor={squareColors[6]} onSquareClick={() => handleClick(6)}/>
    <Square value={squares[7]} squareColor={squareColors[7]} onSquareClick={() => handleClick(7)}/>
    <Square value={squares[8]} squareColor={squareColors[8]} onSquareClick={() => handleClick(8)}/>
    </tr>
    </table>
    </div>
    </div>
  )
}

function Square({value, squareColor, onSquareClick}) {
   return <button className = "square" style={{ background: squareColor }} onClick = {onSquareClick}>{value}</button>
}

export default Board;




