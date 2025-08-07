import { useState } from "react"

import BoardHeader from "./BoardHeader"
import Score from "./Score"
import Square from "./Square"
import Winner from "./Winner"

import "./Board.scss"

function Board() {
  const [moves, setMoves] = useState<(string|null)[]>(() => Array(9).fill(null));
  const [currentMove, setCurrentMove] = useState(0);
  const [winner, setWinner] = useState<string|null>(() => "");

  const xIsNext = currentMove % 2 === 0;

  function handleReset() {
    setMoves(Array(9).fill(null));
    setCurrentMove(0);
    setWinner("");
  }

  function handleClick(index: number) {
    if (winner) return;
    if (moves[index]) return;

    const nextMove = moves.slice();

    if (xIsNext) {
      nextMove[index] = "X";
    } else {
      nextMove[index] = "O";
    }

    setMoves(nextMove);
    setCurrentMove(currentMove + 1);

    const winnerChar = calculateWinner(nextMove);
    if (winnerChar) {
      setWinner(winnerChar);
    } else if (currentMove === 8) {
      setWinner("T");
    }
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
    <>
      <div className="container">
        <BoardHeader xIsNext={xIsNext} reset={() => handleReset()} />
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
      <Winner winner={winner} onNextClick={() => handleReset()}/>
    </>
  )
}

export default Board
