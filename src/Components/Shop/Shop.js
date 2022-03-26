import { faChainSlash } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../Utilities/FakeDB';
import './Shop.css'
const Shop = () => {
    let te=[]
    let tem=[]
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[cart])



   
    const remove=()=>{
        setCart([])
      
    }
    const test=(min,max)=>{
        let s1=max-min+1 
        let s2=Math.random()*s1 
        let r=Math.floor(s2)+min
        return r
    }
    const random=()=>{      
            let index=test(0,cart.length-1)
             tem=cart[index]         
            alert(tem.name+" , "+"Price : "+tem.price)           
            te.push(tem)       
            setCart(te)
            
    }  
    const handleAddToCart=(product)=>{       
        const newCart=[...cart,product]
        setCart(newCart)
      
    } 
    const removeItem=(e)=>{
        
    } 
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
                        removeItem={removeItem}
                        random={random}
                        remove={remove}
                        
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;