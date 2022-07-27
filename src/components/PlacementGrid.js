import React, { Component } from "react"

class PlacementGrid extends Component {
  constructor() {
    super()

    this.state = {
      arrayGrid: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      boatSelected: "",
      direction: "Vertical",
      patrolBoat: [],
      submarine: [],
      destroyer: [],
      battleship: [],
      carrier: [],
      locked: false,
    }
  }
  handleClickPatrolBoat = (x, y) => {
    let clonedPatrolBoat = [...this.state.patrolBoat]
    if (clonedPatrolBoat.length < 2 && !this.isFilledPatrolBoat(`${x}${y}`)) {
      if (clonedPatrolBoat.length === 0) {
        clonedPatrolBoat.push(`${x}${y}`)
        this.setState({
          patrolBoat: clonedPatrolBoat,
        })
      } else if (
        this.state.direction === "Horizontal" &&
        clonedPatrolBoat[0].charAt(0) === `${x}` &&
        (this.isFilledPatrolBoat(`${x}${y - 1}`) ||
          this.isFilledPatrolBoat(`${x}${y + 1}`))
      ) {
        clonedPatrolBoat.push(`${x}${y}`)
        this.setState({
          patrolBoat: clonedPatrolBoat,
        })
      } else if (
        this.state.direction === "Vertical" &&
        clonedPatrolBoat[0].charAt(1) === `${y}` &&
        (this.isFilledPatrolBoat(`${x - 1}${y}`) ||
          this.isFilledPatrolBoat(`${x + 1}${y}`))
      ) {
        clonedPatrolBoat.push(`${x}${y}`)
        this.setState({
          patrolBoat: clonedPatrolBoat,
        })
      }
    }
    if (clonedPatrolBoat.length === 2) {
      this.setState({
        locked: false,
      })
    }
  }
  handleClickSubmarine = (x, y) => {
    let clonedSubmarine = [...this.state.submarine]
    if (clonedSubmarine.length < 3 && !this.isFilledSubmarine(`${x}${y}`)) {
      if (clonedSubmarine.length === 0) {
        clonedSubmarine.push(`${x}${y}`)
        this.setState({
          submarine: clonedSubmarine,
        })
      } else if (
        this.state.direction === "Horizontal" &&
        clonedSubmarine[0].charAt(0) === `${x}` &&
        (this.isFilledSubmarine(`${x}${y - 1}`) ||
          this.isFilledSubmarine(`${x}${y + 1}`))
      ) {
        clonedSubmarine.push(`${x}${y}`)
        this.setState({
          submarine: clonedSubmarine,
        })
      } else if (
        this.state.direction === "Vertical" &&
        clonedSubmarine[0].charAt(1) === `${y}` &&
        (this.isFilledSubmarine(`${x - 1}${y}`) ||
          this.isFilledSubmarine(`${x + 1}${y}`))
      ) {
        clonedSubmarine.push(`${x}${y}`)
        this.setState({
          submarine: clonedSubmarine,
        })
      }
    }
    if (clonedSubmarine.length === 3) {
      this.setState({
        locked: false,
      })
    }
  }
  handleClickDestroyer = (x, y) => {
    let clonedDestroyer = [...this.state.destroyer]
    if (clonedDestroyer.length < 3 && !this.isFilledDestroyer(`${x}${y}`)) {
      if (clonedDestroyer.length === 0) {
        clonedDestroyer.push(`${x}${y}`)
        this.setState({
          destroyer: clonedDestroyer,
        })
      } else if (
        this.state.direction === "Horizontal" &&
        clonedDestroyer[0].charAt(0) === `${x}` &&
        (this.isFilledDestroyer(`${x}${y - 1}`) ||
          this.isFilledDestroyer(`${x}${y + 1}`))
      ) {
        clonedDestroyer.push(`${x}${y}`)
        this.setState({
          destroyer: clonedDestroyer,
        })
      } else if (
        this.state.direction === "Vertical" &&
        clonedDestroyer[0].charAt(1) === `${y}` &&
        (this.isFilledDestroyer(`${x - 1}${y}`) ||
          this.isFilledDestroyer(`${x + 1}${y}`))
      ) {
        clonedDestroyer.push(`${x}${y}`)
        this.setState({
          destroyer: clonedDestroyer,
        })
      }
    }
    if (clonedDestroyer.length === 3) {
      this.setState({
        locked: false,
      })
    }
  }
  handleClickBattleship = (x, y) => {
    let clonedBattleship = [...this.state.battleship]
    if (clonedBattleship.length < 4 && !this.isFilledBattleship(`${x}${y}`)) {
      if (clonedBattleship.length === 0) {
        clonedBattleship.push(`${x}${y}`)
        this.setState({
          battleship: clonedBattleship,
        })
      } else if (
        this.state.direction === "Horizontal" &&
        clonedBattleship[0].charAt(0) === `${x}` &&
        (this.isFilledBattleship(`${x}${y - 1}`) ||
          this.isFilledBattleship(`${x}${y + 1}`))
      ) {
        clonedBattleship.push(`${x}${y}`)
        this.setState({
          battleship: clonedBattleship,
        })
      } else if (
        this.state.direction === "Vertical" &&
        clonedBattleship[0].charAt(1) === `${y}` &&
        (this.isFilledBattleship(`${x - 1}${y}`) ||
          this.isFilledBattleship(`${x + 1}${y}`))
      ) {
        clonedBattleship.push(`${x}${y}`)
        this.setState({
          battleship: clonedBattleship,
        })
      }
    }
    if (clonedBattleship.length === 4) {
      this.setState({
        locked: false,
      })
    }
  }
  handleClickCarrier = (x, y) => {
    let clonedCarrier = [...this.state.carrier]
    if (clonedCarrier.length < 5 && !this.isFilledCarrier(`${x}${y}`)) {
      if (clonedCarrier.length === 0) {
        console.log("premier bloc")
        clonedCarrier.push(`${x}${y}`)
        this.setState({
          carrier: clonedCarrier,
        })
      } else if (
        this.state.direction === "Horizontal" &&
        clonedCarrier[0].charAt(0) === `${x}` &&
        (this.isFilledCarrier(`${x}${y - 1}`) ||
          this.isFilledCarrier(`${x}${y + 1}`))
      ) {
        console.log("horizontal")
        clonedCarrier.push(`${x}${y}`)
        this.setState({
          carrier: clonedCarrier,
        })
      } else if (
        this.state.direction === "Vertical" &&
        clonedCarrier[0].charAt(1) === `${y}` &&
        (this.isFilledCarrier(`${x - 1}${y}`) ||
          this.isFilledCarrier(`${x + 1}${y}`))
      ) {
        console.log("vertical")
        clonedCarrier.push(`${x}${y}`)
        this.setState({
          carrier: clonedCarrier,
        })
      }
    }
    if (clonedCarrier.length === 5) {
      this.setState({
        locked: false,
      })
    }
  }

