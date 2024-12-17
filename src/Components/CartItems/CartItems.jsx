import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

export const CartItems = () => {
    const{updateCart,removeallFromCart,num,handleplus,addToCart,totalAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext)
  
  return (
    <>
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quality</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        {
            all_product.map((e)=>{
                console.log("eid",cartItems[e.id])
                if(cartItems[e.id]>0)
                {
                return(
                <div>
                    <div className="cartitems-format">
                        <img src={e.image} alt="" className='carticon-product-icon'/>
                        <div className='name'><p>{e.name}</p></div>
                        <div className='newprice'><p>Rs {e.new_price}</p></div>
                        <div className='cartitems-quantity'>
                        <div className='quantity-box' onClick={()=>removeFromCart(e.id)}>-</div>
                       
                        <div className='quantity-box'>{cartItems[e.id]}</div>
                        
                        <div className='quantity-box' onClick={()=>updateCart(e.id)}>+</div>
                        </div>
                        <div className='quantity'>Rs {e.new_price*cartItems[e.id]}</div>
                        <div className="cross"><img src={remove_icon} onClick={()=>removeallFromCart(e.id)} alt=""/></div>
                    </div>
                </div> 
                    )
                }
                else{
                    return(<></>)
                }
            })
        }
 
    </div>
    <div className="carttotal">
        <h2>Cart Totals</h2>
    
    <div className="subtotals">
        <span>Total: </span><span>Rs {totalAmount}</span>
    </div>
    </div>
    <div><Link style={{marginBottom:"60px" ,padding:"15px" ,background:"var(--primary-color)", color:"#fff"}} to ="/">Go to Shop</Link> </div>
    </>
  )
}
