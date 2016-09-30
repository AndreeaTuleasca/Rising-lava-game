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
        let res = {
            score: UpdateScore(state.score, state.currentMultiplier, state.currentWord),
            lavaSpeed: UpdateLavaSpeed(state.currentLavaSpeed),
            word: GetNextWord(state.numWordsTypedSuccessfully),
            actorPosition: UpdateActorPosition(state.actorPosition),
            matchedLetters: 0
        }

        if ((res.actorPosition - state.hiddenPlatforms) >= 7){
            res.hiddenPlatforms = state.hiddenPlatforms + 1;
        }
        return res;
    };

    // To be called by lava to update GUI
    this.UpdateDistance = function(){
        
    }

    // To be called by lava if it touches the player avatar
    this.KillPlayer = function(){
        // Toggle game over here
    };
}