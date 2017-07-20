export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_DEFAULT_CART = "UPDATE_DEFAULT_CART";

export const addToCart = (cartCount) => {
    return {type: ADD_TO_CART, cartCount};
}

export const removeFromCart = (cartCount) => {
    return {type: REMOVE_FROM_CART, cartCount};
}

export const updateDefaultCart = (cartCount) => {
    return {type: UPDATE_DEFAULT_CART, cartCount};
}