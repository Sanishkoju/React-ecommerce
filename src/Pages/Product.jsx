import React ,{ useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadscrums from '../Components/Breadcrums/Breadscrums'
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay'
import { RelatedProduct } from '../Components/RelatedProduct/RelatedProduct'
import './CSS/Product.css'


const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id == Number(productId))
  const productcat = product.category;
  console.log("productcat",productcat);
  return (
    <div className='single'>
    <div className='container'>
      <Breadscrums product={product} />
      <ProductDisplay product={product} />
      <RelatedProduct all_product={all_product} productcat={productcat} />

    </div>
    </div>
  )
}

export default Product