  boatSelection = (e, x, y) => {
    if (e.target.value === "patrolBoat" && !this.state.locked) {
      this.setState({
        boatSelected: "patrolBoat",
        locked: true,
      })
    } else if (e.target.value === "submarine" && !this.state.locked) {
      this.setState({
        boatSelected: "submarine",
        locked: true,
      })
    } else if (e.target.value === "destroyer" && !this.state.locked) {
      this.setState({
        boatSelected: "destroyer",
        locked: true,
      })
    } else if (e.target.value === "battleship" && !this.state.locked) {
      this.setState({
        boatSelected: "battleship",
        locked: true,
      })
    } else if (e.target.value === "carrier" && !this.state.locked) {
      this.setState({
        boatSelected: "carrier",
        locked: true,
      })
    }
  }

  handleClick = (x, y) => {
    if (this.state.boatSelected === "patrolBoat") {
      this.handleClickPatrolBoat(x, y)
    } else if (this.state.boatSelected === "submarine") {
      this.handleClickSubmarine(x, y)
    } else if (this.state.boatSelected === "destroyer") {
      this.handleClickDestroyer(x, y)
    } else if (this.state.boatSelected === "battleship") {
      this.handleClickBattleship(x, y)
    } else if (this.state.boatSelected === "carrier") {
      this.handleClickCarrier(x, y)
    }
  }

  placementDirection = () => {
    if (this.state.direction === "Horizontal") {
      this.setState({
        direction: "Vertical",
      })
    } else if (this.state.direction === "Vertical") {
      this.setState({
        direction: "Horizontal",
      })
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
    // console.log(this.state.direction)
    // console.log(this.state.boatSelected)
    // console.log(this.state.patrolBoat)
    // console.log(this.state.submarine)
    // console.log(this.state.destroyer)
    // console.log(this.state.battleship)
    console.log(this.state.carrier)
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
                    onClick={() => {
                      this.handleClick(x, y)
                    }}
                  ></div>
                )
              })}
            </div>
          )
        })}
        <button
          id="rotate-button"
          className="mx-auto m-3"
          onClick={this.placementDirection}
        >
          {this.state.direction}
        </button>
        <div className="text-center">
          <button
            type="button"
            value="patrolBoat"
            className={`m-2 boat ${
              this.state.patrolBoat.length === 2 && "placed"
            }`}
            onClick={(e) => {
              this.boatSelection(e)
            }}
          >
            Patrol Boat
          </button>
          <button
            type="button"
            value="submarine"
            className={`m-2 boat ${
              this.state.submarine.length === 3 && "placed"
            }`}
            onClick={(e) => {
              this.boatSelection(e)
            }}
          >
            Submarine
          </button>
          <button
            type="button"
            value="destroyer"
            className={`m-2 boat ${
              this.state.destroyer.length === 3 && "placed"
            }`}
            onClick={(e) => {
              this.boatSelection(e)
            }}
          >
            Destroyer
          </button>
          <button
            type="button"
            value="battleship"
            className={`m-2 boat ${
              this.state.battleship.length === 4 && "placed"
            }`}
            onClick={(e) => {
              this.boatSelection(e)
            }}
          >
            Battleship
          </button>
          <button
            type="button"
            value="carrier"
            className={`m-2 boat ${
              this.state.carrier.length === 5 && "placed"
            }`}
            onClick={(e) => {
              this.boatSelection(e)
            }}
          >
            Carrier
          </button>
        </div>
      </div>
    )
  }
}
export default PlacementGrid
