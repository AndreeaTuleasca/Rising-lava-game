import React, { Component } from 'react';

class ScoreDisplay extends Component {
    render(){
        return (
            <div className="score-display">
            Score: {this.props.score}
            </div>
        );
    }
}

export default ScoreDisplay;