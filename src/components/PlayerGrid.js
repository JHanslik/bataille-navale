import React, { Component } from "react"

class PlayerGrid extends Component {
  constructor() {
    super()

    this.state = {
      arrayGrid: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      patrolBoat: [],
      submarine: [],
      destroyer: [],
      battleship: [],
      carrier: [],
    }
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
      <div className="d-flex flex-column align-items-center">
        {this.state.arrayGrid.map((x) => {
          return (
            <div className="d-flex">
              {this.state.arrayGrid.map((y) => {
                return (
                  <div
                    className={`square ${
                      this.isFilled(`${x}${y}`) && "filled"
                    }`}
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
export default PlayerGrid