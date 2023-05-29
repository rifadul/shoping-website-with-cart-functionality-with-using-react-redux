import { ADDTOCART, DECREASECARTQUANTITY, DELETECARTITEM, INCREASECARTQUANTITY } from "./actionTypes"

export const addToCart = (product) => {
    return {
        type: ADDTOCART,
        payload: product
    }
}


export const increaseCartQuantity = (cartId) => {
    return {
        type: INCREASECARTQUANTITY,
        payload: cartId
    }
}

export const decreaseCartQuantity = (cartId) => {
    return {
        type: DECREASECARTQUANTITY,
        payload: cartId
    }
}


export const deleteCartItem = (cartId) => {
    return {
        type: DELETECARTITEM,
        payload: cartId
    }
}