import { connect } from 'react-redux';
import { graphql , compose} from 'react-apollo';

import { updateDefaultCart } from './../../actions';

import {RemoveFromCart} from './../../mutations/cart';
import {Cart} from './../../queries/cart';
import CartComponent from './Cart';

const mapStateToProps = (state) => {
    return {
        cartCount: state.cartCount
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateCartCount: (cartCount) => {
            dispatch(updateDefaultCart(cartCount))
        }
    }
}

export default compose(
    graphql(RemoveFromCart),
    graphql(Cart),
    connect(mapStateToProps, mapDispatchToProps)
)(CartComponent);