import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
      const x = event.clientX
      const y = event.clientY
      drawChromeBoiAtCoords(x, y);
  }

  handleKey = (event) => {
    if (event.key === 'a') {
      resize('+');
    }
    else if (event.key === 's') {
      resize('-');
    }
  }


  render() {
    return (
      <canvas
      onClick={toggleCycling}
      onKeyDown={this.handleKey}
      onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
