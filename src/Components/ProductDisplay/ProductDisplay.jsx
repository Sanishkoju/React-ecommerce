import React , {useContext, useState,useEffect} from 'react'
import './ProductDisplay.css'
import { ShopCategory } from '../../Pages/ShopCategory'
import CartButton from '../CartButton/CartButton'
import Rating from '../Rating/Rating'


export const ProductDisplay = ({product}) => {
    // const{addToCart} = useContext(ShopContext)
    
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
           <Rating product={product} />
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
            <CartButton product={product}/>          
           <p className='productdisplay-right-category'><span>Category :</span>{product.category}</p>
           <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>

        </div>
    </div>
  )
}
