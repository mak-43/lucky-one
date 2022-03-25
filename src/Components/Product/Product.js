import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = ({product,handleAddToCart}) => {

    const {id,name,price,img}=product

   

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
               <p className='product-name'> {name}</p>
               <p> {id}</p>
               <p> ${price}</p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
               <p >ADD TO CART</p>
               <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            
        </div>
    );
};

export default Product;