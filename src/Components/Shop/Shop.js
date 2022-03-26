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
  
    useEffect(()=>{
        const storedCart=getStoredCart();
        const savedCart=[];
        for(const id in storedCart){
            const addedProduct=products.find(product=>product.id===id)
            if(addedProduct){
                const q=storedCart[id];
                addedProduct.quantity=q
                savedCart.push(addedProduct)
           
            }
        }
        setCart(savedCart)
    },[])


   
    
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
        addToDb(product.id)
        let temp=[]
        const exists=cart.find(p=>p.id===product.id)
        if(!exists){
            temp=[...cart,product]

        }
        else{
            alert("You already add this watch")
            temp=[...cart]
        }
        if(temp.length<=4){
            setCart(temp)
        }
        else{
            alert('Oops!!! You already add 4 items')
        }
      
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