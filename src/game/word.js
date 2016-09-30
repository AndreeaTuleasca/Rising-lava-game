import React, { Component } from 'react';

class Word extends Component {
    constructor(){
        super();
        this.word= "blablabla";
        this.state = {typedWord: "bla"};
    }
    render(){
        return (
            <div className="word">this is word placed at: {this.props.position}
                <div>
                    <input type="text" value={this.state.typedWord} onChange={this.handleChange.bind(this)}/>
                </div>
            </div>
        );
    }

    handleChange(event){
        // let word = event.target.value
        // let lastLetterIndex = typedWord.length-1;
        // let lastLetter = typedWord.charAt(lastLetterIndex);
        this.setState({typedWord: event.target.value}); 
    }
}

export default Word;