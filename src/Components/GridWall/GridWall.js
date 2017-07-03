import React, {Component} from 'react';

import ProductTileContainer from '../ProductTile/ProductTileContainer'
class GridWall extends Component {

    constructor (props) {
        super (props);
        this.renderProductTile = this.renderProductTile.bind(this);
    }
    
    renderProductTile() {
        let productTile = [];
        this.props.productList.forEach(function(obj, index) {
			let product = <ProductTileContainer item={obj}  key={index}/>
			productTile.push(product);
		}.bind(this));
        return <div>{productTile}</div>;
    }

    render () {
        return (
            this.renderProductTile()
        );
        
        
    }
}


export default GridWall;