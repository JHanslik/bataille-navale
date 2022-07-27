import React, { Component } from "react"
import Start from "./components/Start"
import Header from "./components/Header"
import PlacementGrid from "./components/PlacementGrid"
import InGame from "./components/InGame"
import "./App.css"

class App extends Component {
  constructor() {
    super()

    this.state = {
      status: "start",
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
    console.log(e.target.value)
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

  gameStart = () => {
    this.setState({
      status: "placement",
    })
  }
  placementDone = () => {
    this.setState({
      status: "game",
    })
  }
  render() {
    return (
      <div>
        <Header />
        {this.state.status === "start" && (
          <Start startStatus={this.gameStart} />
        )}
        {this.state.status === "placement" && (
          <PlacementGrid
            placementDone={this.placementDone}
            isFilled={this.isFilled}
            handleClick={this.handleClick}
            placementDirection={this.placementDirection}
            boatSelection={this.boatSelection}
            direction={this.state.direction}
            arrayGrid={this.state.arrayGrid}
            patrolBoat={this.state.patrolBoat}
            submarine={this.state.submarine}
            destroyer={this.state.destroyer}
            battleship={this.state.battleship}
            carrier={this.state.carrier}
          />
        )}
        {this.state.status === "game" && <InGame />}
      </div>
    )
  }
}

export default App
