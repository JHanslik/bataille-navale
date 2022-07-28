import React, { Component } from "react"

class EnnemyGrid extends Component {
  render() {
    return (
      <div className="text-center">
        <div className="d-flex flex-column align-items-center">
          {this.props.arrayGrid.map((x) => {
            return (
              <div className="d-flex">
                {this.props.arrayGrid.map((y) => {
                  return (
                    <div
                      className={`square 
                        ${this.props.attackMissed(`${x}${y}`) && "missed"}
                        ${this.props.attackHit(`${x}${y}`) && "hit"}
                        ${this.props.patrolBoatEnnemySunk(`${x}${y}`) && "sunk"}
                        ${this.props.submarineEnnemySunk(`${x}${y}`) && "sunk"}
                        ${this.props.destroyerEnnemySunk(`${x}${y}`) && "sunk"}
                        ${this.props.battleshipEnnemySunk(`${x}${y}`) && "sunk"}
                        ${this.props.carrierEnnemySunk(`${x}${y}`) && "sunk"}
                        `}
                      onClick={() => {
                        this.props.attackClick(x, y)
                      }}
                    ></div>
                  )
                })}
              </div>
            )
          })}
        </div>
        <h2 className="h5 mt-3">Ennemy Grid !</h2>
        <p>Remaining Boats: {this.props.remainingEnnemyBoats}</p>
      </div>
    )
  }
}
export default EnnemyGrid
