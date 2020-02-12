import React from 'react';
import Tick from './Tick';



class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div>
      <Tick name = {this.state.isToggleOn ? 'Molly' : 'Cindy'}/>
      <button className="btn btn-secondary" onClick={this.handleClick} >
        Toggle This: {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
      </div>
    );
  }
}

export default Toggle;
