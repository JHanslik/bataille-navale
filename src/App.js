import React, { Component } from "react"
import Start from "./components/Start"
import Placement from "./components/Placement"
import Header from "./components/Header"
import InGame from "./components/InGame"
import "./App.css"

class App extends Component {
  constructor() {
    super()

    this.state = {
      status: "start",
    }
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
          <Placement placementDone={this.placementDone} />
        )}
        {this.state.status === "game" && <InGame />}
      </div>
    )
  }
}

export default App
