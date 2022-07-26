import React, { Component } from "react"

class Grille extends Component {
  constructor() {
    super()

    this.state = {
      arrayGridX: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      arrayGridY: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
      patrolBoat: [],
      submarine: [],
      destroyer: [],
      battleship: [],
      carrier: [],
    }
  }
  handleClickPatrolBoat = (x, y) => {
    let clonedPatrolBoat = [...this.state.patrolBoat]
    clonedPatrolBoat.length < 2 && clonedPatrolBoat.push(`${x}${y}`)
    this.setState({
      patrolBoat: clonedPatrolBoat,
    })
  }
  handleClickSubmarine = (x, y) => {
    let clonedSubmarine = [...this.state.submarine]
    clonedSubmarine.length < 3 && clonedSubmarine.push(`${x}${y}`)
    this.setState({
      submarine: clonedSubmarine,
    })
  }
  handleClickDestroyer = (x, y) => {
    let clonedDestroyer = [...this.state.destroyer]
    clonedDestroyer.length < 3 && clonedDestroyer.push(`${x}${y}`)
    this.setState({
      destroyer: clonedDestroyer,
    })
  }
  handleClickBattleship = (x, y) => {
    let clonedBattleship = [...this.state.battleship]
    clonedBattleship.length < 4 && clonedBattleship.push(`${x}${y}`)
    this.setState({
      battleship: clonedBattleship,
    })
  }
  handleClickCarrier = (x, y) => {
    let clonedCarrier = [...this.state.carrier]
    clonedCarrier.length < 5 && clonedCarrier.push(`${x}${y}`)
    this.setState({
      carrier: clonedCarrier,
    })
  }

  boatSelection = (e, x, y) => {
    console.log(e.target.value)
    e.target.value === "patrolBoat" && this.handleClickPatrolBoat(x, y)
    e.target.value === "submarine" && this.handleClickSubmarine(x, y)
    e.target.value === "destroyer" && this.handleClickDestroyer(x, y)
    e.target.value === "battleship" && this.handleClickBattleship(x, y)
    e.target.value === "carrier" && this.handleClickCarrier(x, y)
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
    return (
      <div>
        {this.state.arrayGridX.map((x) => {
          return (
            <div className="d-flex">
              {this.state.arrayGridY.map((y) => {
                return (
                  <div
                    className={`square ${
                      this.isFilled(`${x}${y}`) && "filled"
                    }`}
                    onClick={() => {
                      this.handleClickCarrier(x, y)
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
