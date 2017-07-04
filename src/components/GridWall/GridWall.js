import React, {Component} from 'react';

import ProductTileContainer from '../ProductTile/ProductTileContainer'
class GridWall extends Component {

    constructor (props) {
        super (props);
    }
    
    renderProductTile() {
        let productTile = [];
        this.props.productList.forEach(function(obj, index) {
			let product = <ProductTileContainer item={obj}  key={index}/>
			productTile.push(product);
		}.bind(this));
        return (<div className="container">
                    <div className="flex-row row">
                        {productTile}
                    </div>
        </div>);
    }

    render () {
        return (
            this.renderProductTile()
        );
        
        
    }
}


export default GridWall;