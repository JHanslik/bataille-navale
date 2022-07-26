import React, { Component } from "react"
import lodash from "lodash"

class Grille extends Component {
  constructor() {
    super()

    this.state = {
      arrayGridX: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      arrayGridY: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
      patrolBoat: ["1A", "2A"],
      submarine: ["3B", "3C", "3D"],
      destroyer: ["5F", "6F", "7F"],
      battleship: ["10A", "10B", "10C", "10D"],
      carrier: ["1J", "2J", "3J", "4J", "5J"],
    }
  }
  handleClick = (x, y) => {
    console.log(x, y)
  }

  isFilledPatrolBoat = (position) => {
    return this.state.patrolBoat.includes(position)
  }
  isFilledSubmarine = (position) => {
    return this.state.submarine.includes(position)
  }
  isFilledDestroyer = (position) => {
    return this.state.destroyer.includes(position)
  }
  isFilledBattleship = (position) => {
    return this.state.battleship.includes(position)
  }
  isFilledCarrier = (position) => {
    return this.state.carrier.includes(position)
  }

  isFilled = (position) => {
    return (
      this.isFilledPatrolBoat(position) ||
      this.isFilledSubmarine(position) ||
      this.isFilledDestroyer(position) ||
      this.isFilledBattleship(position) ||
      this.isFilledCarrier(position)
    )
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
                      this.isFilled(`${x}${y}`) && "filled"
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
