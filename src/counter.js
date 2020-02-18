import React from 'react';


class Counter extends React.Component {
  state = {
    counter: 0
  }

  handleClick = () => {
    this.setState(state => {
      return {
        counter: state.counter + 1
      }
    })
  }

  render() {
    return (
      <div className="Another-App-Body">
       
          <h1>{this.state.counter}</h1>
          <button className="button" onClick={this.handleClick}>Click Me !</button>
       
      </div>
    );
  }
}

export default Counter;