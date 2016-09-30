import React, { Component } from 'react';

class ScoreDisplay extends Component {
    render(){
        var currentScore = this.props.score;
        return (
            <div className="score-display">
                {this.currentScore}
            </div>
        );
    }
}

export default ScoreDisplay;