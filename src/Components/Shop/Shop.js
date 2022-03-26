import { faChainSlash } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {

    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handleAddToCart=(product)=>{
        
        const newCart=[...cart,product]
        setCart(newCart)
    }
    // const removeItem=(product)=>{
    //     const newCart=cart.indexOf(product)
    //     console.log(newCart)

    // }
    return (
        <div className='shop-container'>
            <div>
                <h1>Best Gadget Generator</h1>
                <h3>Choose 4 Gadgets</h3>
            </div>
            <div className='products-container'>
                <div className='product-container'>
                  {

                      products.map(product=><Product
                       key={product.id} 
                        product={product}
                        handleAddToCart={handleAddToCart}
                      ></Product>)
                  }
                 
                </div>
                <div className='cart-container'>
                    
                    <Cart
                       
                        cart={cart}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;