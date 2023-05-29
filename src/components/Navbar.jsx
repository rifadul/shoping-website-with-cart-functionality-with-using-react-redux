import React from 'react'
import logo from '../assets/logo.png'
import { useSelector } from 'react-redux'
import { calculateTotalCartItem } from './utils/utils';


const Navbar = ({ handelNavigation }) => {
    const cart = useSelector(state => state.cart);
    return (
        <nav className="bg-[#171C2A] py-4">
            <div className="navBar">
                {/* <img src={logo} alt="LWS" className="max-w-[140px] cursor-pointer" onClick={() => handelNavigation(true)} /> */}
                <p className="text-xl cursor-pointer text-green-300" id="lws-home" onClick={() => handelNavigation(true)}> SM Shop </p>


                <div className="flex gap-4">
                    <p className="navHome cursor-pointer" id="lws-home" onClick={() => handelNavigation(true)}> Home </p>
                    <p className="navCart cursor-pointer" id="lws-cart" onClick={() => handelNavigation(false)}>
                        <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                        <span id="lws-totalCart">{calculateTotalCartItem(cart.cartItem)}</span>
                    </p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar