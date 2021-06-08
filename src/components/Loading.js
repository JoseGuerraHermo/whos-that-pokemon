import React from 'react'
import GHlogo from '../assets/gh.svg'
import { loadingScreen } from './helpers'

export default class Loading extends React.Component {
  render() {
    return (
      <div className="Loading">
        <div className="Loading_card">
          <p className="Loading_card-p">Welcome to:</p>
          <p className="Loading_card-p">"Who's that Pokemon"</p>
          <p className="Loading_card-p">
            If you like it, here's the GitHub repo:
          </p>
          <div className="Loading_card-link">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/JoseGuerraHermo/whos-that-pokemon"
            >
              <img
                className="Loading_card-link-img"
                alt="github logo"
                src={GHlogo}
              ></img>
            </a>
          </div>
          <button className="Loading_card-button" onClick={loadingScreen}>
            Play!
          </button>
        </div>
      </div>
    )
  }
}
