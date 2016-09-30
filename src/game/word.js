var classNames = require('classnames');

import React, { Component } from 'react';

class Word extends Component {
    render(){
      const className = classNames([
        "word",
        "sprite",
        "row-"+this.props.index,
        "col-"+(this.props.position % 2)
      ]);
        return (
            <div className={className}>foobar</div>
        );
    }
}

export default Word;
