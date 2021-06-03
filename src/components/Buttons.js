import React from 'react'
import { reveal } from '../components/helpers'
import pokeballPNG from '../assets/pokeball.png'

export default class Buttons extends React.Component {
  render() {
    const handleFunctionPoints = this.props.handler
    return (
      <div className="opt">
        <button
          className="opt_btn right buttonZero"
          key="0"
          onClick={(e) => {
            e.preventDefault()
            reveal()
            handleFunctionPoints()
          }}
        >
          <img className="pokeballImg" alt="pokeball" src={pokeballPNG}></img>
          {this.props.pokemonsToButtons[0]}
          <img className="pokeballImg" alt="pokeball" src={pokeballPNG}></img>
        </button>
        <button
          className="opt_btn buttonOne"
          key="1"
          onClick={(e) => {
            e.preventDefault()
            reveal()
          }}
        >
          <span className="ex">X</span>
          {this.props.pokemonsToButtons[1]}
          <span className="ex">X</span>
        </button>
        <button
          className="opt_btn buttonTwo"
          key="2"
          onClick={(e) => {
            e.preventDefault()
            reveal()
          }}
        >
          <span className="ex">X</span>
          {this.props.pokemonsToButtons[2]}
          <span className="ex">X</span>
        </button>
      </div>
    )
  }
}
