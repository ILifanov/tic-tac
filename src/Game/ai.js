

export default function aiMove(squares, currentMove, mode){
let move = null;
let urgent = false;
let suggestion = null;
console.log('currentMove:' + currentMove);
if ((mode == "singleDie") && (currentMove <3)) [urgent, suggestion] = scriptMove(squares, currentMove)
if (urgent) {move = suggestion}
if ((move) || (move == 0)) return move;

   move = checkRows(squares, "O")
   if ((move) || (move == 0)) return move;
   move = checkColumns(squares, "O")
   if ((move) || (move == 0)) return move;

   move = checkDiagonals(squares, "O")
   if ((move) || (move == 0)) return move;

   move = checkRows(squares, "X")
   if ((move) || (move == 0)) return move;
   move = checkColumns(squares, "X")
   if ((move) || (move == 0)) return move;
   move = checkDiagonals(squares, "X")
   if ((move) || (move == 0)) return move;

   
   move = suggestion;
   if ((move) || (move == 0)) return move;
   move = randomMove(squares)
   if ((move) || (move == 0)) return move;

   
}

function randomMove(squares)
{   const _=require('lodash');
    let listOfEmpty = squares.map((square, i) => square === null? i : -1).filter(index => index !== -1);
    const answer = _.sample(listOfEmpty);
    return(answer);}


function checkRows(squares, letter)
{   let counter = 0;
    let position = -1;
    for (let row = 0; row<=2; row++) {
    for (let col = 0; col<=2; col++) {
        if (squares[col+row*3]===null) position=col+row*3;
    if (squares[col+row*3]===letter) {
        counter++;
    }
    if (counter===2 && position >= 0) {
        return(position)}
    }
    counter = 0;
    position = -1;
}
}

function checkColumns(squares, letter)
{   let counter = 0;
    let position = -1;
    for (let col = 0; col<=2; col++) {
    for (let row = 0; row<=2; row++)
    {
        if (squares[col+row*3]===null) position=col+row*3;
    if (squares[col+row*3]===letter) {
        counter++;
    }
    if (counter===2 && position >=0) {
        return(position)}
    }
    counter = 0;
    position = -1;
}

}

function checkDiagonals(squares, letter)
{   //Straight diagonal
    let counter = 0;
    let position = -1;
    for (let cell = 0; cell<=8; cell = cell + 4) {
        if (squares[cell]===null) position=cell;
    if (squares[cell]===letter) counter++;

    }
    if (counter===2 && position >= 0) {
        return(position)}

    //Back diagonal
    counter = 0;
    position = -1;
    for (let cell = 2; cell<=6; cell = cell + 2) {

        if (squares[cell]===null) position=cell;
        if (squares[cell]===letter)   counter++;

    }
    if (counter===2 && position >= 0) {
        return(position)}

}

function scriptMove(squares, currentMove) {
    const _=require('lodash')
    //If centre is clear:
    
    if (!squares[4]) return [true, 4]
    if (currentMove == 1) return [true, _.sample([0, 2, 6, 8])]

    if ((currentMove == 2) && (squares[4] == "X")) return [false, _.sample([0, 2, 6, 8].filter(index => squares[index] == null))]
    if ((currentMove == 2) && (squares[1] == "X") && (squares[3] == "X") && !squares[0]) return [false, 0]
    if ((currentMove == 2) && (squares[1] == "X") && (squares[5] == "X") && !squares[2]) return [false, 2]
    if ((currentMove == 2) && (squares[3] == "X") && (squares[7] == "X") && !squares[6]) return [false, 6]
    if ((currentMove == 2) && (squares[5] == "X") && (squares[7] == "X") && !squares[8]) return [false, 8]
    let listOfEmpty = [1, 3, 5, 7].filter(index => squares[index] == null);
    return [false, _.sample(listOfEmpty)];
    
}