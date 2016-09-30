import React, { Component } from 'react';

class ScoreDisplay extends Component {
    render(){
        return (
            <div className="score-display">
            Score: {this.props.score}
            { this.props.highestScore ? (" / Highest: " + this.props.highestScore) : "" }
            </div>
        );
    }
}

export default ScoreDisplay;
