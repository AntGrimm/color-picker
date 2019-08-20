import React, { Component } from 'react'
import ColorPicker from './components/ColorPicker'

class App extends Component {
  render() {
    console.log('rendering')
    return (
      <main>
        <h1>HSL Color Picker</h1>
        <ColorPicker />
      </main>
    )
  }
}

export default App
