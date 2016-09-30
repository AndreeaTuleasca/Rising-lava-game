var randomWord = require('random-word-by-length');

export default function GameEngine (type) {
    function UpdateScore(currentScore, currentMultiplier, currentWord){
        var wordLength = 3;
        if (currentWord){
            wordLength = currentWord.length;
        }
        return currentScore + wordLength * currentMultiplier;
    }

    function UpdateLavaSpeed(numWordsTypedSuccessfully, currentLavaSpeed){
        return currentLavaSpeed + 1;
    }

    function UpdateActorPosition(actorPosition){
        return actorPosition + 1;
    }

    function GetNextWord(numWordsTypedSuccessfully){
        return randomWord(Math.floor(numWordsTypedSuccessfully/10));
    }

    // To be called once a word-typing engine
    this.Next = function(state){
        state.currentScore = UpdateScore(state.score, state.currentMultiplier, state.currentWord);
        state.currentLavaSpeed = UpdateLavaSpeed(state.currentLavaSpeed);
        state.currentWord = GetNextWord(state.numWordsTypedSuccessfully);
        state.actorPosition = UpdateActorPosition(state.actorPosition);
        if ((state.actorPosition - state.hiddenPlatforms) >= 7){
            state.hiddenPlatforms = state.hiddenPlatforms + 2;
        }
        return state;
    };

    // To be called by lava to update GUI
    this.UpdateDistance = function(){
        
    }

    // To be called by lava if it touches the player avatar
    this.KillPlayer = function(){
        // Toggle game over here
    };
}