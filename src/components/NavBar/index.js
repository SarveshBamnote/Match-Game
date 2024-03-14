import './index.css'

const NavBar = props => {
  const {score, timer} = props

  return (
    <ul className="header">
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="app-logo"
        />
      </li>
      <li className="score-and-timer">
        <div className="header-score-section">
          <p className="score">Score:</p>
          <p className="span">{score}</p>
        </div>
        <div className="timer-logo-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-logo"
          />
          <p className="span">{timer} sec</p>
        </div>
      </li>
    </ul>
  )
}

export default NavBar
