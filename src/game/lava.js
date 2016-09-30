import React, { Component } from 'react';

class Lava extends Component {
    render(){
      const style = { height: this.props.height };
        return (
            <div style={style} className="lava sprite"></div>
        );
    }
}

export default Lava;
