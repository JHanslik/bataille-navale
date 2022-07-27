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
                      className={`square ${
                        this.props.isFilledEnnemy(`${x}${y}`) && "filled"
                      }`}
                    ></div>
                  )
                })}
              </div>
            )
          })}
        </div>
        <h2 className="h3">Ennemy Grid !</h2>
      </div>
    )
  }
}
export default EnnemyGrid
