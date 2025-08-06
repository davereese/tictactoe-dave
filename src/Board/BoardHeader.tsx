import './BoardHeader.scss'

import logo from '../assets/logo.png';
import X from '../assets/smallX.svg';
import O from '../assets/smallO.svg';
import redo from '../assets/redo.svg';

interface Header {
  oIsNext: boolean;
  reset: () => void;
}

function BoardHeader({oIsNext, reset}: Header) {

  return (
    <div className="boardHeader">
      <img className="logo" src={logo} alt="XO" />
      <div className="status">
        <img src={oIsNext ? O : X} alt={oIsNext ? "0" : "X"} />
        <span>TURN</span>
      </div>
      <button className="reset" onClick={reset}><img src={redo} alt="Reset" /></button>
    </div>
  )
}

export default BoardHeader
