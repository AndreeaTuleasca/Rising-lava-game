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
      word: this.gameEngine.GetNextWord(0),
      matchedLetters: 0,
      gridSegmentHeight: 60, // constant
      actorPosition: 3, // word position is always actor position + 1
      lavaHeight: 100,
      lavaSpeed: 1,
      score: 0,
      highestScore: +localStorage.getItem('highestScore'),
      wordsTypedSuccessfully: 0,
      scoreMultiplier: 1,
      distance: 0, // distance multipler * (lavaPosition - actorPlatformIndex) ??
      timeScale: 0, // double between 0 and 1,
      gameState: 'not-started', // in-progress, game-over,
      hiddenPlatforms: 0, // the number platforms that have gone out of the view
      next: this.next // This is for the word-typing component to cal
    }
  }

  update(){ this.updateState(this.gameEngine.update); }

  updateState(fn){
    var updatedState = fn(this.state);
    this.setState(updatedState);
  }

  componentDidMount(){
    setInterval(this.update.bind(this), 50);
    document.addEventListener('keyup', this.checkWord.bind(this));
  }

  componentWillUnmout(){
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
    if(this.state.gameState === 'not-started'){
      let nextState = this.gameEngine.startGame();
      this.setState(nextState);
    }
    if(this.state.gameState !== 'in-progress'){
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
  next(){
    const nextState = this.gameEngine.Next(this.state);
    this.setState(nextState);
  }
}

export default App;
