import React, { Component } from 'react'
import Slider from './Slider'

export class ColorPicker extends Component {
  state = {
    hue: Math.ceil(Math.random() * 360),
    saturation: Math.ceil(Math.random() * 100),
    lighting: Math.ceil(Math.random() * 100)
  }

  saveUserInputHue = event => {
    console.log(event.target.value)
    // track what the user drags on the slider
    this.setState({
      hue: event.target.value
    })
  }

  saveUserInputSaturation = event => {
    console.log(event.target.value)
    // track what the user drags on the slider
    this.setState({
      saturation: event.target.value
    })
  }

  saveUserInputLighting = event => {
    console.log(event.target.value)
    // track what the user drags on the slider
    this.setState({
      lighting: event.target.value
    })
  }

  updateRandomColor = () => {
    this.setState({
      hue: Math.ceil(Math.random() * 360),
      saturation: Math.ceil(Math.random() * 100),
      lighting: Math.ceil(Math.random() * 100)
    })
  }

  render() {
    return (
      <main>
        <h1>Choose a color!</h1>
        <section className="hsl-slider">
          <Slider
            hue={this.state.hue}
            saveUserInputHue={this.saveUserInputHue}
          />
          <section className="saturation-slider">
            <input
              type="range"
              className="saturation"
              min="0"
              max="100"
              onChange={this.saveUserInputSaturation}
              value={this.state.saturation}
            />
            {this.state.saturation}
          </section>

          <section className="lighting-slider">
            <input
              type="range"
              className="lighting"
              min="0"
              max="100"
              onChange={this.saveUserInputLighting}
              value={this.state.lighting}
            />
            {this.state.lighting}
          </section>
        </section>

        <button className="random-color" onClick={this.updateRandomColor}>
          Random Color
        </button>

        <div className="display-color-box">
          HSL: {this.state.hue}, {this.state.saturation}%, {this.state.lighting}
          %
          <p
            style={{
              backgroundColor: `hsl(${this.state.hue}, ${
                this.state.saturation
              }%, ${this.state.lighting}%)`,
              height: 50,
              width: 50
            }}
          />
        </div>
      </main>
    )
  }
}

export default ColorPicker
