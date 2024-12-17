import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import Rating from '../Rating/Rating'
import CartButton from '../CartButton/CartButton'


export const Item = ({item}) => {
  return (
    <article className='item'>
      <Link to={`/product/${item.id}`}>
      <figure className='item-img'>
      <img src={item.image} alt="" />
      </figure>
      </Link>
      <p><Link to={`/product/${item.id}`}>{item.name}</Link></p>
      <Rating product={item}/>
      <div className='item-prices'>
        <div className='item-price-new'>Rs {item.new_price}</div>
        <div className='item-price-old'>Rs {item.old_price}</div>
      </div>
      <CartButton product={item} />
      
    </article>
  )
}
