import React, { Component } from 'react'
import ColorPicker from './components/ColorPicker'

class App extends Component {
  render() {
    console.log('rendering')
    return (
      <main>
        <ColorPicker />
      </main>
    )
  }
}

export default App
