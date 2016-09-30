import React, { Component } from 'react';

class Word extends Component {
    render(){
        return (
            <div className="word">this is word placed at: {this.props.position}</div>
        );
    }
}

export default Word;