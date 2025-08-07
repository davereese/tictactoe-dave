import X from "../assets/X.svg";
import O from "../assets/O.svg";

import "./Square.scss";

interface SquareProps {
  value: string | null;
  win: boolean;
  onSquareClick: () => void;
}

function Square({value, win, onSquareClick}: SquareProps) {
  return (
    <button className={`square ${win ? "win" : ""}`} onClick={onSquareClick}>
      {!!value && <img src={value === "X" ? X : O} alt={value} />}
    </button>
  )
}

export default Square
