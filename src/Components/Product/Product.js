import React from 'react';
import './Product.css'
const Product = ({product}) => {

    const {id,name,price,img}=product


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
               <p className='product-name'> {name}</p>
               <p> {id}</p>
               <p> ${price}</p>
            </div>
            <button className='btn-cart'>
               <p >Add to Cart</p>
            </button>
            
        </div>
    );
};

export default Product;