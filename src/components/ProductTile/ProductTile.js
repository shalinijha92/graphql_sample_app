import React, {Component} from 'react';

import './ProductTile.css';


class ProductTile extends Component {
	constructor (props) {
		super(props);
		this.addToCart = this.addToCart.bind(this);


	}

	addToCart (item) {
        this.props.mutate({ variables: this.props.item})
        .then((resp) => {
			const currentCount = (this.props.cartCount)+1;
            this.props.updateCartCount(currentCount);
        })
    }


	render() {
		const url = require(`../../images/${this.props.item.imageUrl}`);
		return(
			<div className="card col-xs-6 col-sm-6 col-md-4 col-lg-3 product-tile">
				<img className="card-img-top" src={url} alt={this.props.item.name} />
				<div className="card-block">
					<h4 className="card-title">{this.props.item.name}</h4>
					{
						this.props.item.discountPrice?<p className="card-text">Discounted Price: {this.props.item.discountPrice}</p>
						:<p className="card-text">Price: {this.props.item.price}</p>	
					}
					
				</div>
				<button className="btn btn-primary" onClick={this.addToCart}> 
					{
						false?`Added`:`Add to Cart`
					}
				</button>
			</div>
		);
	}
}
export default ProductTile;
