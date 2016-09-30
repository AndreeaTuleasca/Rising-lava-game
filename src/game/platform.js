import React, { Component } from 'react';

class Platform extends Component {
    render(){
        return (
            <div className="platform">this is platform {this.props.index}</div>
        );
    }
}

export default Platform;