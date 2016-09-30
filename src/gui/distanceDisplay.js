import React, { Component } from 'react';

class DistanceDisplay extends Component {
    render(){
        return (
            <div className="distance-display">
            Distance: {this.props.distance}
            </div>
        );
    }
}

export default DistanceDisplay;