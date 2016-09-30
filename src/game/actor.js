var classNames = require('classnames');

import React, { Component } from 'react';

class Actor extends Component {
    render(){
        const className = classNames([
          "actor",
          "sprite",
          "row-"+this.props.position,
          "col-"+(this.props.position % 2)
        ]);
        return (
            <div className={className}></div>
        );
    }
}

export default Actor;
