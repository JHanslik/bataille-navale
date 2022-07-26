import React, { Component } from "react"

class Grille extends Component {
  constructor() {
    super()

    this.state = {
      arrayGridX: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      arrayGridY: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
      boat: [
        [2, "B"],
        [2, "C"],
        [2, "D"],
      ],
    }
  }
  handleClick = (x, y) => {
    console.log(x, y)
  }

  isFilled = (position) => {
    console.log(position)
    return this.state.boat.find((presence) => {
      console.log(presence)
      return presence === position
    })
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
                    className={`square ${this.isFilled([x, y]) && "filled"}`}
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
