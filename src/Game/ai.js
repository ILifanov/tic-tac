

export default function aiMove(squares){
let move = null;
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
    for (let col = 0; col<=2; col++)
    {console.log('current loc: '+col+row*3)
        if (squares[col+row*3]===null) position=col+row*3;
    if (squares[col+row*3]===letter) {
        counter++;
        console.log('zero found!')
    }
    if (counter===2 && position >= 0) {
        console.log('position:' + position)
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
    {console.log('current loc: '+col+row*3)
        if (squares[col+row*3]===null) position=col+row*3;
    if (squares[col+row*3]===letter) {
        counter++;
        console.log('column found!')
    }
    if (counter===2 && position >=0) {
        console.log('position:' + position)
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
    console.log('current diagonal: '+ cell)
        if (squares[cell]===null) position=cell;
    if (squares[cell]===letter) counter++;

    }
    if (counter===2 && position >= 0) {
        return(position)}

    //Back diagonal
    counter = 0;
    position = -1;
    for (let cell = 2; cell<=6; cell = cell + 2) {
    console.log('current diagonal: '+ cell)
        if (squares[cell]===null) position=cell;
        if (squares[cell]===letter)   counter++;

    }
    if (counter===2 && position >= 0) {
        console.log('position:' + position)
        return(position)}

}
