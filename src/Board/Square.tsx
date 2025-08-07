import X from "../assets/X.svg";
import O from "../assets/O.svg";

import "./Square.scss";

interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

function Square({value, onSquareClick}: SquareProps) {


  return (
    <button className="square" onClick={onSquareClick}>
      {!!value && <img src={value === "X" ? X : O} alt={value} />}
    </button>
  )
}

export default Square
