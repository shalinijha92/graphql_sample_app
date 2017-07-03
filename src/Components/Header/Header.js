import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount (){
        // this.props.fetchCartCount();
  }

  render() {
    return (

      <div className="App">
        <div className="App-header"> 
            <ul className="header-bar">
              <li className="header-item">
                <Link to="/gridwall" className="header-link">GridWall</Link>
              </li>
              <li className=" cart-info">
                <Link className="header-link" to={`/cart`}>Go to Cart</Link>
              </li>
            </ul>
        </div>
      </div>
    );
  }
}

export default Header;
