import React, {Component} from 'react';
import {productAdded} from '../../subscriptions/cart';
import './Cart.css'


class CartComponent extends Component {
    constructor(props) {
        super(props);
        this.renderCartItem = this.renderCartItem.bind(this);
        this.removeItemFromCart = this.removeItemFromCart.bind(this)
    }

    componentDidMount (){
        setTimeout(() => {
            this.props.data.refetch();
        }, 10)
        
    }

    componentWillMount () {
        this.props.data.subscribeToMore({
            document: productAdded,
            updateQuery: (prev, {subscriptionData}) => {
                if (!subscriptionData.data) {
                    return prev;
                }else {
                    return subscriptionData.data.productAdded;
                }
            }
        })
    }


    removeItemFromCart (_id) {
        this.props.mutate({variables: {_id}})
        .then((resp) => {
            this.props.data.refetch()
            this.props.updateCartCount()
        })
    }

    renderCartItem () {
        let cartList = [];
       
        this.props.data.cartList.map((item, index) => {
            const url = require(`../../images/${item.imageUrl}`);
            let cartItem = <div className="cart-item" key={index}>
                <img className="cart-img" src={url} alt={item.name} height="200" width="200"/>
                <div className="cart-block">
                    <h4 className="card-title">NAME:{item.name}</h4>
                    <p className="card-text">{item.description}</p>
                    <button className="btn btn-primary" onClick={() => this.removeItemFromCart(item._id)}>Remove
                    </button>
                </div>
                
            </div>
            cartList.push(cartItem);
        });
        return this.props.data.cartList.length?<div>{cartList}</div>: <div>Nothing to see here!</div>;   
    }

    render () {
        console.log('In render')
        return (
            this.props.data.loading?<div>Loading!</div>:this.renderCartItem()
        );
    }
}
export default CartComponent;