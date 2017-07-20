import { connect } from 'react-redux';
import { graphql , compose} from 'react-apollo';

import {addToCart} from './../../actions';
import {AddToCart} from './../../mutations/cart';
import ProductTile from './ProductTile';

const mapStateToProps = (state) => {
    return {
        cartCount: state.cartCount
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateCartCount: (cartCount) => {
            dispatch(addToCart(cartCount))
        }
    }
}

export default compose(
    graphql(AddToCart),
    connect(mapStateToProps, mapDispatchToProps)
)(ProductTile);