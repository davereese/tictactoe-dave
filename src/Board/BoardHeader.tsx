import logo from "../assets/logo.png";
import X from "../assets/smallX.svg";
import O from "../assets/smallO.svg";
import redo from "../assets/redo.svg";

import "./BoardHeader.scss"

interface BoardHeaderProps {
  xIsNext: boolean;
  reset: () => void;
}

function BoardHeader({xIsNext, reset}: BoardHeaderProps) {

  return (
    <div className="boardHeader">
      <img className="logo" src={logo} alt="XO" />
      <div className="status">
        <img src={xIsNext ? X : O} alt={xIsNext ? "X" : "O"} />
        <span>TURN</span>
      </div>
      <button className="reset" onClick={reset}><img src={redo} alt="Reset" /></button>
    </div>
  )
}

export default BoardHeader
