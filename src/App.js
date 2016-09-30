import React, { Component } from 'react';
import './App.css';
import GameEngine from './GameEngine';

import GameBoard from './game/gameBoard'

class App extends Component {
  constructor(){
    super();
    this.gameEngine = new GameEngine();
    this.state = {
      actorPlatformIndex: 0, // word position is always actor position + 1
      lavaPosition: 0,
      lavaSpeed: 10,
      score: 0,
      wordsTypedSuccessfully: 0,
      timeScale: 1, // double between 0 and 1,
      gameState: 'not-started', // in-progress, game-over,
      next: this.next, // This is for the word-typing component to cal
      updateDistance: this.updateDistance, // This is for the lava to call every time it updates its position
      killPlayer: this.killPlayer // This is for the lava to call when it touches the player
    }
  }

  render() {
    return (
      <div className="App">
        <GameBoard {...this.state}/>
      </div>
    );
  }

  next(){
    const nextState = this.gameEngine.Next(this.state);
    this.setState({state: nextState});
  }

  updateDistance(){
    const nextState = this.gameEngine.UpdateDistance(this.state);
    this.setState({state: nextState});
  }

  killPlayer(){
    const nextState = this.gameEngine.KillPlayer(this.state);
    this.setState({state: nextState});
  }
}

export default App;
