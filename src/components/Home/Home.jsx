import React from 'react'
import Products from './Products'
import AddProductForm from './AddProductForm'

const Home = () => {
    return (
        <main className="py-16">
            <div className="productWrapper">
                {/* <!-- products container --> */}
                <Products />
                {/* <!-- products container ends --> */}
                <div>
                    {/* <!-- Product Input Form --> */}
                    <AddProductForm />
                    {/* <!-- Product Input Form Ends --> */}
                </div>
            </div>
        </main>
    )
}

export default Home