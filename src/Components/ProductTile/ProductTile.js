import React, {Component} from 'react';
import { graphql } from 'react-apollo';

// import './ProductTile.css';
import {AddToCart} from './../../mutations/cart';
import {Cart} from './../../queries/cart'

class ProductTile extends Component {
	constructor (props) {
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
			<div className="card product-tile">
				<img className="card-img-top" src={this.props.item.imageUrl} alt={this.props.item.name} />
				<div className="card-block">
					<h4 className="card-title">{this.props.item.name}</h4>
					{
						this.props.item.discountPrice?<p className="card-text">Discounted Price: {this.props.item.discountPrice}</p>
						:<p className="card-text">Price: {this.props.item.price}</p>	
					}
					
				</div>
				<button className="btn btn-primary" onClick={() => this.addToCart(this.props.item)}> 
					{
						false?`Added`:`Add to Cart`
					}
				</button>
			</div>
		);
	}
}
export default graphql(AddToCart)(ProductTile);
