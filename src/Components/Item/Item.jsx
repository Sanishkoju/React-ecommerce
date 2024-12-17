import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

export const Item = (props) => {
  return (
    <article className='item'>
      <Link to={`/product/${props.id}`}>
      <figure className='item-img'>
      <img src={props.image} alt="" />
      </figure>
      </Link>
      <p><Link to={`/product/${props.id}`}>{props.name}</Link></p>
      <div className='item-prices'>
        <div className='item-price-new'>Rs {props.new_price}</div>
        <div className='item-price-old'>Rs {props.old_price}</div>
      </div>
    </article>
  )
}
