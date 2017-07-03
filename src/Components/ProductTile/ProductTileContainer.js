import React, {Component} from 'react';
import { graphql } from 'react-apollo';

import {AddToCart} from './../../mutations/cart';
import {Cart} from './../../queries/cart'
import ProductTile from './ProductTile';

class ProductTileContainer extends Component {
    constructor(props) {
        super(props);
        this.addToCart = this.addToCart.bind(this)
    }

    addToCart (item) {
        console.log(this.props)
        this.props.mutate({ variables: item})
        .then((resp) => {
            console.log(resp)
        })
    }

    render() {
        return(
            <ProductTile item={this.props.item} handleAddToCart={this.addToCart}/>
        );
    } 
}

export default graphql(AddToCart)(ProductTileContainer);