import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import GridWallContainer from '../GridWall/GridWallContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Link className="header-link" to={`/cart`}>Go To Cart</Link>*/}
        <GridWallContainer />
      </div>
    );
  }
}

export default App;
