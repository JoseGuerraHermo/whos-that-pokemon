import React from 'react'

export default class ImgArea extends React.Component {
  Pokepic() {
    return (
      <div className="">
        <p className="pokearea_q">?</p>
        <img
          className="pokearea_img siluet"
          src={`https://pokeres.bastionbot.org/images/pokemon/${this.props.number}.png`}
          alt="pokemon"
        ></img>
      </div>
    )
  }
  render() {
    return <div className="pokearea">{this.Pokepic()}</div>
  }
}
