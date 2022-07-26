import React, { Component } from "react"
import lodash from "lodash"

class Grille extends Component {
  constructor() {
    super()

    this.state = {
      arrayGridX: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      arrayGridY: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
      patrolBoat: [
        [1, "A"],
        [2, "A"],
      ],
      submarine: [
        [3, "B"],
        [3, "C"],
        [3, "D"],
      ],
      destroyer: [
        [5, "F"],
        [6, "F"],
        [7, "F"],
      ],
      battleship: [
        [10, "A"],
        [10, "B"],
        [10, "C"],
        [10, "D"],
      ],
      carrier: [
        [1, "J"],
        [2, "J"],
        [3, "J"],
        [4, "J"],
        [5, "J"],
      ],
    }
  }
  handleClick = (x, y) => {
    console.log(x, y)
  }

  isFilledPatrolBoat = (position) => {
    return lodash.find(this.state.patrolBoat, position)
  }
  isFilledSubmarine = (position) => {
    return lodash.find(this.state.submarine, position)
  }
  isFilledDestroyer = (position) => {
    return lodash.find(this.state.destroyer, position)
  }
  isFilledBattleship = (position) => {
    return lodash.find(this.state.battleship, position)
  }
  isFilledCarrier = (position) => {
    return lodash.find(this.state.carrier, position)
  }

  render() {
    return (
      <div>
        {this.state.arrayGridX.map((x) => {
          return (
            <div className="d-flex">
              {this.state.arrayGridY.map((y) => {
                return (
                  <div
                    className={`square ${
                      this.isFilledPatrolBoat([x, y]) && "filled"
                    }`}
                    onClick={() => {
                      this.handleClick(x, y)
                    }}
                  ></div>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }
}
export default Grille
