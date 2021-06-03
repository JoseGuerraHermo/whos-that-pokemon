import React from 'react'
import pokeballImg from '../assets/pokeball.png'

function reveal() {
  const siluet = document.querySelector('.pokearea_img')
  const questionM = document.querySelector('.pokearea_q')
  const wrongAns = document.querySelectorAll('.ex')
  const pokeballs = document.querySelectorAll('.pokeballImg')

  questionM.innerHTML = ''
  siluet.style.webkitFilter = 'grayscale(0)'
  wrongAns.forEach((x) => (x.style.display = 'block'))
  pokeballs.forEach((pkb) => (pkb.style.display = 'block'))
}

export default class Options extends React.Component {
  buttons() {
    let wrongButtonOne = (
      <button className="opt_btn" key="1" onClick={reveal}>
        <span className="ex">X</span>
        {this.props.wrong[0]}
        <span className="ex">X</span>
      </button>
    )
    let wrongButtonTwo = (
      <button className="opt_btn" key="2" onClick={reveal}>
        <span className="ex">X</span>
        {this.props.wrong[1]}
        <span className="ex">X</span>
      </button>
    )
    let rightButton = (
      <button className="opt_btn right" key="3" onClick={reveal}>
        <img className="pokeballImg" alt="pokeball" src={pokeballImg}></img>
        {this.props.winner}
        <img className="pokeballImg" alt="pokeball" src={pokeballImg}></img>
      </button>
    )

    // The de-facto unbiased shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle.
    // See https://github.com/coolaj86/knuth-shuffle
    function shuffle(array) {
      let currentIndex = array.length,
        temporaryValue,
        randomIndex

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // And swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }

      return array
    }

    // Used like so
    let arr = [wrongButtonOne, rightButton, wrongButtonTwo]

    return shuffle(arr)
  }
  render() {
    return <div className="opt">{this.buttons()}</div>
  }
}
