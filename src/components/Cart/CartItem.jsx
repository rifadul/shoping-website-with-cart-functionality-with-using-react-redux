import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCartQuantity, deleteCartItem, increaseCartQuantity } from '../../redux/cart/actionCreators';
import { decreaseProductQuantity, increaseProductQuantity, updateProductWithInitialQuantity } from '../../redux/product/actionCreators';

const CartItem = ({ item }) => {
    const products = useSelector(state => state.products);
    const { id, quantity, totalPrice, product } = item;
    const productDetails = products.find(item => item.id === product.id)
    const dispatch = useDispatch();

    const handelIncreaseCartQuantity = (cartId, productId, type) => {
        if (type === 'incrementQuantity') {
            dispatch(increaseCartQuantity(cartId))
            dispatch(decreaseProductQuantity(productId))
        } else {
            dispatch(decreaseCartQuantity(cartId))
            dispatch(increaseProductQuantity(productId))
        }
    }

    const handelDeleteCartItem = (cartId, productId, initialQuantity) => {
        // console.log('cartId, productId, initialQuantity', cartId, productId, initialQuantity);
        dispatch(deleteCartItem(cartId));
        dispatch(updateProductWithInitialQuantity(productId, initialQuantity))
    }
    return (
        <div className="cartCard">
            <div className="flex items-center col-span-6 space-x-6">
                {/* <!-- cart image --> */}
                <img className="lws-cartImage" src={productDetails.image} alt="product" />
                {/* <!-- cart item info --> */}
                <div className="space-y-2">
                    <h4 className="lws-cartName">{productDetails.name}</h4>
                    <p className="lws-cartCategory">{productDetails.category}</p>
                    <p>BDT <span className="lws-cartPrice">{productDetails.price}</span></p>
                    <p>QYT <span className="lws-cartPrice">{productDetails.quantity}</span></p>
                </div>
            </div>
            <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                {/* <!-- amount buttons --> */}
                <div className="flex items-center space-x-4">
                    <button className="lws-incrementQuantity" disabled={productDetails.quantity <= 0} onClick={() => handelIncreaseCartQuantity(id, product.id, 'incrementQuantity')}>
                        <i className="text-lg fa-solid fa-plus"></i>
                    </button>
                    <span className="lws-cartQuantity">{quantity}</span>
                    <button className="lws-decrementQuantity" disabled={quantity <= 1} onClick={() => handelIncreaseCartQuantity(id, product.id, 'decrementQuantity')}>
                        <i className="text-lg fa-solid fa-minus"></i>
                    </button>
                </div>
                {/* <!-- price --> */}
                <p className="text-lg font-bold">BDT <span className="lws-calculatedPrice">{totalPrice}</span></p>
            </div>
            {/* <!-- delete button --> */}
            <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                <button className="lws-removeFromCart" onClick={() => handelDeleteCartItem(id, product.id, product.quantity)}>
                    <i className="text-lg text-red-400 fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    )
}

export default CartItem