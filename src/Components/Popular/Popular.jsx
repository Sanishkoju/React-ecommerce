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
                        <Item key={index} item={item}/> 
                        ))
                    }
                </div>

            </div>
        </div>
    </section>
  )
}

export default Popular