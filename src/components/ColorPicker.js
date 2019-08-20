import React, { Component } from 'react'

export class ColorPicker extends Component {
  state = {
    hue: 0,
    saturation: 0,
    lighting: 0
  }

  saveUserInputHue = event => {
    console.log(event.target.value)
    // track what the user drags on the slider
    this.setState({
      userInputHue: event.target.value,
      hue: event.target.value
    })
  }

  saveUserInputSaturation = event => {
    console.log(event.target.value)
    // track what the user drags on the slider
    this.setState({
      userInputSaturation: event.target.value,
      saturation: event.target.value
    })
  }

  saveUserInputLighting = event => {
    console.log(event.target.value)
    // track what the user drags on the slider
    this.setState({
      userInputLighting: event.target.value,
      lighting: event.target.value
    })
  }

  render() {
    return (
      <section className="hsl-slider">
        <section className="hue-slider">
          <input
            type="range"
            className="hue"
            min="0"
            max="360"
            onChange={this.saveUserInputHue}
            value={this.state.userInputHue}
          />
          {this.state.hue}
        </section>
        <section className="saturation-slider">
          <input
            type="range"
            className="saturation"
            min="0"
            max="100"
            onChange={this.saveUserInputSaturation}
            value={this.state.userInputSaturation}
          />
          {this.state.saturation}
          <section className="lighting-slider">
            <input
              type="range"
              className="lighting"
              min="0"
              max="100"
              onChange={this.saveUserInputLighting}
              value={this.state.userInputLighting}
            />
            {this.state.lighting}
          </section>
        </section>
      </section>
    )
  }
}

export default ColorPicker
