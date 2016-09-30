import React, { Component } from 'react';
import './App.css';

import GameBoard from './game/gameBoard'
import ScoreDisplay from './gui/scoreDisplay'
import DistanceDisplay from './gui/distanceDisplay'

class App extends Component {
  constructor(){
    super();
    this.state = {
      actorPlatformIndex: 0, // word position is always actor position + 1
      lavaPosition: 0,
      score: 0,
      distance: 0, // distance multipler * (lavaPosition - actorPlatformIndex) ??
      timeScale: 1, // double between 0 and 1,
      gameState: 'not-started' // in-progress, game-over,
    }
  }

  render() {
    return (
      <div className="App">
        <ScoreDisplay score={this.state.score}/>
        <DistanceDisplay distance={this.state.distance}/>
        <GameBoard {...this.state} />
      </div>
    );
  }
}

export default App;
