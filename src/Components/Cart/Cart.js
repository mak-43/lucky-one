import React from 'react';
import { faShoppingCart,faDeleteLeft, faChainSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.css'
const Cart = ({cart,removeItem}) => {
    
  let r
  let arr=[]
    
    const choose1ForMe=()=>{
       
        cart.map(i=>{
            const t=i.id
            arr.push(t)
        })
        const l=[...arr]
        r=Math.random(l)

       console.log(arr)
    }
    const chooseAgain=()=>{

    }




    //const length=cart.length
   // if(length<5){
        return (
            <div className='cart'>
                <h2>Selected Phone</h2>
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
                <button className='chooseForMe' onClick={()=>choose1ForMe()} >CHOOSE 1 FOR ME</button>
                <button className='chooseAgain' onClick={()=>chooseAgain()}>CHOOSE AGAIN</button>

            </div>
        );
   // }

    
};

export default Cart;