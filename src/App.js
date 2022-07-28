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
      playerBoats: [],
      locked: false,
      patrolBoatEnnemy: ["37", "47"],
      submarineEnnemy: ["11", "12", "13"],
      destroyerEnnemy: ["87", "86", "85"],
      battleshipEnnemy: ["64", "65", "66", "67"],
      carrierEnnemy: ["06", "16", "26", "36", "46"],
      ennemyTarget: "",
      ennemyBoats: [],
      playerAttacks: [],
      ennemyAttacks: [],
      playing: "",
    }
  }
  componentDidMount() {
    this.setState({
      ennemyBoats: [
        ...this.state.patrolBoatEnnemy,
        ...this.state.submarineEnnemy,
        ...this.state.destroyerEnnemy,
        ...this.state.battleshipEnnemy,
        ...this.state.carrierEnnemy,
      ],
    })
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
        playerBoats: [...this.state.playerBoats, ...clonedPatrolBoat],
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
        playerBoats: [...this.state.playerBoats, ...clonedSubmarine],
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
        playerBoats: [...this.state.playerBoats, ...clonedDestroyer],
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
        playerBoats: [...this.state.playerBoats, ...clonedBattleship],
      })
    }
  }
  handleClickCarrier = (x, y) => {
    let clonedCarrier = [...this.state.carrier]
    if (clonedCarrier.length < 5 && !this.isFilledCarrier(`${x}${y}`)) {
      if (clonedCarrier.length === 0) {
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
        clonedCarrier.push(`${x}${y}`)
        this.setState({
          carrier: clonedCarrier,
        })
      }
    }
    if (clonedCarrier.length === 5) {
      this.setState({
        locked: false,
        playerBoats: [...this.state.playerBoats, ...clonedCarrier],
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

  isFilledPatrolBoatEnnemy = (position) => {
    return this.state.patrolBoatEnnemy.includes(position)
  }
  isFilledSubmarineEnnemy = (position) => {
    return this.state.submarineEnnemy.includes(position)
  }
  isFilledDestroyerEnnemy = (position) => {
    return this.state.destroyerEnnemy.includes(position)
  }
  isFilledBattleshipEnnemy = (position) => {
    return this.state.battleshipEnnemy.includes(position)
  }
  isFilledCarrierEnnemy = (position) => {
    return this.state.carrierEnnemy.includes(position)
  }

  isFilledEnnemy = (position) => {
    return (
      this.isFilledPatrolBoatEnnemy(position) ||
      this.isFilledSubmarineEnnemy(position) ||
      this.isFilledDestroyerEnnemy(position) ||
      this.isFilledBattleshipEnnemy(position) ||
      this.isFilledCarrierEnnemy(position)
    )
  }

  handleClickAttack = (x, y) => {
    let clonedPlayerAttacks = [...this.state.playerAttacks]

    if (!clonedPlayerAttacks.includes(`${x}${y}`)) {
      clonedPlayerAttacks.push(`${x}${y}`)
      this.setState({
        playerAttacks: clonedPlayerAttacks,
      })
      this.randomAttack()
    }
  }

  missedAttack = (position) => {
    return this.playerMissedFilled(position)
  }
  hitAttack = (position) => {
    return this.playerHitFilled(position)
  }
  ennemyMissedAttack = (position) => {
    return this.ennemyMissedFilled(position)
  }
  ennemyHitAttack = (position) => {
    return this.ennemyHitFilled(position)
  }
  // ------------------------------player part------------------------------------------------

  patrolBoatEnnemySunk = (position) => {
    const patrolBoatEnnemySunk = this.state.patrolBoatEnnemy.every((e) => {
      return this.state.playerAttacks.includes(e)
    })

    return (
      patrolBoatEnnemySunk && this.state.patrolBoatEnnemy.includes(position)
    )
  }
  submarineEnnemySunk = (position) => {
    const submarineEnnemySunk = this.state.submarineEnnemy.every((e) => {
      return this.state.playerAttacks.includes(e)
    })
    return submarineEnnemySunk && this.state.submarineEnnemy.includes(position)
  }
  destroyerEnnemySunk = (position) => {
    const destroyerEnnemySunk = this.state.destroyerEnnemy.every((e) => {
      return this.state.playerAttacks.includes(e)
    })
    return destroyerEnnemySunk && this.state.destroyerEnnemy.includes(position)
  }
  battleshipEnnemySunk = (position) => {
    const battleshipEnnemySunk = this.state.battleshipEnnemy.every((e) => {
      return this.state.playerAttacks.includes(e)
    })
    return (
      battleshipEnnemySunk && this.state.battleshipEnnemy.includes(position)
    )
  }
  carrierEnnemySunk = (position) => {
    const carrierEnnemySunk = this.state.carrierEnnemy.every((e) => {
      return this.state.playerAttacks.includes(e)
    })
    return carrierEnnemySunk && this.state.carrierEnnemy.includes(position)
  }

  playerMissedFilled = (position) => {
    return (
      this.state.playerAttacks.includes(position) &&
      !this.state.ennemyBoats.includes(position)
    )
  }
  playerHitFilled = (position) => {
    return (
      this.state.playerAttacks.includes(position) &&
      this.state.ennemyBoats.includes(position)
    )
  }

  // ---------------------------------------IA part-------------------------------------------

  randomAttack = () => {
    let x = Math.floor(Math.random() * 10)
    let y = Math.floor(Math.random() * 10)
    let clonedEnnemyAttacks = [...this.state.ennemyAttacks]
    if (!clonedEnnemyAttacks.includes(`${x}${y}`)) {
      clonedEnnemyAttacks.push(`${x}${y}`)
      this.setState({
        ennemyAttacks: clonedEnnemyAttacks,
        ennemyTarget: `${x}${y}`,
      })
    } else if (clonedEnnemyAttacks.includes(`${x}${y}`)) {
      this.randomAttack()
    }
  }

  patrolBoatSunk = (position) => {
    const patrolBoatSunk = this.state.patrolBoat.every((e) => {
      return this.state.ennemyAttacks.includes(e)
    })
    return patrolBoatSunk && this.state.patrolBoat.includes(position)
  }
  submarineSunk = (position) => {
    const submarineSunk = this.state.submarine.every((e) => {
      return this.state.ennemyAttacks.includes(e)
    })
    return submarineSunk && this.state.submarine.includes(position)
  }
  destroyerSunk = (position) => {
    const destroyerSunk = this.state.destroyer.every((e) => {
      return this.state.ennemyAttacks.includes(e)
    })
    return destroyerSunk && this.state.destroyer.includes(position)
  }
  battleshipSunk = (position) => {
    const battleshipSunk = this.state.battleship.every((e) => {
      return this.state.ennemyAttacks.includes(e)
    })
    return battleshipSunk && this.state.battleship.includes(position)
  }
  carrierSunk = (position) => {
    const carrierSunk = this.state.carrier.every((e) => {
      return this.state.ennemyAttacks.includes(e)
    })
    return carrierSunk && this.state.carrier.includes(position)
  }

  ennemyMissedFilled = (position) => {
    return (
      this.state.ennemyAttacks.includes(position) &&
      !this.state.playerBoats.includes(position)
    )
  }
  ennemyHitFilled = (position) => {
    return (
      this.state.ennemyAttacks.includes(position) &&
      this.state.playerBoats.includes(position)
    )
  }

  // -----------------------------------------------------------------------------------------------

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
    console.log(this.ennemyMissedFilled(this.state.ennemyTarget))
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
        {this.state.status === "game" && (
          <InGame
            isFilled={this.isFilled}
            arrayGrid={this.state.arrayGrid}
            isFilledEnnemy={this.isFilledEnnemy}
            attackClick={this.handleClickAttack}
            attackMissed={this.missedAttack}
            attackHit={this.hitAttack}
            patrolBoatEnnemySunk={this.patrolBoatEnnemySunk}
            submarineEnnemySunk={this.submarineEnnemySunk}
            destroyerEnnemySunk={this.destroyerEnnemySunk}
            battleshipEnnemySunk={this.battleshipEnnemySunk}
            carrierEnnemySunk={this.carrierEnnemySunk}
            ennemyAttackMissed={this.ennemyMissedAttack}
            ennemyAttackHit={this.ennemyHitAttack}
            patrolBoatSunk={this.patrolBoatSunk}
            submarineSunk={this.submarineSunk}
            destroyerSunk={this.destroyerSunk}
            battleshipSunk={this.battleshipSunk}
            carrierSunk={this.carrierSunk}
            iaTarget={this.state.ennemyTarget}
          />
        )}
      </div>
    )
  }
}

export default App
