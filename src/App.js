import React, { Component } from "react";
import Grille from "./components/Grille";
import "./App.css";

class App extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="container">
                <Grille />
            </div>
        );
    }
}

export default App;
