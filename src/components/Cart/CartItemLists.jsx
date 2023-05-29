import React from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'

const CartItemLists = () => {
    const cart = useSelector(state => state.cart);
    return (
        <div className="space-y-6">
            {
                cart?.cartItem.length > 0 ? cart.cartItem.map((item, key) => <CartItem key={key} item={item} />) : <h4 className="lws-productName">No Cart Item Found. <span className='text-red-500'>Please add product in cart.</span></h4>
            }
        </div>
    )
}

export default CartItemLists