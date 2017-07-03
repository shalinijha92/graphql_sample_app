import React, {Component} from 'react';
import './Cart.css'


class CartComponent extends Component {
    constructor(props) {
        super(props);
        this.renderCartItem = this.renderCartItem.bind(this);
    }

    

    renderCartItem () {
        let cartList = [];
       
        this.props.cartList.map((item, index) => {
            const url = require(`../../images/${item.imageUrl}`);
            let cartItem = <div className="cart-item" key={index}>
                <img className="cart-img" src={url} alt="Card image cap" height="200" width="200"/>
                <div className="cart-block">
                    <h4 className="card-title">NAME:{item.name}</h4>
                    <p className="card-text">{item.description}</p>
                    <button className="btn btn-primary" onClick={() => this.props.removeFromCart(item._id)}>Remove
                    </button>
                </div>
                
            </div>
            cartList.push(cartItem);
        });
        return this.props.cartList.length?<div>{cartList}</div>: <div>Nothing to see here!</div>;   
    }
    render () {
        console.log(this.props)
        return (
            this.renderCartItem()
        );
    }
}
export default CartComponent;