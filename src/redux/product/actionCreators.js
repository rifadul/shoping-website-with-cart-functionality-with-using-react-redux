import { ADDPRODUCT, INCREASEPRODUCTQUANTITY, DECREASEPRODUCTQUANTITY, UPDATEPRODUCTWITHINITIALQUANTITY } from "./actionTypes"

export const addProduct = (productDetails) => {
    return {
        type: ADDPRODUCT,
        payload: { ...productDetails }
    }
}

export const increaseProductQuantity = (productId) => {
    return {
        type: INCREASEPRODUCTQUANTITY,
        payload: productId
    }
}

export const decreaseProductQuantity = (productId) => {
    return {
        type: DECREASEPRODUCTQUANTITY,
        payload: productId
    }
}

export const updateProductWithInitialQuantity = (productId, initialQuantity) => {
    return {
        type: UPDATEPRODUCTWITHINITIALQUANTITY,
        payload: {
            productId, initialQuantity
        }
    }
}