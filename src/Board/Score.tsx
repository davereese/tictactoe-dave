import { useEffect, useState } from "react";
import "./Score.scss"

interface ScoreProps {
  winner: string | null;
}

function Score({winner}: ScoreProps) {
  const [score, setScores] = useState<Record<string, number>>(
    () => JSON.parse(window.localStorage.getItem("scores") || JSON.stringify({x: 0, o: 0, t: 0}))
  );
  
  useEffect(() => {
    switch (winner) {
      case "X":
        score.x = score.x + 1;
        break;
      case "O":
        score.o = score.o + 1;
        break;
      case 'T':
         score.t = score.t + 1;
        break;
    }

    setScores(score);
    window.localStorage.setItem("scores", JSON.stringify(score))
  }, [winner, score]);

  return (
    <div className="scoreBoard">
      <div className="xScore">
        <h2 className="header">X (P1)</h2>
        <p className="score">{score.x}</p>
      </div>
      <div className="ties">
        <h2 className="header">TIES</h2>
        <p className="score">{score.t}</p>
      </div>
      <div className="oScore">
        <h2 className="header">O (P2)</h2>
        <p className="score">{score.o}</p>
      </div>
    </div>
  )
}

export default Score
