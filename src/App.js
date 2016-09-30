import React, { Component } from 'react';
import './App.css';

import GameBoard from './game/gameBoard'

class App extends Component {
  constructor(){
    super();
    this.state = {
      actorPlatformIndex: 0, // word position is always actor position + 1
      lavaPosition: 0,
      score: 0,
      timeScale: 1, // double between 0 and 1,
      gameState: 'not-started' // in-progress, game-over,
    }
  }

  render() {
    return (
      <div className="App">
        <ScoreDisplay {...this.state} />
        <GameBoard {...this.state} />
      </div>
    );
  }
}

export default App;
