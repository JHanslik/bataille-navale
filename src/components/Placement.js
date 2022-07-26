import React, { Component } from "react"
import PlacementGrid from "./PlacementGrid"
import "../App.css"

class Start extends Component {
  render() {
    return (
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <h2 className="text-white text-center m-4">Place your boats</h2>

        <div>
          <PlacementGrid />
        </div>
        <button
          id="placement-done-button"
          className="green-button m-3"
          onClick={this.props.placementDone}
        >
          GO
        </button>
      </div>
    )
  }
}

export default Start
