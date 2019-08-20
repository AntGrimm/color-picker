import React, { Component } from 'react'

class Slider extends Component {
  render() {
    return (
      <main>
        <section className="hue-slider">
          <input
            type="range"
            min="0"
            max="360"
            onChange={this.props.saveUserInputHue}
            value={this.props.hue}
          />
          {this.props.hue}
        </section>
      </main>
    )
  }
}

export default Slider
