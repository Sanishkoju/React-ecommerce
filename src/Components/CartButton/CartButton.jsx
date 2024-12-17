import React , {useContext, useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import '../ProductDisplay/ProductDisplay.css'

const CartButton = ({product}) => {
    const{addToCart,num,handleminus,handleplus} = useContext(ShopContext)
  return (
    <div className="inc_dec">
    <span onClick={()=>{handleminus(product.id)}}>-</span>
    <span>{num[product.id]}</span>
    <span onClick={()=>{handleplus(product.id)}}>+</span>
    <Link to = { num[product.id]===0 ? '#' : '/cart' }><button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button></Link>
    </div>
  )
}

export default CartButton