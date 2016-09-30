import React, { Component } from 'react';
import './App.css';
import GameEngine from './GameEngine';

import GameBoard from './game/gameBoard'
import ScoreDisplay from './gui/scoreDisplay'
import DistanceDisplay from './gui/distanceDisplay'

class App extends Component {
  constructor(){
    super();
    this.gameEngine = new GameEngine();
    this.state = {
      gridSegmentHeight: 60, // constant
      actorPosition: 3, // word position is always actor position + 1
      lavaHeight: 200,
      lavaSpeed: 10,
      score: 0,
      wordsTypedSuccessfully: 0,
      distance: 0, // distance multipler * (lavaPosition - actorPlatformIndex) ??
      timeScale: 1, // double between 0 and 1,
      gameState: 'not-started', // in-progress, game-over,
      hiddenPlatforms: 0, // the number platforms that have gone out of the view
      next: this.next, // This is for the word-typing component to cal
      updateDistance: this.updateDistance, // This is for the lava to call every time it updates its position
      killPlayer: this.killPlayer // This is for the lava to call when it touches the player
    }
  }

  render() {
    return (
      <div className="App">
        <ScoreDisplay score={this.state.score}/>
        <DistanceDisplay distance={this.state.distance}/>
        <GameBoard {...this.state}/>
        <button onClick={this.state.next.bind(this)}>Move up</button>
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
