import React from 'react';
import { faShoppingCart,faDeleteLeft, faChainSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.css'
const Cart = ({cart,removeItem}) => {
    

   

    const test=(min,max)=>{
        let s1=max-min+1 
        let s2=Math.random()*s1 
        let r=Math.floor(s2)+min
        return r
    }
    const choose1ForMe=()=>{
        let index=test(0,cart.length-1)
        const  tem=cart[index]
        alert("Buy "+tem.name+' , '+'Price : '+tem.price)
        return tem  
    }
   
    
    const chooseAgain=()=>{

        // cart.length=0
        // console.log(cart.length)

    }
    
    //const length=cart.length
   // if(length<5){
        return (
            <div className='cart'>
                <h4>Selected Gadgets</h4>
                <p>selected: {cart.length}</p>
                
                
               
                {
                    
                    cart.map(product=>
                     <div className='cart-info' key={product.id}>
                             <img src={product.img} alt="" />
                             <p>{product.name}</p>
                             <FontAwesomeIcon icon={faDeleteLeft} className="del" onClick={()=>removeItem(product)}></FontAwesomeIcon>
                           
                     </div>
                    )
                }
                

                <button className='chooseForMe' onClick={choose1ForMe} >CHOOSE 1 FOR ME</button>
                <button className='chooseAgain' onClick={chooseAgain}>CHOOSE AGAIN</button>
                
                
            </div>
        );
   // }

    
};


export default Cart;