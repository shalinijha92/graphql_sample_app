import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (

      <div className="App">
        <div className="App-header"> 
            <ul className="header-bar">
              <li className="header-item">
                <Link to="/" className="header-link">GridWall</Link>
              </li>
              <li className=" cart-info">
                <Link className="header-link" to={`/cart`}>Go to Cart</Link>
              </li>
            </ul>
        </div>
      </div>
    );
}

export default Header;
