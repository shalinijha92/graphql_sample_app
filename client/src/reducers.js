import {ADD_TO_CART, REMOVE_FROM_CART, UPDATE_DEFAULT_CART} from './actions';

export const defaultStore = {
    cartCount: 0
}

export const cartCount = (state=0, action) => {
    switch(action.type){
        case ADD_TO_CART:
            return ++state;
        case REMOVE_FROM_CART:
            return --state;
        case UPDATE_DEFAULT_CART:
            return action.cartCount;
        default:
            return state;
    }
}

export const gwData = (state=[], action) => {
    switch(action.type){
        default:
            return state;
    }
}
