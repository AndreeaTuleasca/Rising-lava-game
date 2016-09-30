import React, { Component } from 'react';
import './App.css';

import GameBoard from './game/gameBoard'
import ScoreDisplay from './gui/scoreDisplay'
import DistanceDisplay from './gui/distanceDisplay'

class App extends Component {
  constructor(){
    super();
    this.state = {
      actorPosition: 7, // word position is always actor position + 1
      lavaPosition: 0,
      score: 0,
      distance: 0, // distance multipler * (lavaPosition - actorPlatformIndex) ??
      timeScale: 1, // double between 0 and 1,
      gameState: 'not-started', // in-progress, game-over,
      hiddenPlatforms: 2, // the number platforms that have gone out of the view
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
