import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {

    const [products,setProducts]=useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div className='shop-container'>
            <div>
                <h1>Confused Buyer</h1>
                <h3>Choose 4 Clothes</h3>
            </div>
            <div className='products-container'>
                <div className='product-container'>
                  {

                      products.map(product=><Product
                       key={product.id} 
                        product={product}
                      ></Product>)
                  }
                 
                </div>
                <div className='cart'>
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;