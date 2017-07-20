import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { withApollo } from 'react-apollo';
// import ApolloClient from 'apollo-client';

import {Cart} from './../../queries/cart';
import './Header.css';

class Header extends Component {
  
  componentWillMount() {
    this.props.client.query({
      query: Cart
    }).then((res) => {
      this.props.updateCartCountToStore(res.data.cartList.length);
    })
  }

  render () {
    return (

      <div className="App">
        <div className="App-header"> 
            <ul className="header-bar">
              <li className="header-item">
                <Link to="/" className="header-link">GridWall</Link>
              </li>
              <li className=" cart-info">
                <Link className="header-link" to={`/cart`}> {
                  this.props.cartCount > 1?`${this.props.cartCount} items in cart`:`${this.props.cartCount} item in cart`} 
                </Link>
              </li>
            </ul>
        </div>
      </div>
    );
  }
} 
export default withApollo(Header);
