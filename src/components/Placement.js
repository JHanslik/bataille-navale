import React, { Component } from "react"
import Grille from "./Grille"
import "../App.css"



class Start extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Place your boats</h1>
        </header>
        <button id="rotate-button" className="mx-auto">Rotate</button>
        <div className="container"><Grille/></div>
        <button id="placement-done-button" className="green-button" onClick={this.props.placementDone}>GO</button>
      </div>
    )
  }
}

export default Start