import React, { useEffect, useState } from 'react';
import { faShoppingCart,faDeleteLeft, faChainSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.css'
const Cart = ({cart,removeItem,remove,random}) => {

        
        
        return (
            <div className='cart'>
                <h4>Selected Gadgets</h4>
                <p>selected: {cart.length}</p>
                
                
               
                {
                    
                    cart.map(product=>
                     <div className='cart-info' key={product.id}>
                             <img src={product.img} alt="" />
                             <p>{product.name}</p>
                             <FontAwesomeIcon icon={faDeleteLeft} className="del" onClick={removeItem(product)}></FontAwesomeIcon>
                           
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