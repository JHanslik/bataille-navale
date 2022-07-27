import React, { Component } from "react"

class PlayerGrid extends Component {
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
                      className={`square ${
                        this.props.isFilled(`${x}${y}`) && "filled"
                      }`}
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
