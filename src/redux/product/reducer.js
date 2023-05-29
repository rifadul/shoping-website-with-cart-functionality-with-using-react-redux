import { generateNextId } from "../../components/utils/utils";
import { ADDPRODUCT, DECREASEPRODUCTQUANTITY, INCREASEPRODUCTQUANTITY, UPDATEPRODUCTWITHINITIALQUANTITY } from "./actionTypes";
import initialState from "./initialState";

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDPRODUCT:
            return [
                ...state,
                {
                    id: generateNextId(state),
                    ...action.payload
                }
            ]
        case INCREASEPRODUCTQUANTITY:
            const increaseProductQuantity = state.map(item => (
                item?.id === action.payload ? {
                    ...item,
                    quantity: item.quantity + 1,
                } : item
            ))
            return [...increaseProductQuantity]

        case DECREASEPRODUCTQUANTITY:
            const decreaseProductQuantity = state.map(item => (
                item?.id === action.payload ? {
                    ...item,
                    quantity: item.quantity - 1,
                } : item
            ))
            return [...decreaseProductQuantity]

        case UPDATEPRODUCTWITHINITIALQUANTITY:
            const { productId, initialQuantity } = action.payload
            console.log('productId, initialQuantity', productId, initialQuantity);
            const updateProductWithInitialQuantity = state.map(item => (
                item?.id === productId ? {
                    ...item,
                    quantity: initialQuantity,
                } : item
            ))
            return [...updateProductWithInitialQuantity]

        default:
            return state;
    }

}


export default productReducer;