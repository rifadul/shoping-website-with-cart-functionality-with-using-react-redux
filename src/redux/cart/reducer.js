import { calculateTotalCartItem, calculateTotalPrice, generateNextId } from "../../components/utils/utils";
import { ADDTOCART, DECREASECARTQUANTITY, DELETECARTITEM, INCREASECARTQUANTITY } from "./actionTypes";
import initialState from "./initialState";


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDTOCART:
            const isProductInCart = state.cartItem.find(item => item?.product.id === action.payload.id);
            if (isProductInCart) {
                const updateCartItem = state.cartItem.map(item => (
                    item?.product.id === action.payload.id ? {
                        ...item,
                        quantity: item.quantity + 1,
                        totalPrice: (item.quantity + 1) * action.payload.price
                    } : item
                ))

                // const updatedTotalPrice = calculateTotalPrice(updateCartItem);
                return {
                    ...state,
                    cartItem: [...updateCartItem],
                    total: calculateTotalPrice(updateCartItem)
                }

            } else {
                const updateCartWithNewItem = [
                    ...state.cartItem,
                    {
                        id: generateNextId(state.cartItem),
                        quantity: 1,
                        totalPrice: action.payload.price,
                        product: { ...action.payload }
                    }
                ]

                // const updatedTotalPrice = calculateTotalPrice(updateCartWithNewItem);

                return {
                    ...state,
                    cartItem: [...updateCartWithNewItem],
                    total: calculateTotalPrice(updateCartWithNewItem)
                }
            }

        case INCREASECARTQUANTITY:
            const updateCartQuantityAfterIncrease = state.cartItem.map(item => (
                item.id === action.payload ? {
                    ...item,
                    quantity: item.quantity + 1,
                    totalPrice: (item.quantity + 1) * (item.product.price)
                } : item
            ))

            // const updatedTotalPrice = calculateTotalPrice(updateCartQuantityAfterIncrease);
            return {
                ...state,
                cartItem: [...updateCartQuantityAfterIncrease],
                total: calculateTotalPrice(updateCartQuantityAfterIncrease)
            }

        case DECREASECARTQUANTITY:
            const updateCartQuantityAfterDecrease = state.cartItem.map(item => (
                item.id === action.payload ? {
                    ...item,
                    quantity: item.quantity - 1,
                    totalPrice: (item.quantity - 1) * (item.product.price)
                } : item
            ))

            // const calculateTotalPrice = calculateTotalPrice(updateCartQuantityAfterDecrease);
            return {
                ...state,
                cartItem: [...updateCartQuantityAfterDecrease],
                total: calculateTotalPrice(updateCartQuantityAfterDecrease)
            }

        case DELETECARTITEM:
            const updateCartQuantityAfterDelete = state.cartItem.filter(item => item.id !== action.payload)

            return {
                ...state,
                cartItem: [...updateCartQuantityAfterDelete],
                total: calculateTotalPrice(updateCartQuantityAfterDelete)
            }

        default:
            return state;
    }
}

export default cartReducer;