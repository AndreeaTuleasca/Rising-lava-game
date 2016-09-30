import React, { Component } from 'react';

class DistanceDisplay extends Component {
    render(){
        return (
            <div className="distance-display">
            Distance: {this.props.distance > 0 ? this.props.distance : "Way too close!"}
            </div>
        );
    }
}

export default DistanceDisplay;