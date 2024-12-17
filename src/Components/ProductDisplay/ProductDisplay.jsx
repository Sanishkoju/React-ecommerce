import React , {useContext, useState,useEffect} from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopCategory } from '../../Pages/ShopCategory'
import { ShopContext } from '../../Context/ShopContext'
import { Link } from 'react-router-dom'

export const ProductDisplay = ({product}) => {
    // const{addToCart} = useContext(ShopContext)
    const{addToCart,num,handleminus,handleplus} = useContext(ShopContext)
    const [active , setActive] = useState(0);

    const handleactive =(index)=>{
        setActive(index);
    } 
 

    
  return (
    <div className="productdisplay">
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">

                {
                    product.image ?
                    product.images.map((item,index)=>(
                        <figure className={`sideimg ${active === index ? "active" : " "}`} onClick={()=> handleactive(index)} >
                      <img src={item} alt=""/>
                      </figure>
                    ))
                    :
                    null
                }
            </div>
 
            <div className="productdisplay-img sideimgright" >
            {
                product.image ?
                    product.images.map((item,index)=>(
                        active === index ?
                        <figure>
                      <img src={item} alt=""/>
                      </figure>
                      :
                      null
                    ))
                 
                :null      
}        
            </div>

        </div>
        <div className="productdisplay-right">
          <h1>{product.name}</h1>
           <div className="productdisplay-right-star">
           {Array.from({ length: (!Number.isInteger(product.rating)) ? (Math.floor(product.rating)) : product.rating }, (_, i) => {
            
                if(product.rating % 1 !== 0){
                    
                    <img src={star_dull_icon} alt="" />
               return(
                <img src={star_icon} alt="" />    
            )
            
                }
               else
                {
                return(
                    <img src={star_icon} alt="" />
                )
            }
                

            })}
            
            {(product.rating % 1 !== 0) ?
           <img src={star_dull_icon} alt="" />
           :
           <></>
}
           <span> ({product.rating})</span>
           </div>
           <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">Rs {product.old_price}</div>
            <div className="productdisplay-right-price-new">Rs {product.new_price}</div>
           </div>
           <div className="productdisplay-right-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia deleniti aperiam molestiae nostrum sapiente, laboriosam quod aut tempore doloremque veniam enim fugiat culpa, cum magnam suscipit iusto voluptatum! Sunt molestias veniam illum esse consectetur corrupti numquam in totam quasi recusandae?
           </div>
           <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-size">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
            </div>
           </div>
           <div className="inc_dec">
           <span onClick={()=>{handleminus(product.id)}}>-</span>
           <span>{num[product.id]}</span>
           <span onClick={()=>{handleplus(product.id)}}>+</span>
           <Link to = { num[product.id]===0 ? '#' : '/cart' }><button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button></Link>
           </div>
           
           <p className='productdisplay-right-category'><span>Category :</span>{product.category}</p>
           <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>

        </div>
    </div>
  )
}
