import React from 'react'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import '../ProductDisplay/ProductDisplay.css'

const Rating = (props) => {
    const {product} =props
  return (
    <div className="productdisplay-right-star" style={{textAlign:"left"}}>
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
    <span> ({product.rating ? product.rating : 0})</span>
    </div>
  )
}

export default Rating