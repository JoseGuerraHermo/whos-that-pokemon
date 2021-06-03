import React from 'react'
import ImgArea from './components/ImgArea'
import Tittle from './components/Tittle'
import Buttons from './components/Buttons'
import pokeballPNG from './assets/pokeball.png'
import {
  hide,
  RandomNumb,
  randomOrder,
  animationPoints,
  loadingImg,
} from './components/helpers'

class PokeApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: [],
      number: '',
      points: 0,
    }
    this.pointUp = this.pointUp.bind(this)
  }

  async passPokename() {
    let numberFromFunction = RandomNumb()
    let pokemonList = []
    for (let eachPoke of numberFromFunction) {
      try {
        const getData = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${eachPoke}`,
        )
        const name = await getData.json()
        pokemonList.push(name.name)
      } catch (err) {
        console.log(err)
        this.clickToPLay()
      }
    }
    this.setState({
      pokemon: pokemonList,
      number: numberFromFunction[0],
    })
  }
  pointUp() {
    animationPoints()
    this.setState({
      points: this.state.points + 1,
    })
  }

  clickToPLay() {
    this.passPokename()
    randomOrder()
    loadingImg()
  }
  componentDidMount() {
    this.passPokename()
    randomOrder()
    loadingImg()
  }
  render() {
    return (
      <div className="game">
        {/* points board */}
        <div className="board">
          <div className="board_points">
            <img
              className="board_points-pokeball"
              alt="pokeball"
              src={pokeballPNG}
            ></img>
            <div className="board_points-score">{this.state.points}</div>
          </div>
          <div className="board_buttonContainer">
            <button
              className="board_buttonContainer-button"
              onClick={(e) => {
                e.preventDefault()
                this.clickToPLay()
                hide()
              }}
            >
              Next
            </button>
          </div>
        </div>
        <ImgArea number={this.state.number} />
        <Tittle />
        <Buttons
          pokemonsToButtons={this.state.pokemon}
          handler={this.pointUp}
        />
      </div>
    )
  }
}
export default PokeApp

// https://pokeapi.co
// https://pokeres.bastionbot.org/api
