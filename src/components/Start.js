import React, { Component } from "react"
import "../style/start.css"



class Start extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Warship</h1>
        </header>
        <button id="start-game-button" className="green-button mx-auto" onClick={this.props.startStatus}>Start</button>
      </div>
    )
  }
}

export default Start
