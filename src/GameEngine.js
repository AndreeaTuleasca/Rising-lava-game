var randomWord = require('random-word-by-length');

export default function GameEngine (type) {

    this.setInitialState = () => {
        return {
            word: getNextWord(0),
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
    };

    // To be called once a word-typing engine
    this.next = function(state){
        let res = {
            score: updateScore(state),
            lavaSpeed: updateLavaSpeed(state),
            word: getNextWord(state.wordsTypedSuccessfully),
            actorPosition: updateActorPosition(state.actorPosition),
            matchedLetters: 0,
            wordsTypedSuccessfully: state.wordsTypedSuccessfully + 1,
            scoreMultiplier: 1
        }

        if ((res.actorPosition - state.hiddenPlatforms) >= 7){
            res.hiddenPlatforms = state.hiddenPlatforms + 1;
        }
        return res;
    };

    this.update= (state)=>{
        var lavaHeight = state.lavaHeight + (state.lavaSpeed * state.timeScale);

        const actorPosition = (state.actorPosition+1) * state.gridSegmentHeight;
        var distance = Math.round(actorPosition - lavaHeight);

        let res = {
            lavaHeight: lavaHeight,
            distance: distance
        };

        if(distance <= 0){
             res.gameState = 'game-over';
             res.timeScale = 0;
             res.highestScore = Math.max(state.score, state.highestScore || 0)
        }

        if(res.highestScore) {
          localStorage.setItem('highestScore', res.highestScore);
        }

        return res;
    };

    this.startGame = function(){
        return {
            timeScale: 1,
            gameState: 'in-progress'
        };
    }

    this.togglePause = function(state){
        return {
            gameState: state.timeScale === 0 ? "in-progress" : "paused",
            timeScale: state.timeScale === 0 ? 1 : 0
        };
    }

    this.skipWords = (state, wordsNo) => {
        let lavaSpeed = state.lavaSpeed;
        let actorPosition = state.actorPosition;     
        for(var i=0;i<=wordsNo;i++){
            state = this.next(state);
        }
        state.lavaSpeed = lavaSpeed;
        state.actorPosition = actorPosition +3;
        return state;
    }

    function updateScore(state){
        var wordLength = 3;
        if (state.word){
            wordLength = state.word.length;
        }
        return state.score + wordLength * state.scoreMultiplier;
    }

    function updateLavaSpeed(state){
        return state.lavaSpeed + 0.05;
    }

    function updateActorPosition(actorPosition){
        return actorPosition + 1;
    }

    function getNextWord(numWordsTypedSuccessfully){
        return randomWord(Math.floor(numWordsTypedSuccessfully/10) + 3);
    }

    

    
}
