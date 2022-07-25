import React, { Component } from 'react';

class Placement extends Component {
    constructor() {
        super()
        this.state = {
            placementDone: false
        }
    }
    placementDone = () => {
        this.setState({
            placementDone: true
    })
    }
    render() {
        return (
            
            <div>
                <button id="rotate">Rotate</button>
                <Grille/>
                {this.state.placementDone && (<button id="placement-done-button" className='green-button' onClick={this.placementDone}>GO</button>)}
            </div>
        );
    }
}

export default Placement;