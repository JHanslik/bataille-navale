import React, { Component } from 'react'

export default class Grille extends Component {
    render() {
        var  arrayGrid=[];
        
        //console.log()
        for(var i=0;i<this.props.cases.length;i++) {
             arrayGrid[i] = [];
            for(var j=0;j<this.props.cases[i].length;j++) {
                 arrayGrid[i][j] = <Case x={i} y={j} {...this.props.cases[i][j]} {...this.props} />;
            }
        }
        return (
            <svg className="grille" height="400" width="400">
            { arrayGrid}
            {this.props.children}
            </svg>
        )
      }
    }
