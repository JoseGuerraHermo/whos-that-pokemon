import React from 'react'

export default class ImgArea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imgErrorCount: 0,
    }
  }
  pictuteSuccess() {
    if (this.state.imgErrorCount > 0) {
      this.setState({
        imgErrorCount: 0,
      })
    }
  }
  pictureError() {
    if (this.setState.imgErrorCount > 5) {
      setTimeout(() => {
        const img = document.querySelector('.pokearea_img')
        img.src = `https://pokeres.bastionbot.org/images/pokemon/${this.props.number}.png`
        this.setState({
          imgErrorCount: this.state.imgErrorCount + 1,
        })
        console.log(this.state.imgErrorCount)
      }, 500)
    } else if (this.setState.imgErrorCount < 5) {
      console.log('fatal error')
    }
  }
  Pokepic() {
    return (
      <div className="">
        <p className="pokearea_q">?</p>
        <img
          className="pokearea_img siluet"
          src={`https://pokeres.bastionbot.org/images/pokemon/${
            this.props.number || 1
          }.png`}
          alt="pokemon"
          onLoad={this.pictuteSuccess()}
          onError={this.pictureError()}
        ></img>
      </div>
    )
  }
  render() {
    return <div className="pokearea">{this.Pokepic()}</div>
  }
}
