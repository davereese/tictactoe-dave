import { useEffect, useState } from 'react'
import './Board.scss'

import BoardHeader from './BoardHeader'
import Score from './Score'
import Square from './Square'

function Board() {
  const [moves, setMoves] = useState<(string|null)[]>(() => Array(9).fill(null));
  const [currentMove, setCurrentMove] = useState(0);
  const [status, setStatus] = useState("");

  const oIsNext = currentMove % 2 === 0;
  const nextMove = moves.slice();


  function handleReset() {
    setMoves(Array(9).fill(null));
    setCurrentMove(0);
    setStatus("");
  }

  function handleClick(index: number) {
    if (status) return;
  
    // figure out if o is next
    if (oIsNext) {
      nextMove[index] = "O";
    } else {
      nextMove[index] = "X";
    }

      
    setMoves(nextMove);
    setCurrentMove(currentMove + 1);

    const winner = calculateWinner(nextMove);
    console.log(winner);
    if(winner) setStatus(winner);
  }

  function calculateWinner(squares: (string|null)[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div className="container">
      <BoardHeader oIsNext={oIsNext} reset={() => handleReset()} />
      <div className="boardRow">
        <Square value={moves[0]} onSquareClick={() => handleClick(0)} />
        <Square value={moves[1]} onSquareClick={() => handleClick(1)} />
        <Square value={moves[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="boardRow">
        <Square value={moves[3]} onSquareClick={() => handleClick(3)} />
        <Square value={moves[4]} onSquareClick={() => handleClick(4)} />
        <Square value={moves[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="boardRow">
        <Square value={moves[6]} onSquareClick={() => handleClick(6)} />
        <Square value={moves[7]} onSquareClick={() => handleClick(7)} />
        <Square value={moves[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <Score />
    </div>
  )
}

export default Board
