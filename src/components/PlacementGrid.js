import React, { Component } from "react"

class PlacementGrid extends Component {
  render() {
    return (
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <h2 className="text-white text-center m-4">Place your boats</h2>

        <div className="d-flex flex-column align-items-center">
          {this.props.arrayGrid.map((x) => {
            return (
              <div className="d-flex">
                {this.props.arrayGrid.map((y) => {
                  return (
                    <div
                      className={`square ${
                        this.props.isFilled(`${x}${y}`) && "filled"
                      }`}
                      onClick={() => {
                        this.props.handleClick(x, y)
                      }}
                    >
                      {console.log(this.props.isFilled(`${x}${y}`))}
                    </div>
                  )
                })}
              </div>
            )
          })}
          <button
            id="rotate-button"
            className="mx-auto m-3"
            onClick={this.props.placementDirection}
          >
            {this.props.direction}
          </button>
          <div className="text-center">
            <button
              type="button"
              value="patrolBoat"
              className={`m-2 boat ${
                this.props.patrolBoat.length === 2 && "placed"
              }`}
              onClick={(e) => {
                this.props.boatSelection(e)
              }}
            >
              Patrol Boat
            </button>
            <button
              type="button"
              value="submarine"
              className={`m-2 boat ${
                this.props.submarine.length === 3 && "placed"
              }`}
              onClick={(e) => {
                this.props.boatSelection(e)
              }}
            >
              Submarine
            </button>
            <button
              type="button"
              value="destroyer"
              className={`m-2 boat ${
                this.props.destroyer.length === 3 && "placed"
              }`}
              onClick={(e) => {
                this.props.boatSelection(e)
              }}
            >
              Destroyer
            </button>
            <button
              type="button"
              value="battleship"
              className={`m-2 boat ${
                this.props.battleship.length === 4 && "placed"
              }`}
              onClick={(e) => {
                this.props.boatSelection(e)
              }}
            >
              Battleship
            </button>
            <button
              type="button"
              value="carrier"
              className={`m-2 boat ${
                this.props.carrier.length === 5 && "placed"
              }`}
              onClick={(e) => {
                this.props.boatSelection(e)
              }}
            >
              Carrier
            </button>
          </div>
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
export default PlacementGrid
