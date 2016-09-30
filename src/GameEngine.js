var randomWord = require('random-word-by-length');

export default function GameEngine (type) {
    function UpdateScore(currentScore, currentMultiplier, currentWord){
        return currentScore + currentWord.length * currentMultiplier;
    }

    function UpdateLavaSpeed(numWordsTypedSuccessfully, currentLavaSpeed){
        return currentLavaSpeed + 1;
    }

    function UpdateActorPosition(){
        
    }

    function GetNextWord(numWordsTypedSuccessfully){
        return randomWord(Math.floor(numWordsTypedSuccessfully/10));
    }

    // To be called once a word-typing engine
    this.Next = function(state){
        state.currentScore = UpdateScore(state.score, state.currentMultiplier, state.currentWord);
        state.currentLavaSpeed = UpdateLavaSpeed(state.currentLavaSpeed);
        state.currentWord = GetNextWord(state.numWordsTypedSuccessfully);
        UpdateActorPosition();
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