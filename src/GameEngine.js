var randomWord = require('random-word-by-length');

export default function GameEngine (type) {
    function UpdateScore(state){
        var wordLength = 3;
        if (state.word){
            wordLength = state.word.length;
        }
        return state.score + wordLength * state.scoreMultiplier;
    }

    function UpdateLavaSpeed(state){
        return state.lavaSpeed + 0.1;
    }

    function UpdateActorPosition(actorPosition){
        return actorPosition + 1;
    }

    function GetNextWord(numWordsTypedSuccessfully){
        return randomWord(Math.floor(numWordsTypedSuccessfully/10) + 3);
    }

    // To be called once a word-typing engine
    this.Next = function(state){
        let res = {
            score: UpdateScore(state),
            lavaSpeed: UpdateLavaSpeed(state),
            word: GetNextWord(state.wordsTypedSuccessfully),
            actorPosition: UpdateActorPosition(state.actorPosition),
            matchedLetters: 0,
            wordsTypedSuccessfully: state.wordsTypedSuccessfully + 1
        }

        if ((res.actorPosition - state.hiddenPlatforms) >= 7){
            res.hiddenPlatforms = state.hiddenPlatforms + 1;
        }
        return res;
    };

    this.update= function(state){
        let res = {
            lavaHeight: state.lavaHeight + (state.lavaSpeed * state.timeScale) 
        };

        const actorPosition = (state.actorPosition+1) * state.gridSegmentHeight;
        var distance = actorPosition - res.lavaHeight; 
        if(distance < -15){
            res.gameState = 'game-over';
            res.timeScale = 0;
        }

        return res;
    };
}