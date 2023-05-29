import React from 'react'
import Product from './Product'
import { useSelector } from 'react-redux'

const Products = () => {
    const products = useSelector(state => state.products)
    return (
        <div>
            {/* <!-- product item --> */}
            {
                products.length > 0
                    ? <div className="productContainer" id="lws-productContainer">
                        {products.map((product, key) => <Product product={product} key={key} />)}
                    </div>
                    : <h4 className="lws-productName">No Product Found. <span className='text-red-500'>Please add new product.</span></h4>
            }

            {/* <!-- product item ends --> */}
        </div>
    )
}

export default Products