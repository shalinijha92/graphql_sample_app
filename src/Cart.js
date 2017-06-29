import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import {RemoveFromCart} from './mutations/cart';
import {Cart} from './queries/cart';

class CartComponent extends Component {
    constructor(props) {
        super(props);
        this.renderCartItem = this.renderCartItem.bind(this);
        this.removeItemFromCart = this.removeItemFromCart.bind(this)
    }

    componentDidMount (){
        console.log(this.props)
        this.props.data.refetch();
    }
    removeItemFromCart (_id) {
        console.log(_id)
        this.props.mutate({variables: {_id}})
        .then((resp) => {
            console.log('Hello!')
            this.props.data.refetch()
        })
    }

    renderCartItem () {
        let cartList = [];
        this.props.data.cartList.map((item, index) => {
            let cartItem = <div className="card mb-3 cart-item" key={index}>
                <img className="card-img-top" src={item.imageUrl} alt="Card image cap" height="200" width="200"/>
                <div className="card-block">
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
        const {data} = this.props;
        return (
            data.loading?<div>Loading!</div>:this.renderCartItem()
        );
    }
}
export default graphql(RemoveFromCart)(
    graphql(Cart)(CartComponent)
);