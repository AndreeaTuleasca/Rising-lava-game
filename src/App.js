import React, { Component } from 'react';
import './App.css';

import GameBoard from './game/gameBoard'

class App extends Component {
  constructor(){
    super();
    this.state = {
      actorPosition: 7, // word position is always actor position + 1
      lavaPosition: 0,
      score: 0,
      timeScale: 1, // double between 0 and 1,
      gameState: 'not-started', // in-progress, game-over,
      hiddenPlatforms: 2, // the number platforms that have gone out of the view
    }
  }

  render() {
    return (
      <div className="App">
        <GameBoard {...this.state} />
      </div>
    );
  }
}

export default App;
