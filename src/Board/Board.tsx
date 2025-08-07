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
  const [winningMoves, setWinningMoves] = useState<number[]>(() => []);

  const xIsNext = currentMove % 2 === 0;

  function handleReset() {
    setMoves(Array(9).fill(null));
    setCurrentMove(0);
    setWinner("");
    setWinningMoves([]);
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

    const [winnerChar, winnerIndexes] = calculateWinner(nextMove);
    if (winnerChar) {
      setWinner(winnerChar as string);
      setWinningMoves(winnerIndexes as number[]);
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
        return [squares[a], lines[i] as number[]];
      }
    }
    return [null, null];
  }

  return (
    <>
      <div className={`container ${winner}`}>
        <BoardHeader xIsNext={xIsNext} reset={() => handleReset()} />
        <div className="boardRow">
          <Square value={moves[0]} win={winningMoves.includes(0)} onSquareClick={() => handleClick(0)} />
          <Square value={moves[1]} win={winningMoves.includes(1)} onSquareClick={() => handleClick(1)} />
          <Square value={moves[2]} win={winningMoves.includes(2)} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="boardRow">
          <Square value={moves[3]} win={winningMoves.includes(3)} onSquareClick={() => handleClick(3)} />
          <Square value={moves[4]} win={winningMoves.includes(4)} onSquareClick={() => handleClick(4)} />
          <Square value={moves[5]} win={winningMoves.includes(5)} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="boardRow">
          <Square value={moves[6]} win={winningMoves.includes(6)} onSquareClick={() => handleClick(6)} />
          <Square value={moves[7]} win={winningMoves.includes(7)} onSquareClick={() => handleClick(7)} />
          <Square value={moves[8]} win={winningMoves.includes(8)} onSquareClick={() => handleClick(8)} />
        </div>
        <Score />
      </div>
      <Winner winner={winner} onNextClick={() => handleReset()}/>
    </>
  )
}

export default Board
