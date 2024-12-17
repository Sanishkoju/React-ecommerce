import React, {useContext} from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import { Item } from '../Components/Item/Item'

export const ShopCategory = (props) => {
  const {all_product} =useContext(ShopContext);
  return (
    <section className='shopcat_sec'>
      <div className="container">
          <div className='shop-category'>
            <img src={props.banner} />
            <div className="shopcategory-indexSort">
              <p>
                <span>Showing 1-12 </span> out of {all_product.length} products
              </p>
              <div className="shopcategory-sort">
                sort by <img src={dropdown_icon} alt="" />
              </div>
            </div>
            <div className="shopcategory-products">
              {
                all_product.map((item, index) => {
                  console.log("items",props.category , item.category)
                  if(props.category === item.category){
                    return(
                      <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    )
                  }
                  else{
                    return null;                  }
                  
                })
              }
            </div>
            <div className="shopcategory-loadmore">
              Explore More
            </div>
          </div>
      </div>
    </section>
  )
}