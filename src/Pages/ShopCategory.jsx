import React, {useState,useContext} from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import { Item } from '../Components/Item/Item'

export const ShopCategory = (props) => {
  const noofpost=8;
  const [num, setNum] = useState(noofpost)
  const [ascdec , setAscdec] = useState(false);
  const [open, setOpen] = useState(false);
  
 
  const handlepricedec = ()=>{
    setAscdec(false)
    setOpen(false);

  }
  const handlepriceasc = ()=>{
    setAscdec(true)
    setOpen(false);

  }
  const handleopen = ()=>{
    setOpen(!open)
  }
  const handleLoad = () =>{
    setNum((num) => num + noofpost);  
}
  
  const {all_product} =useContext(ShopContext);
  const totalcat = all_product.filter((e) => props.category === e.category).length;
  return (
    <section className='shopcat_sec'>
      <div className="container">
          <div className='shop-category'>
            <img  />
            <div className="shopcategory-indexSort">
              <p>
                <span>Showing {num > totalcat ? totalcat : num }  </span> out of {all_product.length} products
              </p>
              <div className="shopcategory-sort">
                <div onClick = {handleopen}>sort by <img className={`dropdown ${open ? "active" : "" }`}  src={dropdown_icon} alt="" /></div>

                <div className={`pricefilter ${open ? "active" : "" }`}>
                  <div onClick={()=>handlepriceasc ()}>Lowest price{ascdec.val1}</div>
                  <div onClick={()=>handlepricedec ()}>highest price{ascdec.val2}</div>
                </div>

              </div>
            </div>
            <div className="shopcategory-products">
              {
                
                all_product.slice(0, num > totalcat ? totalcat : num ).sort((a, b) => ascdec ? parseFloat(a.new_price) - parseFloat(b.new_price) : parseFloat(b.new_price) - parseFloat(a.new_price)).map((item, index) => {
                  console.log("items",props.category , item.category)
                  if(props.category === item.category){
                    return(
                      <Item key={index} item={item} />
                    )
                  }
                  else{
                    return null;                  }
                  
                })
              }
            </div>

    {(totalcat > num && totalcat > 0) ?
            <div onClick={handleLoad} className="shopcategory-loadmore">
              Explore More
            </div>
            : null } 
          </div>
      </div>
    </section>
  )
}
