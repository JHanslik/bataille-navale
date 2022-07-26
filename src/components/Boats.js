import React, { Component } from "react"

class Boats extends Component {
  constructor() {
    super()

    this.state = {
      boats: [
        { name: "Carrier", length: 5 },
        { name: "Battleship", length: 4 },
        { name: "Destroyer", length: 3 },
        { name: "Submarine", length: 3 },
        { name: "Patrol Boat", length: 2 },
      ],
    }
  }

  render() {
    return <div></div>
  }
}

export default Boats
