import { useState } from "react";

import X from "../assets/X.svg";
import O from "../assets/O.svg";

import "./Winner.scss";

interface WinnerProps {
  winner: string | null;
  onNextClick: () => void;
}

function Square({winner, onNextClick}: WinnerProps) {
  const [status, setStatus] = useState("");
  const tie = winner === "T";
  const xWin = winner === "X";

  function handleNexRoundClick() {
    setStatus("leaving");
    setTimeout(() => {
      setStatus("");
      onNextClick();
    }, 500)
  }

  if (winner) {
    return (
      <>
        <div className={`winner ${status}`}>
          <div className="content">
            {!tie && <p className="subhead">Player {xWin ? "1" : "2"} wins!</p>}
            <h1 className={`head ${xWin ? "xWin" : tie ? "" : "oWin"}`}>
              {tie
                ? "Round Tied"
                : <><img src={xWin ? X : O} /> Takes the round</>}
            </h1>
            <button className="next" onClick={handleNexRoundClick}>Next Round</button>
          </div>
        </div>
        <div className={`winnerBG ${status}`} />
      </>
    )
  } else {
    return null;
  }
}

export default Square
