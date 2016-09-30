var classNames = require('classnames');

import React, { Component } from 'react';

class Word extends Component {
    constructor(){
        super();
        this.word= "blablabla";
        this.state = {typedWord: "bla"};
    }
    render(){
      const className = classNames([
        "word",
        "sprite",
        "row-"+this.props.index,
        "col-"+(this.props.position % 2)
      ]);
        return (
            <div className="word">this is word placed at: {this.props.position}
                <div>
                    <input type="text" value={this.state.typedWord} onChange={this.handleChange.bind(this)}/>
                </div>
            </div>
        );
    }

    handleChange(event){
         let word = event.target.value;
         let lastLetterIndex = word.length-1;
         let lastLetter = word.charAt(lastLetterIndex);
         if(this.word.charAt(lastLetterIndex) === lastLetter){
            this.setState({typedWord: event.target.value}); 
         }
         if(this.word === word){
             console.log('word correct');
         }
    }
}

export default Word;
