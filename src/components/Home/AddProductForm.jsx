import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/product/actionCreators';

const AddProductForm = () => {
    const [productName, setProductName] = useState('');
    const [category, setCategory] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const dispatch = useDispatch();

    // Currying function
    const handelChange = (setState) => (event) => {
        setState(event.target.value)
    }

    const handelAddProduct = (event) => {
        event.preventDefault();
        const productDetails = {
            name: productName,
            category: category,
            image: imageUrl,
            price: price,
            quantity: quantity
        }
        dispatch(addProduct(productDetails));
        setProductName('');
        setCategory('');
        setImageUrl('');
        setPrice('');
        setQuantity('');
    }


    return (
        <div className="formContainer">
            <h4 className="formTitle">Add New Product</h4>
            <form className="space-y-4 text-[#534F4F]" id="lws-addProductForm" onSubmit={handelAddProduct}>
                {/* <!-- product name --> */}
                <div className="space-y-2">
                    <label htmlFor="lws-inputName">Product Name</label>
                    <input className="addProductInput" id="lws-inputName" value={productName} type="text" required onChange={handelChange(setProductName)} />
                </div>
                {/* <!-- product category --> */}
                <div className="space-y-2">
                    <label htmlFor="lws-inputCategory">Category</label>
                    <input className="addProductInput" id="lws-inputCategory" value={category} type="text" required onChange={handelChange(setCategory)} />
                </div>
                {/* <!-- product image url --> */}
                <div className="space-y-2">
                    <label htmlFor="lws-inputImage">Image Url</label>
                    <input className="addProductInput" id="lws-inputImage" value={imageUrl} type="text" required onChange={handelChange(setImageUrl)} />
                </div>
                {/* <!-- price & quantity container --> */}
                <div className="grid grid-cols-2 gap-8 pb-4">
                    {/* <!-- price --> */}
                    <div className="space-y-2">
                        <label htmlFor="ws-inputPrice">Price</label>
                        <input className="addProductInput" type="number" value={price} id="lws-inputPrice" required onChange={handelChange(setPrice)} />
                    </div>
                    {/* <!-- quantity --> */}
                    <div className="space-y-2">
                        <label htmlFor="lws-inputQuantity">Quantity</label>
                        <input className="addProductInput" type="number" value={quantity} id="lws-inputQuantity" required onChange={handelChange(setQuantity)} />
                    </div>
                </div>
                {/* <!-- submit button --> */}
                <button type="submit" id="lws-inputSubmit" className="submit">Add Product</button>
            </form>
        </div>
    )
}

export default AddProductForm