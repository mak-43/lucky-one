import React from 'react';
import { faShoppingCart,faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.css'
const Cart = ({cart}) => {
    console.log(cart)

    //const length=cart.length
   // if(length<5){
        return (
            <div className='cart'>
                <h2>Selected Phone{cart.id}</h2>
                <p>selected: {cart.length}</p>
                
                <p>Price : ${cart.price}</p>
                {
                    
                    cart.map(product=>
                     <div className='cart-info'>
                             <img src={product.img} alt="" />
                             <p>{product.name}</p>
                             <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
                     </div>
                    )
                }
            </div>
        );
   // }

    
};

export default Cart;