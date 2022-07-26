import React, { Component } from "react"
import Case from "./Case"

class Grille extends Component {
  constructor() {
    super()

    this.state = {
      arrayGridX: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      arrayGridY: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    }
  }

  boatRender = (x, y) => {}

  render() {
    return (
      <div>
        {this.state.arrayGridX.map((x) => {
          return (
            <div className="d-flex">
              {this.state.arrayGridY.map((y) => {
                return <div className={`square`}></div>
              })}
            </div>
          )
        })}
      </div>
    )
  }
}
export default Grille
