import React, { Component } from 'react';

class Start extends Component {
    render() {
        return (
            <div>
                <button className='button' onClick={this.props.startPlacement}>Start</button>
            </div>
        );
    }
}

export default Start;