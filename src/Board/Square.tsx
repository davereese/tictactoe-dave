import './Square.scss';

import X from '../assets/X.svg';
import O from '../assets/O.svg';

interface SquareInterface {
  value: string | null;
  onSquareClick: () => void;
}

function Square({value, onSquareClick}: SquareInterface) {


  return (
    <button className="square" onClick={onSquareClick}>
      {!!value && <img src={value === "X" ? X : O} alt={value} />}
    </button>
  )
}

export default Square
