import React, { useEffect, useState } from 'react';
import { faShoppingCart,faDeleteLeft, faChainSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.css'
const Cart = ({cart,removeItem,remove}) => {


   
    // let arr=[]
    // if(cart){
      
    //     cart.map(p=>{
    //         if(arr.includes(p.id)  ){
    //             alert('Item already exist ')
    //             return 0
                
    //         }
    //         else if(cart.length>4){
    //             alert("You have choosen more than 4")
    //             return 0
    //         }
    //         else{
    //             arr.push(p.id)

    //         }
            
    //     })
    // }
    const test=(min,max)=>{
        let s1=max-min+1 
        let s2=Math.random()*s1 
        let r=Math.floor(s2)+min
        return r
    }
    const random=()=>{
        let index=test(0,cart.length-1)
        const  tem=cart[index]
        
        alert(tem.name+" , "+"Price : "+tem.price)
    }
    
        return (
            <div className='cart'>
                <h4>Selected Gadgets</h4>
                <p>selected: {cart.length}</p>
                
                
               
                {
                    
                    cart.map(product=>
                     <div className='cart-info' key={product.id}>
                             <img src={product.img} alt="" />
                             <p>{product.name}</p>
                             <FontAwesomeIcon icon={faDeleteLeft} className="del" onClick={removeItem}></FontAwesomeIcon>
                           
                     </div>
                    )
                }
                

                <button className='chooseForMe' onClick={random} >CHOOSE 1 FOR ME</button>
                <button className='chooseAgain' onClick={remove} >CHOOSE AGAIN</button>
                
                
            </div>
        );
   // }

    
};


export default Cart;