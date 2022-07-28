import React, { Component } from "react"
import EnnemyGrid from "./EnnemyGrid"
import PlayerGrid from "./PlayerGrid"

class InGame extends Component {
  render() {
    return (
      <div>
        {this.props.remainingBoats === 0 && (
          <div className="d-flex flex-column align-items-center">
            <h3 className="mt-4">You Lost !</h3>
            <img
              src="https://i0.wp.com/media.giphy.com/media/pOTvR5CtiB4sWMFHPG/source.gif?w=1100&ssl=1"
              alt="sheesh"
              className="my-5"
            />
            <button className="green-button mb-5" onClick={this.props.refresh}>
              Play again
            </button>
          </div>
        )}
        {this.props.remainingEnnemyBoats === 0 && (
          <div className="d-flex flex-column align-items-center">
            <h3 className="mt-4">You Won !</h3>
            <img
              src="https://thumbs.gfycat.com/ImaginativeAmpleCrow-max-1mb.gif"
              alt="sheesh"
              className="my-5"
            />
            <button className="green-button mb-5" onClick={this.props.refresh}>
              Play again
            </button>
          </div>
        )}
        {this.props.remainingBoats !== 0 &&
          this.props.remainingEnnemyBoats !== 0 && (
            <div className="d-flex justify-content-evenly flex-wrap m-5">
              <PlayerGrid
                isFilled={this.props.isFilled}
                arrayGrid={this.props.arrayGrid}
                ennemyAttackMissed={this.props.ennemyAttackMissed}
                ennemyAttackHit={this.props.ennemyAttackHit}
                patrolBoatSunk={this.props.patrolBoatSunk}
                submarineSunk={this.props.submarineSunk}
                destroyerSunk={this.props.destroyerSunk}
                battleshipSunk={this.props.battleshipSunk}
                carrierSunk={this.props.carrierSunk}
                iaTarget={this.props.iaTarget}
                remainingBoats={this.props.remainingBoats}
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
                remainingEnnemyBoats={this.props.remainingEnnemyBoats}
              />
            </div>
          )}
      </div>
    )
  }
}

export default InGame
