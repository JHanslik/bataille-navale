import React, { Component } from 'react';

class Start extends Component {
    render() {
        return (
            <div>
                <button className='green-button' onClick={this.props.startGame}>Start</button>
            </div>
        );
    }
}

export default Start;