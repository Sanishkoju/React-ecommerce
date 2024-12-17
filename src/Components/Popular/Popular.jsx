import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import { Item } from '../Item/Item'
const Popular = () => {
  return (
    <section className='popular_sec'>
        <div className='container'>
            <div className='popular'>
                <h1>POPULAR IN WOMEN</h1>
                
                <div className="popular-item">
                    {
                        data_product.map((item ,index)=>(
                        <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} /> 
                        ))
                    }
                </div>

            </div>
        </div>
    </section>
  )
}

export default Popular