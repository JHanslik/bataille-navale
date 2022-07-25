import React, { Component } from "react";
import Grille from "./components/Grille";

class App extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Grille />
            </div>
        );
    }
}

export default App;
