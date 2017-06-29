import React, {Component} from 'react';
import { graphql } from 'react-apollo';

import {Products} from './queries/products';
import ProductTile from './ProductTile'
class GridWall extends Component {

    constructor (props) {
        super (props);
        this.renderProductTile = this.renderProductTile.bind(this);
    }
    renderProductTile() {
        let productTile = [];
        this.props.data.products.forEach(function(obj, index) {
			let product = <ProductTile item={obj}  key={index}/>
			productTile.push(product);
		}.bind(this));
        return <div>{productTile}</div>;
    }
    render () {
        
        return (
            this.props.data.loading?<div>Loading!</div>:this.renderProductTile()
        );
        
        
    }
}


export default graphql(Products)(GridWall);