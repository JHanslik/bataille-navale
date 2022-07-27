import React, { Component } from "react"
import EnnemyGrid from "./EnnemyGrid"
import PlayerGrid from "./PlayerGrid"

class InGame extends Component {
  render() {
    return (
      <div className="d-flex justify-content-evenly m-5">
        <PlayerGrid
          isFilled={this.props.isFilled}
          arrayGrid={this.props.arrayGrid}
        />
        <EnnemyGrid
          isFilledEnnemy={this.props.isFilledEnnemy}
          arrayGrid={this.props.arrayGrid}
          attackClick={this.props.attackClick}
          attackMissed={this.props.attackMissed}
          attackHit={this.props.attackHit}
          patrolBoatEnnemySunk={this.props.patrolBoatEnnemySunk}
          submarineEnnemySunk={this.props.submarineEnnemySunk}
          destroyerEnnemySunk={this.props.destroyerEnnemySunk}
          battleshipEnnemySunk={this.props.battleshipEnnemySunk}
          carrierEnnemySunk={this.props.carrierEnnemySunk}
        />
      </div>
    )
  }
}

export default InGame
