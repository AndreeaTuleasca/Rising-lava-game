import React, { Component } from 'react';

class Actor extends Component {
    render(){
        return (
            <div className="actor">this is actor placed at: {this.props.position}</div>
        );
    }
}

export default Actor;