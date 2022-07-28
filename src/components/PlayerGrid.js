import React, { Component } from "react"

class PlayerGrid extends Component {
  render() {
    console.log(this.props.iaTarget)
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
                        ${this.props.isFilled(`${x}${y}`) && "filled"}
                      ${this.props.ennemyAttackMissed(`${x}${y}`) && "missed"}
                      ${this.props.ennemyAttackHit(`${x}${y}`) && "hit"}
                      ${this.props.patrolBoatSunk(`${x}${y}`) && "sunk"}
                      ${this.props.submarineSunk(`${x}${y}`) && "sunk"}
                      ${this.props.destroyerSunk(`${x}${y}`) && "sunk"}
                      ${this.props.battleshipSunk(`${x}${y}`) && "sunk"}
                      ${this.props.carrierSunk(`${x}${y}`) && "sunk"}
                      `}
                    ></div>
                  )
                })}
              </div>
            )
          })}
        </div>
        <h2 className="h3">Your Grid !</h2>
      </div>
    )
  }
}
export default PlayerGrid
