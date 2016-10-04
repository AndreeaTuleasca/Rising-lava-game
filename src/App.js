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
  }

  componentWillMount(){
    this.setState(this.gameEngine.setInitialState());
  }

  componentDidMount(){
    setInterval(this.update.bind(this), 50);
    document.addEventListener('keyup', this.checkWord.bind(this));
  }

  componentWillUnmount(){
    document.removeEventListener('keyup', this.checkWord.bind(this));
  }

  render() {
    return (
      <div className="App">
        <div className="game-info">
          <ScoreDisplay score={this.state.score} highestScore={this.state.highestScore}/>
          <DistanceDisplay distance={this.state.distance}/>
        </div>
        <GameBoard {...this.state}/>
      </div>
    );
  }

  checkWord(event){
    if ((this.state.gameState === 'in-progress' || this.state.gameState === 'paused' ) && event.key === "Escape"){
      let nextState = this.gameEngine.togglePause(this.state);
      this.setState(nextState);
    }

    if(this.state.gameState === 'game-over' && event.key === "Enter"){
        this.updateState(this.gameEngine.setInitialState);
        return;
    }

    if(this.state.gameState === 'not-started'){
      let nextState = this.gameEngine.startGame();
      this.setState(nextState);
    }

    if(this.state.gameState !== 'in-progress' || this.state.timeScale === 0 ){
      return;
    }

    let matchedLetters = this.state.word.charAt(this.state.matchedLetters) === event.key ?
      this.state.matchedLetters + 1:
      0;
    this.setState({matchedLetters});

    if(this.state.word.length === matchedLetters){
        this.next();
    }
  }

  update(){this.updateState(this.gameEngine.update);}

  next(){this.updateState(this.gameEngine.next);}

  updateState(fn){
    var updatedState = fn(this.state);
    this.setState(updatedState);
  }
}

export default App;
