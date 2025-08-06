import './Score.scss'

function Score() {


  return (
    <div className="scoreBoard">
      <div className="xScore">
        <h2 className="header">X (P1)</h2>
        <p className="score">0</p>
      </div>
      <div className="ties">
        <h2 className="header">TIES</h2>
        <p className="score">0</p>
      </div>
      <div className="oScore">
        <h2 className="header">O (P2)</h2>
        <p className="score">0</p>
      </div>
    </div>
  )
}

export default Score
