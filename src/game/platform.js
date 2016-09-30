var classNames = require('classnames');

import React, { Component } from 'react';

class Platform extends Component {
    render(){
      const className = classNames([
        "platform",
        "sprite",
        "row-"+this.props.index,
        "col-"+(this.props.position % 2)
      ]);

      return (
            <div className={className}></div>
        );
    }
}

export default Platform;
