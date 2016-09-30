import React, { Component } from 'react';

import Lava from './lava'
import Platform from './platform'
import Word from './word'
import Actor from './actor'

class GameBoard extends Component {
    render(){
        const platforms = [];
        for(let i = this.props.actorPlatformIndex + 8; i >= Math.max(0, this.props.actorPlatformIndex - 1); i--){
            platforms.push({ index: i });
        }

        console.log(platforms);

        return (
            <div className="game-board">
                {platforms.map(p => (
                    <Platform key={p.index} {...p} />
                ))}
                <Actor position={this.props.actorPlatformIndex} />
                <Word position={this.props.actorPlatformIndex+1} />
                <Lava position="{this.props.lavaPosition}" timeScale="{this.props.timeScale}" />
            </div>
        );
    }
}

export default GameBoard;