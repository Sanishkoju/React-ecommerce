import React from 'react'
import './NewCollections.css'
import new_collection from '../Assets/new_collections'
import { Item } from '../Item/Item'
const NewCollections = () => {
  return (
    <section className='new-collections-sec'>
        <div className='container'>
            <div className="new-collections">
                <h1>NEW COLLECTIONS</h1>
        
                <div className='collections'>
                    {
                        new_collection.map((item,index)=>{
                            return(
                                <Item key={index} item={item} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default NewCollections