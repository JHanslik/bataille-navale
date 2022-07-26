import React, { Component } from "react"
import "../App.css"

class Start extends Component {
  render() {
    return (
      <div>
        <button
          id="start-game-button"
          className="green-button mx-auto"
          onClick={this.props.startStatus}
        >
          Start
        </button>
      </div>
    )
  }
}

export default Start
