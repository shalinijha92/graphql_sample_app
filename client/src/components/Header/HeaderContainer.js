import {connect} from 'react-redux';
import Header from './Header';
import {updateDefaultCart} from './../../actions';

const mapStateToProps = ( state ) => {
    return {
        cartCount : state.cartCount
    }
}
const mapDispatchToProps = ( dispatch, ownProps ) => {
    return {
        updateCartCountToStore : (cartCount) => {
            dispatch(updateDefaultCart(cartCount));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);