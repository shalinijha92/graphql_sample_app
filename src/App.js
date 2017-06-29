import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import GridWall from './GridWall';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link className="header-link" to={`/cart`}>Go To Cart</Link>
        <GridWall />
      </div>
    );
  }
}

export default App;
