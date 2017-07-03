import React, {Component} from 'react';
import { graphql } from 'react-apollo';

import './ProductTile.css';


class ProductTile extends Component {
	constructor (props) {
		super(props);

	}

	render() {
		return(
			<div className="card product-tile">
				<img className="card-img-top" src={this.props.item.imageUrl} alt={this.props.item.name} />
				<div className="card-block">
					<h4 className="card-title">{this.props.item.name}</h4>
					{
						this.props.item.discountPrice?<p className="card-text">Discounted Price: {this.props.item.discountPrice}</p>
						:<p className="card-text">Price: {this.props.item.price}</p>	
					}
					
				</div>
				<button className="btn btn-primary" onClick={() => this.props.handleAddToCart(this.props.item)}> 
					{
						false?`Added`:`Add to Cart`
					}
				</button>
			</div>
		);
	}
}
export default ProductTile;
