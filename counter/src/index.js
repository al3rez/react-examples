import React, { Component } from 'react';
import { render } from 'react-dom';

class Counter extends Component {
  state = {
    value: 1,
  };

  increment = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <>
        <div>Counter: {this.state.value}</div>
        <input type="button" value="++" onClick={this.increment} />
      </>
    );
  }
}

render(<Counter />, document.getElementById('root'));
