import React, { Component } from 'react';

import Lava from './lava'
import Platform from './platform'
import Word from './word'
import Actor from './actor'

class GameBoard extends Component {
    render(){
        const platforms = [];
        for(let i = 0; i < 10; i++){
            platforms.push({
              position: this.props.hiddenPlatforms + i,
              index: i
            });
        }

        const actorIndex = this.props.actorPosition - this.props.hiddenPlatforms;

        return (
            <div className="game-board">
                {platforms.map(p => (
                    <Platform key={p.index} {...p} />
                ))}
                <Actor position={this.props.actorPosition} index={actorIndex} />
                <Word position={this.props.actorPosition+1} index={actorIndex+1} />
                <Lava position="{this.props.lavaPosition}" timeScale="{this.props.timeScale}" />
            </div>
        );
    }
}

export default GameBoard;
