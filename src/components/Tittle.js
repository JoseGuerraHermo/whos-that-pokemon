import React from 'react'
import banner from '../assets/pokeBanner.png'

export default class Tittle extends React.Component {
  render() {
    return (
      <div className="tittle">
        Who's that{' '}
        <img
          className="tittle_banner"
          src={banner}
          alt="pokeBanner"
          // onClick={}
        ></img>
        <span className="tittle_q">?</span>
      </div>
    )
  }
}
