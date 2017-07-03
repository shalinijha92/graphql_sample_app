import React, {Component} from 'react';
import { graphql } from 'react-apollo';

import {RemoveFromCart} from './../../mutations/cart';
import {Cart} from './../../queries/cart';
import CartComponent from './Cart';

class CartContainer extends Component {
    constructor(props) {
        super(props);
        this.removeItemFromCart = this.removeItemFromCart.bind(this)
    }

    componentDidMount (){
        setTimeout(() => {
            this.props.data.refetch();
        }, 10)
        
    }
    removeItemFromCart (_id) {
        console.log(_id)
        this.props.mutate({variables: {_id}})
        .then((resp) => {
            console.log('Hello!')
            this.props.data.refetch()
        })
    }

    render() {
        console.log(this.props.data)
        return(
            this.props.data.loading?<div>Loading!</div>:<CartComponent cartList={this.props.data.cartList} removeFromCart={this.removeItemFromCart}/>
        );
    } 
}

export default graphql(RemoveFromCart)(
    graphql(Cart)(CartContainer)
);